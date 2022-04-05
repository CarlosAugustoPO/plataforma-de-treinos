import type Ok from 'src/types/Ok';

export default async function updateMagicLinksIsDisabledField(
  email: string,
): Promise<Ok> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magic-links/patch/is-disabled-field`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
