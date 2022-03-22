import { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/users/get/index';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, select } = req.body;
  const getUserDB: any = await getUser({ email, select });
  if (getUserDB.message) {
    return res.status(400).json({ message: getUserDB.message });
  }
  return res.status(200).json({ ...getUserDB });
}
