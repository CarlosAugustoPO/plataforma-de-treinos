import Ok from 'src/types/Ok';

export default async function updateMagicLinksUserEmail(props: {
  email: string;
}): Promise<Ok> {
  const response = await fetch(
    `/api/magic-links/patch/user-email-field`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: props.email,
      }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
