//Session used to determine my types
export default interface Session {
  user: {
    id?: number;
    fname?: string;
    lname?: string;
    email?: string;
    is_verified?: Date | string | boolean;
    fragment_hash_password?: string;
    jwt_key?: string;
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
      is_verified?: Date | string | boolean;
      fragment_hash_password?: string;
      jwt_key?: string;
    };
    expires?: Date;
  }
}
