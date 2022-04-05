import type { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/users/get/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.query.email as string;
  const select = { is_verified: true };

  const user = await getUser({ email, select });
  if (user.data?.is_verified != null) {
    return res.json({ ok: true });
  }
  return res.json({ ok: false });
}
