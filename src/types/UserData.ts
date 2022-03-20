type UserData = {
  data?: {
    id: number;
    fname: string;
    lname: string;
    email: string;
    verification_code: string;
    is_verified: Date | null;
    jwtKey: string | null;
    password: string;
    fragment_hash_password: string;
  };
  ok?: string;
  error?: string;
};

export default UserData;
