export default async function updateIsVerified(email: string) {
  const updateUserIsVerified = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/update-is-verified`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    },
  );
  const resVerification = await updateUserIsVerified.json();
  return resVerification;
}
