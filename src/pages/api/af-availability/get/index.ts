import { NextApiRequest, NextApiResponse } from 'next';
import getAfAvailabilityModel from 'src/lib/models/af-availability/get/index';

export default async function getAfAvailabilityApi(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const result: any = await getAfAvailabilityModel();
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
