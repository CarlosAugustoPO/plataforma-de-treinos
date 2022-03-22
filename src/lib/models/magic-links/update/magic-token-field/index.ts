import { v4 as uuidv4 } from 'uuid'; // npm module
import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

export default async function insertMagicToken(queryParams: {
  email: string;
}): Promise<Ok> {
  const magicToken = uuidv4(); // It will give you a random key
  try {
    await prisma.magic_links.update({
      where: {
        user_email: queryParams.email,
      },
      data: {
        magic_token: magicToken,
      },
    });

    return {
      ok: 'Magic token update com sucesso',
    };
  } catch (e: any) {
    console.log('In updateMagicToken: ', e.message, e.code);
    return {
      error: `Falha em atualizar magic token: ${e.message}`,
    };
  }
}
