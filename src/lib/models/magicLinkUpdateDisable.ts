import prisma from 'src/lib/vendor/prisma/index';
import Ok from 'src/types/Ok';

const magicLinkUpdateDisabled = async (queryParams: {
  email: string;
}): Promise<Ok> => {
  const emailTratado = queryParams.email.toLowerCase();
  try {
    let dateNow = new Date();
    await prisma.magic_links.update({
      where: {
        user_email: emailTratado,
      },
      data: {
        is_disabled: dateNow,
      },
    });

    return {
      ok: 'magic link disabled updated no banco de dados com sucesso',
    };
  } catch (e: any) {
    console.log(
      'In magicLinkUpdateDisabled: ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default magicLinkUpdateDisabled;
