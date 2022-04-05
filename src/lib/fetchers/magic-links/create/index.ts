import type MagicLinksResult from 'src/types/MagicLinksResult';

export default async function createMagicLink(
  email: string,
): Promise<MagicLinksResult> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magic-links/post`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
