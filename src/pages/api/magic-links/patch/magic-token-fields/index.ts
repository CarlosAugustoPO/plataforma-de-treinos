import { NextApiRequest, NextApiResponse } from 'next';
import patchMagicTokenFieldsModel from 'src/lib/models/magic-links/patch/magic_token_fields/index';

export default async function patchMagicLinksMagicTokenFieldsApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await patchMagicTokenFieldsModel({
    email,
  });
  if (result.message) {
    return res.status(400).json({ error: result.message });
  }
  return res.status(200).json({ ...result });
}
