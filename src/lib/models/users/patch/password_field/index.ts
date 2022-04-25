import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import digestPassword from 'src/lib/utils/digestPassword';
import formatDate from 'src/lib/utils/formatDate';

const patchUsersPasswordFieldModel = async (props: {
  newPassword: string;
  email: string;
}): Promise<Ok> => {
  const createdAtBr = formatDate(new Date());
  const digestNewPasswordResult = await digestPassword(
    props.newPassword,
  );
  const digestedNewPassword =
    digestNewPasswordResult.return as string;

  try {
    await prisma.users.update({
      where: {
        email: props.email,
      },
      data: {
        updated_at_br: createdAtBr,
        recovery_code: null,
        password: digestedNewPassword,
      },
    });

    return {
      ok: 'Password atualizado com sucesso',
    };
  } catch (e: any) {
    console.log(
      'In patchUsersPasswordFieldModel: ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default patchUsersPasswordFieldModel;
