import { query } from 'src/lib/utils/db';
import formatDate from 'src/lib/utils/formatDate';
import type User from 'src/types/User';

async function getUser(
  email: string,
  fieldsToGet: string[],
): Promise<User> {
  const fieldsToGetList = fieldsToGet?.toString();
  try {
    const findUser: any = await query(
      `
      SELECT ${fieldsToGetList}
      FROM users
      WHERE email = ?
    `,
      email,
    );
    const user: any = findUser[0];
    if (!user) {
      return { error: 'Falha em localizar usuário' };
    }
    if (user.is_verified != null) {
      user.is_verified = formatDate(user.is_verified);
    }
    return user;
  } catch (e: any) {
    return { error: e.message };
  }
}

export default getUser;
