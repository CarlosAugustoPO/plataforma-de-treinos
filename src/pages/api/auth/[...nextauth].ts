import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

type SessionProps = {
  session: any;
  token: any;
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Credentials({
      id: 'username-login',
      name: 'Login',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        const protocol =
          req?.headers?.['x-forwarded-proto'] || 'http';
        const visitedDomain = req?.headers?.host;
        const visitedUrl = `${protocol}://${visitedDomain}`;
        const res = await fetch(
          `${visitedUrl}/api/auth/sign-in`,
          {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
            }),
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const user = await res.json();
        if (user.error) throw Error(user.error);
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.fname = user.fname;
        token.lname = user.lname;
        token.email = user.email;
        token.is_verified = user.is_verified;
        token.jwt_key = user.jwt_key;
        token.fragment_hash_password =
          user.fragment_hash_password;
      }
      if (account?.provider === 'google') {
        token.id = profile?.sub;
        token.fname = profile?.name;
        token.lname = profile?.family_name;
        token.email = profile?.email;
        token.is_verified = profile?.email_verified;
        token.jwt_key = 'Google login';
        token.fragment_hash_password = 'Google login';
      }
      return token;
    },
    async session({ session, token }: SessionProps) {
      session.user.id = token.id;
      session.user.fname = token.fname;
      session.user.lname = token.lname;
      session.user.email = token.email;
      session.user.is_verified = token.is_verified;
      session.user.jwt_key = token.jwt_key;
      session.user.fragment_hash_password =
        token.fragment_hash_password;
      return session;
    },
  },
});
