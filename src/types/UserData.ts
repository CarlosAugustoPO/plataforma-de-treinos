type UserData = {
  data?: {
    id: number;
    fname: string;
    lname: string;
    email: string;
    verification_code: string;
    recovery_code: string;
    recovery_code_date: Date | null;
    is_verified: Date | null;
    jwt_key: string | null;
    password: string;
    fragment_hash_password: string;
  };
  ok?: string;
  error?: string;
};

export default UserData;
