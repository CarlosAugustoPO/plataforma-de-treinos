import type { NextApiRequest, NextApiResponse } from 'next';
import verifyCode from 'src/lib/chains/verifyCode';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.query.confirm[0];
  const verificationCode = req.query.confirm[1];
  const hashFragment = req.query.confirm[2];
  const magicToken = req.query.confirm[3];

  const verifyCodeResult = await verifyCode({
    verificationCode,
    hashFragment,
    email,
    magicToken,
  });

  if (verifyCodeResult.error) {
    res.json(verifyCodeResult.error);
  }
  res.redirect(307, '/painel');
}
