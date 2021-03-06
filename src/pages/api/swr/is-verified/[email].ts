import type { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/getUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.query.email as string;
  const getUserResult = await getUser(email, ['is_verified']);
  if (getUserResult.is_verified != null) {
    return res.json({ ok: true });
  }
  return res.json({ ok: false });
}
