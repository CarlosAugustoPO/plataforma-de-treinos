type Session = {
  user: {
    id?: string | null;
    fname?: string | null;
    is_verified?: string | null;
    jwtKey?: string | null;
    fragment_hash_password?: string | null;
    expires?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

export default Session;
