import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import insertVisit from 'src/lib/models/visit/insert/index';
import formatDate from 'src/lib/utils/formatDate';
import type VisitDataOrError from 'src/types/VisitDataOrError';
import type VisitParams from 'src/types/VisitParams';

const createVisit: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<VisitDataOrError>,
) => {
  const visitedPagePath = req.body;
  let dateNow = formatDate(new Date());
  const protocol = req.headers['x-forwarded-proto'] || 'http://';
  const visitedDomain = req.headers.host;
  const visitedUrl = `${protocol}${visitedDomain}${visitedPagePath}`;

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
    createdAtBr: dateNow,
  };
  try {
    const insertVisitResult = await insertVisit(visitParams);
    return res.status(200).json(insertVisitResult);
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
export default createVisit;
