import { NextApiRequest, NextApiResponse } from 'next';
import getUserModel from 'src/lib/models/users/get/index';
import { compare } from 'bcrypt';

export default async function signInApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, password } = req.body;

  if (req.method != 'POST') {
    return res.status(403).json({
      message: `Falha de permissão: Esste método (${req.method}) não é permitido`,
    });
  }

  if (!email || !password) {
    return res.status(500).json({
      message:
        'Falha na requisição, verifique os dados e tente novamente',
    });
  }

  const user: any = await getUserModel({ email });
  if (user.error) {
    return res.status(401).json({ error: user.error });
  }
  if (!user.data?.password) {
    return res.status(401).json({
      error:
        'Falha em realizar login, verifique suas credenciais e tente novamente',
    });
  }

  const match = await compare(password, user.data?.password);
  const fragmentHashPasswordWithSalt: string = `${password}plus${process.env.NEXTAUTH_SECRET}`;
  const fragmentHashPasswordInDbWithSalt: string = `${user.data?.fragment_hash_password}plus${process.env.NEXTAUTH_SECRET}`;
  if (
    !match &&
    fragmentHashPasswordInDbWithSalt !=
      fragmentHashPasswordWithSalt
  ) {
    return res.status(401).json({
      error:
        'Falha em realizar login, verifique suas credenciais e tente novamente',
    });
  }
  return res.status(200).json({ ...user.data });
}
