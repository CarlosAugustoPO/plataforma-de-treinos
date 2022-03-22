import type UserData from 'src/types/UserData';

export default async function userGet(userRequest: {
  email: string;
  select: object;
}): Promise<UserData> {
  const getUser: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/user/get`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userRequest }),
    },
  );
  const user = await getUser.json();
  return user;
}
