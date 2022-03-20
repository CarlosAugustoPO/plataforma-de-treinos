import type Ok from 'src/types/Ok';

export default async function deleteUser(
  email: string,
): Promise<Ok> {
  const deleteUserQuery: Response = await fetch(
    '/api/user/delete',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    },
  );
  const deleteResult = await deleteUserQuery.json();
  return deleteResult;
}
