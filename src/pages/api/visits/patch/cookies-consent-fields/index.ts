import type { NextApiRequest, NextApiResponse } from 'next';
import patchVisitsCookiesConsentFieldsModel from 'src/lib/models/visits/patch/cookies_consent_fields/index';
import type Ok from 'src/types/Ok';

const patchVisitsCookiesConsentFieldsApi = async (
  req: NextApiRequest,
  res: NextApiResponse<Ok>,
) => {
  const {
    cookiesConsentAccepted,
    cookiesConsentVersion,
    cookiesConsentSave,
    visitId,
  } = req.body;
  const result: any = await patchVisitsCookiesConsentFieldsModel(
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

export default patchVisitsCookiesConsentFieldsApi;
