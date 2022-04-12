import { NextApiRequest, NextApiResponse } from 'next';
import getUserModel from 'src/lib/models/users/get/index';
import { compare } from 'bcrypt';
import { getSession } from 'next-auth/react';

export default async function comparePasswordApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password } = req.body;
  const session = await getSession({ req });

  const user: any = await getUserModel({
    email: session?.user?.email as string,
    select: { password: true },
  });
  if (user.error) {
    return res.status(400).json({ error: user.error });
  }
  const dbPassword = user.data.password;

  const match = await compare(password, dbPassword);
  if (!match) {
    return res
      .status(400)
      .json({ error: 'Verifique sua senha' });
  }

  return res.status(200).json({ ok: 'Senha confirmada' });
}
