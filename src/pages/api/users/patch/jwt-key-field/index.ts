import { NextApiRequest, NextApiResponse } from 'next';
import patchJwtKeyFieldModel from 'src/lib/models/users/patch/jwt_key_field/index';

export default async function patchUsersIsVerifiedFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, logoutRequestId } = req.body;

  if (!email) {
    return res.status(400).json({
      error: 'Missing params',
    });
  }

  const result: any = await patchJwtKeyFieldModel({
    email,
    logoutRequestId,
  });

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
