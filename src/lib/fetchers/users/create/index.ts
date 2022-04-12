import type Ok from 'src/types/Ok';

export default async function createUser(newUser: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}): Promise<Ok> {
  const response = await fetch('/api/users/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newUser }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}
