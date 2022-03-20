import prisma from 'src/lib/vendor/prisma/index';
import { v4 as uuidv4 } from 'uuid'; // npm module
import type MagicTokenResult from 'src/types/MagicTokenResult';
import formatDate from 'src/lib/utils/formatDate';

export default async function insertMagicToken(queryParams: {
  email: string;
}): Promise<MagicTokenResult> {
  const magicTokenValue = uuidv4(); // It will give you a random key
  const createdAtBr = formatDate(new Date());
  try {
    await prisma.magic_links.create({
      data: {
        magic_token: magicTokenValue,
        user_email: queryParams.email,
        created_at_br: createdAtBr,
      },
    });

    const magicTokenResult = {
      result: magicTokenValue,
      ok: 'magic token inserido com sucesso',
    };
    return {
      ...magicTokenResult,
    };
  } catch (e: any) {
    console.log('In insertMagicToken: ', e.message, e.code);
    return { error: e };
  }
}
