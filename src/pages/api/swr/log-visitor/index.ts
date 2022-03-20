import type { NextApiRequest, NextApiResponse } from 'next';
import formatDate from 'src/lib/utils/formatDate';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const nextJsMode = process.env.NEXT_PUBLIC_MODE;
  console.log(nextJsMode);
  let dateNow = formatDate(new Date());
  if (nextJsMode === 'local') {
    const visitor = {
      timestamp: dateNow,
      IPv4: req.connection.remoteAddress?.replace('::ffff:', ''),
      fullUrl: 'http://' + req.headers['host'] + req.url,
      method: req.method,
    };
    console.log(visitor);
    return res.json({ ok: false });
  }

  const visitor = {
    timestamp: dateNow,
    vercel_id: req.headers['x-vercel-id'],
    domain: req.headers['host'],
    protocol: req.headers['x-forwarded-proto'],
    user_agent: req.headers['user-agent'],
    realIPv4: req.headers['x-real-ip'],
    forwardedIPv4: req.headers['x-vercel-forwarded-for'],
    ipCountryRegion: req.headers['x-vercel-ip-country-region'],
    deployUrl: req.headers['x-vercel-deployment-url'],
    ipCity: req.headers['x-vercel-ip-city'],
    ipCountry: req.headers['x-vercel-ip-country-region'],
  };
  console.log(visitor);

  return res.json({ ok: true });
}
