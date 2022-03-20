import Ok from 'src/types/Ok';

export default async function updateIsVerified(
  email: string,
): Promise<Ok> {
  const updateUserIsVerified: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/update-is-verified`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    },
  );
  const verification = await updateUserIsVerified.json();
  return verification;
}
