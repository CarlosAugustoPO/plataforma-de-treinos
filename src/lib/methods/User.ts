import type User from 'src/types/User';
import type Ok from 'src/types/Ok';
import type Error from 'src/types/Error';
import type Session from 'src/types/Session';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const user = {
  get: async (userRequest: {
    email: string;
    fieldsToGet: string[];
  }): Promise<User> => {
    const getUserDB = await fetch('api/user/get', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userRequest }),
    });
    const getUserDBJson = await getUserDB.json();
    return getUserDBJson;
  },

  create: async (newUser: {
    fname: string;
    lname: string;
    email: string;
    password: string;
  }): Promise<Ok | Error> => {
    const signUp: any = await fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newUser }),
    });
    const signUpJson = await signUp.json();
    return signUpJson;
  },

  update: {
    isVerified: async (email: string) => {
      const updateUserIsVerified = await fetch(
        'api/user/update-is-verified',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
          }),
        },
      );
      const resVerification = await updateUserIsVerified.json();
      return resVerification;
    },
  },

  session: {
    login: async (userCredentials: {
      email: string;
      password: string;
      redirect: boolean;
      callBackUrl?: string;
    }): Promise<User | undefined> => {
      const signInResult = signIn('username-login', {
        ...userCredentials,
      });
      return signInResult;
    },

    reload: (userCredentials: {
      email: string;
      password: string;
      redirect: boolean;
      callBackUrl?: string;
    }): Promise<User | undefined> => {
      return user.session.login(userCredentials);
    },

    use: {
      unneeded: function useMySession(): Session | null {
        const { data: session } = useSession();
        return { user: { ...session?.user } };
      },

      required: function useMySession(): Session | null {
        const router = useRouter();
        const { data: session } = useSession({
          required: true,
          onUnauthenticated() {
            router.push('/');
            return null;
          },
        });
        return { user: { ...session?.user } };
      },

      improper: function useMySession(): null {
        const router = useRouter();
        const { data: session } = useSession();
        if (session != null) {
          router.push('/painel');
          return null;
        }
        return null;
      },
    },
    status: function useMySession():
      | 'authenticated'
      | 'unauthenticated'
      | 'loading' {
      const { status } = useSession();
      return status;
    },

    logout: () => signOut({ redirect: false }),
  },
};
export default user;
