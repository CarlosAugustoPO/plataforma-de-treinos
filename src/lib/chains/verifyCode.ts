import userGet from 'src/lib/fetchers/user/get';
import updateIsVerified from 'src/lib/fetchers/user/update/isVerified';
import reload from 'src/lib/fetchers/session/reload';
import getToken from 'src/lib/fetchers/mail/getMagicToken';
import disableMagicLink from 'src/lib/fetchers/mail/disableMagicLink';

type Props = {
  verificationCode: string;
  email: string;
  hashFragment: string;
  magicToken?: string;
};

export default async function verifyCode({
  verificationCode,
  email,
  hashFragment,
  magicToken,
}: Props) {
  const user = await userGet({
    email: email,
    select: { verification_code: true },
  });
  if (user.error) {
    return {
      error: user.error,
    };
  }

  const magicTokenInDB = await getToken(email);
  if (magicTokenInDB.error) {
    return {
      error: magicTokenInDB.error,
    };
  }
  const mTokenInDB = magicTokenInDB.data?.magic_token;
  if (mTokenInDB != magicToken) {
    return {
      error: 'Falha em verificar email, magic token inválido',
    };
  }

  const verificationCodeInDB = user.data?.verification_code;
  if (verificationCode != verificationCodeInDB) {
    return {
      error:
        'Falha em verificar email, verifique o código inserido e tente novamente',
    };
  }

  const updateIsVerifiedResult = await updateIsVerified(email);
  if (updateIsVerifiedResult.error) {
    return {
      error: updateIsVerifiedResult.error,
    };
  }

  const disableMagicLinkResult = await disableMagicLink(email);
  if (disableMagicLinkResult.error) {
    return {
      error: disableMagicLinkResult.error,
    };
  }
  const reloadSession = await reload({
    email,
    password: `${hashFragment}`,
    redirect: false,
  });

  if (reloadSession?.error) {
    return {
      error: reloadSession.error,
    };
  }

  return {
    ok: 'Código validado com sucesso',
    error: null,
  };
}
