import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';

export default async function login(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<SignInResponse> {
  // if (typeof window !== 'undefined') {
  const signInResult: SignInResponse | any = await signIn(
    'username-login',
    {
      ...userCredentials,
    },
  );

  if (signInResult?.error) {
    console.log('In login signInResult:', signInResult.error);
    return {
      error: 'Falha em realizar login',
      status: signInResult.status,
      url: signInResult.url,
      ok: signInResult.ok,
    };
  }
  return signInResult;
  // }
  //Return undefined case typeof window undefined
}
