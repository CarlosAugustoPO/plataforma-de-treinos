import Ok from 'src/types/Ok';

export default async function updateJwtKey(props: {
  email: string;
  logoutRequestId?: string;
}): Promise<Ok> {
  const response = await fetch(
    `/api/users/patch/jwt-key-field`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: props.email,
        logoutRequestId: props.logoutRequestId,
      }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
