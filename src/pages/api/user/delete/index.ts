import { NextApiRequest, NextApiResponse } from 'next';
import deleteUser from 'src/lib/models/users/delete/index';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body;
  const deleteUserResult: any = await deleteUser({ email });
  if (deleteUserResult.error) {
    return res
      .status(400)
      .json({ message: deleteUserResult.error });
  }
  return res.status(200).json({ ...deleteUserResult });
}
