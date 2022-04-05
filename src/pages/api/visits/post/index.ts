import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { getSession } from 'next-auth/react';
import postVisitModel from 'src/lib/models/visits/post/index';
import formatDate from 'src/lib/utils/formatDate';
import type VisitDataOrError from 'src/types/VisitDataOrError';
import type VisitParams from 'src/types/VisitParams';
import nookies from 'nookies';

const postVisitApi: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<VisitDataOrError>,
) => {
  const visitedPagePath = req.body;
  let dateNow = formatDate(new Date());
  const protocol = req.headers['x-forwarded-proto'] || 'http://';
  const visitedDomain = req.headers.host;
  const visitedUrl = `${protocol}${visitedDomain}${visitedPagePath}`;
  const cookies = nookies.get({ req });
  const session = await getSession({ req });

  let cookiesConsent;
  if (cookies.consent) {
    cookiesConsent = JSON.parse(cookies.consent);
  }

  const visitParams: VisitParams = {
    IPv4:
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress?.replace('::ffff:', ''),
    vercelId: req.headers['x-vercel-id'] || 'undefined',
    visitedDomain: visitedDomain,
    protocol: protocol,
    visitedUrl: visitedUrl,
    visitedPagePath: visitedPagePath,
    userAgent: req.headers['user-agent'],
    forwardedIPv4:
      req.headers['x-vercel-forwarded-for'] || 'undefined',
    ipCity: req.headers['x-vercel-ip-city'] || 'Santos',
    ipCountry: req.headers['x-vercel-ip-country-region'] || 'SP',
    cookiesConsentVersion: cookiesConsent.version || 'undefined',
    cookiesConsentAccepted:
      cookiesConsent.accepted || 'undefined',
    cookiesConsentSave: cookiesConsent.save || 'undefined',
    loggedAs: session?.user.email || 'guest',
    createdAtBr: dateNow,
  };
  try {
    const postVisitResult = await postVisitModel(visitParams);
    return res.status(200).json(postVisitResult);
  } catch (error: any) {
    console.log(
      '[ERROR]: in src/pages/api/visit/create/index.ts:39(insertVisitResult): ',
      error,
    );
    return res.status(500).json({
      error: 'Falha em inserir usuário.',
    });
  }
};
export default postVisitApi;
