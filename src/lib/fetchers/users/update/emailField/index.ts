import Ok from 'src/types/Ok';

export default async function updateUserEmailField(props: {
  email: string;
}): Promise<Ok> {
  const response = await fetch(`/api/users/patch/email-field`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: props.email,
    }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}
