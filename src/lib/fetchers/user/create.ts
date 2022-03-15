import type Result from 'src/types/Result';

export default async function createUser(newUser: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}): Promise<Result> {
  const signUp: any = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newUser }),
  });
  const signUpJson = await signUp.json();
  return signUpJson;
}
