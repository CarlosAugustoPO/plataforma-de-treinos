import { NextApiRequest, NextApiResponse } from 'next';
import patchMagicLinksUserEmailFieldModel from 'src/lib/models/magic-links/patch/user_email_field/index';
import { getSession } from 'next-auth/react';

export default async function patchMagicLinksUserEmailFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  const session = await getSession({ req });
  const oldEmail = session?.user?.email as string;

  if (!session) {
    return res.status(400).json({
      error: 'Missing session',
    });
  }
  if (!email) {
    return res.status(400).json({
      error: 'Missing e-mail',
    });
  }

  const result: any = await patchMagicLinksUserEmailFieldModel({
    newEmail: email,
    oldEmail,
  });

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
