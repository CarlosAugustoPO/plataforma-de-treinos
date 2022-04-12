import type Ok from 'src/types/Ok';

export default async function deleteUser(
  email: string,
): Promise<Ok> {
  const response = await fetch('/api/users/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}
