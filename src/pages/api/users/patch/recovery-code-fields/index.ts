import { NextApiRequest, NextApiResponse } from 'next';
import patchUsersRecoveryCodeFieldsModel from 'src/lib/models/users/patch/recovery_code_fields/index';

export default async function patchUsersRecoveryCodeFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, reset } = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await patchUsersRecoveryCodeFieldsModel({
    email,
    reset,
  });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
