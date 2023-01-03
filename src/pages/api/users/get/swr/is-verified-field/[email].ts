import type { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/users/get/index';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.query.email as string;
  const select = { is_verified: true };

  const user = await getUser({ email, select });
  const session = await getSession({ req });
  if (
    user.data?.is_verified != null ||
    session?.user?.is_verified === true
  ) {
    return res.json({ ok: true });
  }
  return res.json({ ok: false });
}
