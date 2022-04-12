import { NextApiRequest, NextApiResponse } from 'next';
import getUserModel from 'src/lib/models/users/get/index';

export default async function getUserApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, select } = req.body;
  const getUserDB: any = await getUserModel({ email, select });
  if (getUserDB.error) {
    return res.status(400).json({ error: getUserDB.error });
  }
  return res.status(200).json({ ...getUserDB });
}
