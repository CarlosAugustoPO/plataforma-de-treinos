import type Result from 'src/types/Result';

export default async function deleteUser(
  email: string,
): Promise<Result> {
  const deleteUserResult: any = await fetch('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });
  const deleteUserJson = await deleteUserResult.json();
  return deleteUserJson;
}
