import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

const patchUsersVerificationCodeFieldModel =
  async (queryParams: { email: string }): Promise<Ok> => {
    const emailTratado = queryParams.email.toLowerCase();
    const updateAtBr = formatDate(new Date());
    const verificationCode =
      Math.floor(Math.random() * 87539) + 13251;

    try {
      await prisma.users.update({
        where: {
          email: emailTratado,
        },
        data: {
          updated_at_br: updateAtBr,
          verification_code: verificationCode,
        },
      });

      return {
        ok: 'Update verification code com sucesso',
      };
    } catch (e: any) {
      console.log(
        'In patchUsersVerificationCodeFieldModel: ',
        e.message,
        e.code,
      );
      return {
        error: e.message,
      };
    }
  };
export default patchUsersVerificationCodeFieldModel;
