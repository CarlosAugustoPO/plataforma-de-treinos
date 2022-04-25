import Ok from 'src/types/Ok';

export default async function updateUserPasswordField(props: {
  email: string;
  newPassword: string;
}): Promise<Ok> {
  const response = await fetch(
    `/api/users/patch/password-field`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: props.email,
        newPassword: props.newPassword,
      }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
