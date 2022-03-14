export default async function userGet(userRequest: {
  email: string;
  fieldsToGet: string[];
}) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/get`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userRequest }),
    },
  );
  const user = await result.json();
  return user;
}
