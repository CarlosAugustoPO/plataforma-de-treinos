import type Result from 'src/types/Result';

export default async function disableMagicLink(
  email: string,
): Promise<Result> {
  const result = await fetch(
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
