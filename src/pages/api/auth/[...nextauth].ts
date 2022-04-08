import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

type SessionProps = {
  session: any;
  token: any;
};

export default NextAuth({
  providers: [
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
        console.log('aqui: ', visitedUrl);
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
    signIn: '/entrar',
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.fname = user.fname;
        token.lname = user.lname;
        token.email = user.email;
        token.is_verified = user.is_verified;
        token.fragment_hash_password =
          user.fragment_hash_password;
        token.jwtKey = user.jwtKey;
      }
      return token;
    },
    async session({ session, token }: SessionProps) {
      session.user.id = token.id;
      session.user.fname = token.fname;
      session.user.lname = token.lname;
      session.user.email = token.email;
      session.user.is_verified = token.is_verified;
      session.user.fragment_hash_password =
        token.fragment_hash_password;
      session.user.jwtKey = token.jwtKey;
      return session;
    },
  },
});
