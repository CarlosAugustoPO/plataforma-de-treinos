import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';

export default async function reloadResultSession(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<SignInResponse> {
  const reloadResult: SignInResponse | any = await signIn(
    'username-login',
    {
      ...userCredentials,
    },
  );

  if (reloadResult?.error) {
    console.log('In reloadResult:', reloadResult.error);
    return {
      error: 'Falha em realizar reloadResult',
      status: reloadResult.status,
      url: reloadResult.url,
      ok: reloadResult.ok,
    };
  }

  return reloadResult;
}
