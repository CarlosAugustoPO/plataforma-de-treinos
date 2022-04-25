import type { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/users/get/index';

export default async function getJwtToken(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.query.email as string;
  const select = { jwt_key: true, logout_request_id: true };

  const user = await getUser({ email, select });
  if (user.data) {
    return res.json({ ok: user.data });
  }
  return res.json({ error: 'falha' });
}
