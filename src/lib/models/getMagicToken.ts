import { query } from 'src/lib/utils/db';
import type Result from 'src/types/Error';

async function getMToken(email: string): Promise<Result> {
  try {
    const findMToken: any = await query(
      `
      SELECT magic_token, updated_at, is_disabled
      FROM magic_links
      WHERE user_email = ?
    `,
      email,
    );
    const mToken: any = findMToken[0].magic_token;
    const isDisabled: any = findMToken[0].is_disabled;
    const mTokenDate: any = findMToken[0].updated_at;
    const tokenDate: any = new Date(mTokenDate);
    const today: any = new Date();
    const diffTime = Math.abs(today - tokenDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {
      return { error: 'Link mágico inspirado' };
    }
    if (!mToken) {
      return { error: 'Falha em localizar magic token' };
    }
    if (isDisabled != null) {
      return {
        error:
          'Esse link já foi utilizado antes e só pode ser utilizado uma vez',
      };
    }
    return mToken;
  } catch (e: any) {
    return { error: e.message };
  }
}

export default getMToken;
