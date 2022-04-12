import { NextApiRequest, NextApiResponse } from 'next';
import patchUsersVerificationCodeFieldModel from 'src/lib/models/users/patch/verification_code_field/index';

export default async function patchUsersVerificationCodeFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await patchUsersVerificationCodeFieldModel(
    {
      email,
    },
  );
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
