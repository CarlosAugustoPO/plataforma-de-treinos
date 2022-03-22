import { NextApiRequest, NextApiResponse } from 'next';
import updateDisabledMagicLink from 'src/lib/models/magic-links/update/is-disabled-field/index';

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body;
  if (!email) {
    return res.status(200).json({
      error: 'Falha em adquirir email',
    });
  }
  const result: any = await updateDisabledMagicLink({ email });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
