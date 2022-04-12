import Ok from 'src/types/Ok';

export default async function updateMagicLinksMagicTokenField(
  email: string,
): Promise<Ok> {
  const response: Response = await fetch(
    `/api/magic-links/patch/magic-token-fields/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
