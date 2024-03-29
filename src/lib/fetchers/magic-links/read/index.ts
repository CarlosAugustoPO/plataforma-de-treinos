import type MagicLinksData from 'src/types/MagicLinksData';

export default async function readMagicLink(
  email: string,
): Promise<MagicLinksData> {
  const response = await fetch(`/api/magic-links/get`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(email),
  });
  const magicLink = await response.json();
  return magicLink;
}
