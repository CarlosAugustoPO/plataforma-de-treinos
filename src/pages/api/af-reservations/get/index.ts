import { NextApiRequest, NextApiResponse } from 'next';
import getAfReservations from 'src/lib/models/af-reservations/get/index';

export default async function getAfAvailabilityApi(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const result: any = await getAfReservations();
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  return res.status(200).json({ ...result });
}
