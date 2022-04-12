import readUser from 'src/lib/fetchers/users/read/index';
import reloginSession from 'src/lib/fetchers/session/relogin/index';
import readMagicLink from 'src/lib/fetchers/magic-links/read/index';
import updateUserIsVerifiedField from 'src/lib/fetchers/users/update/isVerifiedField/index';
import updateMakicLinkIsDisabledField from 'src/lib/fetchers/magic-links/update/isDisabledField/index';

type Props = {
  verificationCode: string;
  email: string;
  hashFragment: string;
  magicToken?: string;
  fromLink?: boolean;
};

export default async function verifyCode({
  verificationCode,
  email,
  hashFragment,
  magicToken,
  fromLink,
}: Props) {
  const user = await readUser({
    email: email,
    select: { verification_code: true },
  });
  if (user.error) {
    return {
      error: user.error,
    };
  }

  if (fromLink) {
    const magicTokenInDB = await readMagicLink(email);
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
  }
  const verificationCodeInDB = user.data?.verification_code;
  if (verificationCode != verificationCodeInDB) {
    return {
      error:
        'Falha em verificar email, verifique o código inserido e tente novamente',
    };
  }

  const updateIsVerifiedResult = await updateUserIsVerifiedField(
    email,
  );
  if (updateIsVerifiedResult.error) {
    return {
      error: updateIsVerifiedResult.error,
    };
  }

  const disableMagicLinkResult =
    await updateMakicLinkIsDisabledField(email);

  if (disableMagicLinkResult.error) {
    return {
      error: disableMagicLinkResult.error,
    };
  }

  const reloginSessionResult = await reloginSession({
    email,
    password: `${hashFragment}`,
    redirect: false,
  });

  if (reloginSessionResult?.error) {
    return {
      error: reloginSessionResult.error,
    };
  }

  return {
    ok: 'Código validado com sucesso',
    error: null,
  };
}
