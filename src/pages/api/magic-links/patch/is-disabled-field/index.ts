import { NextApiRequest, NextApiResponse } from 'next';
import patchMagicLinkIsDisabledFieldModel from 'src/lib/models/magic-links/patch/is_disabled_field/index';

export default async function patchMagicLinkIsDisabledFieldApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await patchMagicLinkIsDisabledFieldModel({
    email,
  });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
