import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

const patchUsersRecoveryCodeFieldModel = async (queryParams: {
  email: string;
  reset: boolean;
}): Promise<Ok> => {
  const emailTratado = queryParams.email.toLowerCase();
  const updateAtBr = formatDate(new Date());
  const updateAt = new Date();
  const verificationCode =
    Math.floor(Math.random() * 87539) + 13251;

  try {
    await prisma.users.update({
      where: {
        email: emailTratado,
      },
      data: {
        updated_at_br: updateAtBr,
        recovery_code_date: updateAt,
        recovery_code: queryParams.reset
          ? null
          : verificationCode,
      },
    });

    return {
      ok: 'Update recovery code with success',
    };
  } catch (e: any) {
    console.log(
      'In patchUsersRecoveryCodeFieldModel: ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default patchUsersRecoveryCodeFieldModel;
