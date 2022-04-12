import type UserData from 'src/types/UserData';

export default async function readUser(userRequest: {
  email: string;
  select: object;
}): Promise<UserData> {
  const response = await fetch(`/api/users/get`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...userRequest }),
  });
  const user = await response.json();
  return user;
}
