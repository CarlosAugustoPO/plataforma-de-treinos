import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';

export default async function login(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<SignInResponse> {
  const signInResult: SignInResponse | any = await signIn(
    'username-login',
    {
      ...userCredentials,
    },
  );

  if (signInResult?.error) {
    return {
      error:
        'Falha em realizar login verifique suas credenciais e tente novamente',
      status: signInResult.status,
      url: signInResult.url,
      ok: signInResult.ok,
    };
  }
  return signInResult;
}
