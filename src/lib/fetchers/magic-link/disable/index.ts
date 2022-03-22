import type Ok from 'src/types/Ok';

export default async function disableMagicLink(
  email: string,
): Promise<Ok> {
  const result: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magic-link/update-disable`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    },
  );
  const json = await result.json();
  return json;
}
