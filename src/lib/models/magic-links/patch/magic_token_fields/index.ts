import { v4 as uuidv4 } from 'uuid'; // npm module
import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

export default async function patchMagicLinksMagicTokenFieldModel(queryParams: {
  email: string;
}): Promise<Ok> {
  const magicToken = uuidv4(); // It will give you a random key
  const createdAtBr = formatDate(new Date());

  try {
    await prisma.magic_links.update({
      where: {
        user_email: queryParams.email,
      },
      data: {
        updated_at_br: createdAtBr,
        magic_token: magicToken,
        is_disabled: null,
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
