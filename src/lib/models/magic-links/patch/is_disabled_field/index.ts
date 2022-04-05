import prisma from 'src/lib/vendor/prisma/index';
import Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';

const patchMagicLinksIsDisabledFieldModel = async (queryParams: {
  email: string;
}): Promise<Ok> => {
  const emailTratado = queryParams.email.toLowerCase();
  const createdAtBr = formatDate(new Date());
  try {
    let dateNow = new Date();
    await prisma.magic_links.update({
      where: {
        user_email: emailTratado,
      },
      data: {
        is_disabled: dateNow,
        updated_at_br: createdAtBr,
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
export default patchMagicLinksIsDisabledFieldModel;
