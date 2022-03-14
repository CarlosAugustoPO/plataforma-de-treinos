import { signIn } from 'next-auth/react';
import type User from 'src/types/User';
import type Error from 'src/types/Error';

export default async function login(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<User | Error | undefined> {
  const signInResult = signIn('username-login', {
    ...userCredentials,
  });
  return signInResult;
}
