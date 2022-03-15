//Session used to determine my types
export default interface Session {
  user: {
    id?: number;
    fname?: string;
    lname?: string;
    email?: string;
    is_verified?: Date | string;
    fragment_hash_password?: string;
    jwtKey?: string;
  };
  expires?: Date;
}

//Session used to determine nexxt auth types
declare module 'next-auth' {
  interface Session {
    user: {
      id?: number;
      fname?: string;
      lname?: string;
      email?: string;
      is_verified?: Date | string;
      fragment_hash_password?: string;
      jwtKey?: string;
    };
    expires?: Date;
  }
}
