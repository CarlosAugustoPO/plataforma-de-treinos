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
    email,
    fieldsToGet: ['verification_code'],
  });

  if (magicToken) {
    const magicTokenInDB = await getToken(email);
    if (magicTokenInDB.error) {
      return {
        ok: false,
        error: true,
        message: magicTokenInDB.error,
      };
    }
    const mTokenInDB = magicTokenInDB.result;
    if (mTokenInDB != magicToken) {
      return {
        ok: false,
        error: true,
        message:
          'Falha em verificar email, magic token inválido',
      };
    }
  }

  const verificationCodeInDB = user.verification_code;
  if (verificationCode != verificationCodeInDB) {
    return {
      ok: false,
      error: true,
      message:
        'Falha em verificar email, verifique o código inserido e tente novamente',
    };
  }

  const updateIsVerifiedResult = await updateIsVerified(email);
  if (updateIsVerifiedResult.error) {
    return {
      ok: false,
      error: true,
      message: updateIsVerifiedResult.error,
    };
  }

  if (magicToken) {
    const disableMagicLinkResult = await disableMagicLink(email);
    if (disableMagicLinkResult.error) {
      return {
        ok: false,
        error: true,
        message: disableMagicLinkResult.error,
      };
    }
  }
  if (typeof window !== 'undefined') {
    const reloadSession = await reload({
      email,
      password: `${hashFragment}`,
      redirect: false,
    });

    if (reloadSession?.error) {
      return {
        ok: false,
        error: true,
        message: reloadSession.error,
      };
    }
  }

  return {
    ok: true,
    error: false,
    message: 'Código validado com sucesso',
  };
}
