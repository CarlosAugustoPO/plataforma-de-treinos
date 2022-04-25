import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';
import formatDate from 'src/lib/utils/formatDate';
import { v4 as uuidv4 } from 'uuid'; // npm module

const patchUsersJwtKeyFieldModel = async (props: {
  email: string;
  logoutRequestId?: string;
}): Promise<Ok> => {
  const createdAtBr = formatDate(new Date());

  try {
    const jwtKey = uuidv4(); // It will give you a random key
    await prisma.users.update({
      where: {
        email: props.email,
      },
      data: {
        updated_at_br: createdAtBr,
        jwt_key: jwtKey,
        logout_request_id: props.logoutRequestId,
      },
    });

    return {
      ok: 'JwtKey atualizado com sucesso',
    };
  } catch (e: any) {
    console.log('In patchJwtKeyFieldModel: ', e.message, e.code);
    return {
      error: e.message,
    };
  }
};
export default patchUsersJwtKeyFieldModel;
