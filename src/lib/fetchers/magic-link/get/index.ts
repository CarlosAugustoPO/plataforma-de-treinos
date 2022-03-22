import type MagicTokenData from 'src/types/MagicTokenData';

export default async function magicTokenGet(
  email: string,
): Promise<MagicTokenData> {
  const result: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magic-link/get`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    },
  );
  const json = await result.json();
  return json;
}
