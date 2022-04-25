import Ok from 'src/types/Ok';

export default async function updateUsersRecoveryCodeFields(
  email: string,
  reset?: boolean,
): Promise<Ok> {
  const response = await fetch(
    `/api/users/patch/recovery-code-fields`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        reset,
      }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
