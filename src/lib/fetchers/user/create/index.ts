import type Ok from 'src/types/Ok';

export default async function createUser(newUser: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}): Promise<Ok> {
  const signUp: Response = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newUser }),
  });
  const signUpJson = await signUp.json();
  return signUpJson;
}
