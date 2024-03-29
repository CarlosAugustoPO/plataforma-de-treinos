import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';

export default async function loginSession(userCredentials: {
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
    return {
      error: response.error,
      status: response.status,
      url: response.url,
      ok: response.ok,
    };
  }
  return response;
}
