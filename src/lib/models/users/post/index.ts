import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

async function postUserModel(newUser: {
  fname: string;
  lname: string;
  email: string;
  verificationCode: number;
  digestedPassword: string;
  fragmentHashPassword: string;
  createdAtBr: string;
}): Promise<Ok> {
  try {
    await prisma.users.create({
      data: {
        fname: newUser.fname,
        lname: newUser.lname,
        email: newUser.email,
        password: newUser.digestedPassword,
        verification_code: newUser.verificationCode,
        fragment_hash_password: newUser.fragmentHashPassword,
        created_at_br: newUser.createdAtBr,
        updated_at_br: newUser.createdAtBr,
      },
    });

    return { ok: 'Usuário inserido com sucesso' };
  } catch (e: any) {
    console.log('In postUser: ', e.message, e.code);
    if (e.code === 'P2002') {
      return {
        error: 'Esse e-mail já existe em nosso banco de dados',
      };
    }
    return { error: e };
  }
}

export default postUserModel;
