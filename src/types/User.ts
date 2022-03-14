type User = {
  id?: number;
  fname?: string;
  lname?: string;
  email?: string;
  verification_code?: string;
  is_verified?: Date | string;
  jwtKey?: string;
  password?: string;
  error?: string;
};

export default User;
