import type Result from 'src/types/Result';

export default async function magicLink(
  email: string,
): Promise<Result> {
  const createMagicLink: any = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magic-link/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    },
  );
  const magicLinkJson = await createMagicLink.json();
  return magicLinkJson;
}
