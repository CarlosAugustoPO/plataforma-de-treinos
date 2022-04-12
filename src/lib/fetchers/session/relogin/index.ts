import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';

export default async function reloginSession(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<SignInResponse> {
  const response: SignInResponse | any = await signIn(
    'username-login',
    {
      ...userCredentials,
    },
  );

  if (response?.error) {
    console.log('In ReSign:', response.error);
    return {
      error: 'Falha em realizar re login',
      status: response.status,
      url: response.url,
      ok: response.ok,
    };
  }

  return response;
}
