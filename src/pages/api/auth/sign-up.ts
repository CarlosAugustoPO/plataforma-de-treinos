import { NextApiHandler } from 'next';
import insertUser from 'src/lib/models/insertUser';

const signUp: NextApiHandler = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  if (!fname || !lname || !email || !password) {
    return res.status(500).json({
      error:
        'Falha interna de comunicação. Tente novamente mais tarde ou informe o serviço técnico através do email suporte@plataformadetreinos.com.br',
    });
  }

  const insertUserResult = await insertUser({
    fname,
    lname,
    email,
    password,
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
export default signUp;
