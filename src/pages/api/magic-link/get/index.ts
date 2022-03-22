import { NextApiRequest, NextApiResponse } from 'next';
import getMagicToken from 'src/lib/models/magic-links/get/index';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body;
  const result: any = await getMagicToken({ email });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
