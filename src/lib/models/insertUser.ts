import { query } from 'src/lib/utils/db';
import digestPassword from 'src/lib/utils/digestPassword';

type Result = {
  ok?: string;
  error?: string;
};

async function insertUser(newUser: {
  fname: string;
  lname: string;
  email: string;
  password: string;
}): Promise<Result> {
  const digestPasswordResult = await digestPassword(
    newUser.password,
  );
  const verificationCode =
    Math.floor(Math.random() * 87539) + 13251;
  const digestedPassword = digestPasswordResult.return as string;
  let fragmentHashPassword = digestedPassword!.slice(-25);
  fragmentHashPassword = fragmentHashPassword.replace('/', '-');
  try {
    const create: any = await query(
      `
     INSERT INTO users (fname, lname, email, password, verification_code, fragment_hash_password)
     VALUES (?, ?, ?, ?, ?, ?)
       `,
      [
        newUser.fname,
        newUser.lname,
        newUser.email,
        digestedPassword,
        verificationCode,
        fragmentHashPassword,
      ],
    );
    await create;
    return {
      ok: 'Usuário registrado com sucesso',
    };
  } catch (e: any) {
    if (e.toString().indexOf('ER_DUP') != -1) {
      return {
        error: 'Esse e-mail já existe em nosso banco de dados',
      };
    }
    return { error: e };
  }
}

export default insertUser;
