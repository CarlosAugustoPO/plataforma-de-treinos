import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

const patchUsersIsVerifiedFieldModel = async (queryParams: {
  newEmail: string;
  oldEmail: string;
}): Promise<Ok> => {
  const newEmailTratado = queryParams.newEmail.toLowerCase();
  const oldEmailTratado = queryParams.oldEmail.toLowerCase();
  const createdAtBr = formatDate(new Date());

  try {
    await prisma.users.update({
      where: {
        email: oldEmailTratado,
      },
      data: {
        updated_at_br: createdAtBr,
        email: newEmailTratado,
      },
    });

    return {
      ok: 'E-mail atualizado com sucesso',
    };
  } catch (e: any) {
    console.log(
      'In patchUsersIsVerifiedFieldModel: ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default patchUsersIsVerifiedFieldModel;
