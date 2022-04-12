import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

const patchMagicLinksUserEmailFieldModel = async (queryParams: {
  newEmail: string;
  oldEmail: string;
}): Promise<Ok> => {
  const newEmailTratado = queryParams.newEmail.toLowerCase();
  const oldEmailTratado = queryParams.oldEmail.toLowerCase();
  const createdAtBr = formatDate(new Date());

  try {
    await prisma.magic_links.update({
      where: {
        user_email: oldEmailTratado,
      },
      data: {
        updated_at_br: createdAtBr,
        user_email: newEmailTratado,
      },
    });

    return {
      ok: 'Magic links atualizado com sucesso',
    };
  } catch (e: any) {
    console.log(
      'In patchMagicFieldUserEmailFieldModel: ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default patchMagicLinksUserEmailFieldModel;
