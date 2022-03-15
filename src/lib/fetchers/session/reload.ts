import { signIn } from 'next-auth/react';
import type Result from 'src/types/Result';

export default async function login(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<Result | undefined> {
  const signInResult = signIn('username-login', {
    ...userCredentials,
  });
  return signInResult;
}
