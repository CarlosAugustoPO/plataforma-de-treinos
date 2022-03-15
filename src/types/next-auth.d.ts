import NextAuth from 'next-auth';

declare module 'next-auth' {
  export interface Session {
    user: {
      id?: number;
      fname?: string;
      lname?: string;
      email?: string;
      is_verified?: Date | string;
      fragment_hash_password?: string;
      jwtKey?: string;
    };
  }
}

export default Session;
