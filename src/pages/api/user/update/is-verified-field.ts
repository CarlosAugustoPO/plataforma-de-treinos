import { NextApiRequest, NextApiResponse } from 'next';
import updateUserIsVerified from 'src/lib/models/users/update/is-verified-field';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await updateUserIsVerified({ email });
  if (result.message) {
    return res.status(400).json({ error: result.message });
  }
  return res.status(200).json({ ...result });
}
