import { SignOutResponse } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default async function logoutSession(options: {
  redirect?: boolean;
  callbackUrl?: string;
}): Promise<SignOutResponse> {
  /*****
   * to redirect, pass callbackUrl via params and
   * then call useRouter().push(sair.url)
   *****/
  const response: SignOutResponse | any = await signOut({
    redirect: options?.redirect || false,
    callbackUrl: options?.callbackUrl || '/entrar',
  });
  return response;
}
