import { query } from 'src/lib/utils/db';
import { v4 as uuidv4 } from 'uuid'; // npm module

type Result = {
  ok?: string;
  error?: string;
};

export default async function insertMagicToken(
  email: string,
): Promise<Result> {
  const magicToken = uuidv4(); // It will give you a random key
  try {
    await query(
      `
      UPDATE magic_links
      SET magic_token = ?
      WHERE user_email = ?
       `,
      [magicToken, email],
    );
    return {
      ok: 'Magic token atualizado com sucesso',
    };
  } catch (e: any) {
    return {
      error: `Falha em atualizar magic token: ${e.message}`,
    };
  }
}
