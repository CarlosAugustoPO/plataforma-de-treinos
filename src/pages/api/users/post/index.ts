import { NextApiHandler } from 'next';
import postUserModel from 'src/lib/models/users/post/index';
import digestPassword from 'src/lib/utils/digestPassword';
import formatDate from 'src/lib/utils/formatDate';
import tratarNome from 'src/lib/utils/tratarNome';

const postUserApi: NextApiHandler = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  if (!fname || !lname || !email || !password) {
    return res.status(500).json({
      error:
        'Falha interna de comunicação. Tente novamente mais tarde ou informe o serviço técnico através do email suporte@plataformadetreinos.com.br',
    });
  }

  const digestPasswordResult = await digestPassword(password);
  const verificationCode =
    Math.floor(Math.random() * 87539) + 13251;
  const digestedPassword = digestPasswordResult.return as string;
  let fragmentHashPassword = digestedPassword.slice(-25);
  fragmentHashPassword = fragmentHashPassword.replace(
    /\//g,
    '-',
  );
  let createdAtBr = formatDate(new Date());
  const fnameTratado = tratarNome(fname);
  const lnameTratado = tratarNome(lname);
  const insertUserResult = await postUserModel({
    fname: fnameTratado,
    lname: lnameTratado,
    email,
    verificationCode,
    digestedPassword,
    fragmentHashPassword,
    createdAtBr,
  });

  if (insertUserResult.error) {
    return res.status(400).json({
      ...insertUserResult,
    });
  }

  return res.status(200).json({
    ...insertUserResult,
  });
};
export default postUserApi;
