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
    const create: any = await query(
      `
         INSERT INTO magic_links (magic_token, user_email)
         VALUES (?, ?)
       `,
      [magicToken, email],
    );
    await create;
    return {
      ok: 'Magic token registrado com sucesso',
    };
  } catch (e: any) {
    return { error: e };
  }
}
