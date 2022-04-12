import type Ok from 'src/types/Ok';

export default async function comparePassword(props: {
  password: string;
}): Promise<Ok> {
  const response = await fetch(
    '/api/users/match/inserted-password-vs-data-password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...props }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
