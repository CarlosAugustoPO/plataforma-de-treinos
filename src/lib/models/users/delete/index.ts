import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

async function deleteUserModel(queryParams: {
  email: string;
}): Promise<Ok> {
  try {
    await prisma.users.delete({
      where: {
        email: queryParams.email,
      },
    });
    return { ok: 'deleted' };
  } catch (e: any) {
    console.log('In deleteUser: ', e.message, e.code);
    return { error: 'PDT6020' };
  }
}

export default deleteUserModel;
