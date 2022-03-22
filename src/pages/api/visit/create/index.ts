import { NextApiHandler } from 'next';
import insertVisit from 'src/lib/models/visit/insert/index';
import formatDate from 'src/lib/utils/formatDate';
import { v4 as uuidv4 } from 'uuid'; // npm module

const createVisit: NextApiHandler = async (req, res) => {
  const visitedPagePath = req.body;
  let dateNow = formatDate(new Date());
  const visitId = uuidv4(); // It will give you a random key
  const protocol = req.headers['x-forwarded-proto'] || 'http://';
  const visitedDomain = req.headers.host;
  const visitedUrl = `${protocol}${visitedDomain}${visitedPagePath}`;

  const visit = {
    IPv4:
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress?.replace('::ffff:', ''),
    visitId: visitId,
    vercelId: req.headers['x-vercel-id'] || 'undefined',
    visitedDomain: visitedDomain,
    protocol: protocol,
    dataHora: dateNow,
    visitedUrl: visitedUrl,
    visitedPagePath: visitedPagePath,
    userAgent: req.headers['user-agent'],
    forwardedIPv4:
      req.headers['x-vercel-forwarded-for'] || 'undefined',
    deployUrl:
      req.headers['x-vercel-deployment-url'] ||
      req.headers['host'],
    ipCity: req.headers['x-vercel-ip-city'] || 'Santos',
    ipCountry: req.headers['x-vercel-ip-country-region'] || 'SP',
    createdAtBr: dateNow,
  };

  const insertVisitResult = await insertVisit(visit);
  if (insertVisitResult.error) {
    return res.status(400).json({
      ...insertVisitResult,
    });
  }

  return res.status(200).json({
    ...insertVisitResult,
  });
};
export default createVisit;
