import { NextApiRequest, NextApiResponse } from 'next';
import getUser from 'src/lib/models/getUser';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, fieldsToGet } = req.body;
  const getUserDB: any = await getUser(email, fieldsToGet);
  if (getUserDB.message) {
    return res.status(400).json({ message: getUserDB.message });
  }
  return res.status(200).json({ ...getUserDB });
}
