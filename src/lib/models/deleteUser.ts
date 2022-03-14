import { query } from 'src/lib/utils/db';
import type Result from 'src/types/Result';

async function deleteUser(email: string): Promise<Result> {
  try {
    await query(
      `
        DELETE
        FROM users
        WHERE email = ?
      `,
      email,
    );
    return { ok: 'sucess' };
  } catch (e: any) {
    return { error: e.message };
  }
}

export default deleteUser;
