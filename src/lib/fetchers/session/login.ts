import { signIn } from 'next-auth/react';
import type User from 'src/types/User';

export default async function login(userCredentials: {
  email: string;
  password: string;
  redirect: boolean;
  callBackUrl?: string;
}): Promise<User | undefined> {
  if (typeof window !== 'undefined') {
    const signInResult: any = await signIn('username-login', {
      ...userCredentials,
    });

    if (signInResult?.error) {
      return { error: 'Falha em realizar login' };
    }
    return signInResult;
  }
}
