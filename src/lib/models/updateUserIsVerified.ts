import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

const updateIsVerified = async (queryParams: {
  email: string;
}): Promise<Ok> => {
  const emailTratado = queryParams.email.toLowerCase();
  try {
    let dateNow = new Date();
    await prisma.users.update({
      where: {
        email: emailTratado,
      },
      data: {
        is_verified: dateNow,
      },
    });

    return {
      ok: 'Update is verified com sucesso',
    };
  } catch (e: any) {
    console.log('In updateUserIsVerified: ', e.message, e.code);
    return {
      error: e.message,
    };
  }
};
export default updateIsVerified;
