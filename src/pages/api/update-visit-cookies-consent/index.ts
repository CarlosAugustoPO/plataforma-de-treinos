import type { NextApiRequest, NextApiResponse } from 'next';
import modelUpdateVisitCookiesConsentFields from 'src/lib/modelUpdateVisitCookiesConsentFields/index';
import type Ok from 'src/types/Ok';

const updateVisitCookiesConsentApi = async (
  req: NextApiRequest,
  res: NextApiResponse<Ok>,
) => {
  const {
    cookiesConsentAccepted,
    cookiesConsentVersion,
    cookiesConsentSave,
    visitId,
  } = req.body;
  const result: any = await modelUpdateVisitCookiesConsentFields(
    {
      cookiesConsentAccepted,
      cookiesConsentVersion,
      cookiesConsentSave,
      visitId,
    },
  );
  if (result.message) {
    return res.status(400).json({ error: result.message });
  }
  return res.status(200).json({ ...result });
};

export default updateVisitCookiesConsentApi;
