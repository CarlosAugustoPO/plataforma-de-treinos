import { NextApiRequest, NextApiResponse } from 'next';
import patchUsersIsVerifiedFieldModel from 'src/lib/models/users/patch/is_verified_field';

export default async function patchUsersIsVerifiedFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await patchUsersIsVerifiedFieldModel({
    email,
  });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
