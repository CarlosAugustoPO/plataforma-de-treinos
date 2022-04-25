import { NextApiRequest, NextApiResponse } from 'next';
import patchPasswordFieldModel from 'src/lib/models/users/patch/password_field/index';

export default async function patchUsersIsVerifiedFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { newPassword, email } = req.body;

  if (!newPassword || !email) {
    return res.status(400).json({
      error: 'Missing params',
    });
  }

  const result: any = await patchPasswordFieldModel({
    email,
    newPassword,
  });

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
