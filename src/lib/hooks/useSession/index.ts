import { useSession as NextAuthSession } from 'next-auth/react';
import useRouter from 'src/lib/hooks/useRouter';

export default function useSession(required?: 'required') {
  const router = useRouter();
  if (required === 'required') {
    const { data: session } = NextAuthSession({
      required: true,
      onUnauthenticated() {
        router.push('/');
        return null;
      },
    });
    return { user: { ...session?.user } };
  } else {
    const { data: session } = NextAuthSession();
    return { user: { ...session?.user } };
  }
}
