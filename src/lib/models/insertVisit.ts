import prisma from 'src/lib/vendor/prisma/index';
import type VisitData from 'src/types/VisitData';

async function insertVisit(visitParams: {
  IPv4: string | string[] | undefined;
  visitId: string | undefined;
  visitedDomain: string | string[] | undefined;
  protocol: string | string[] | undefined;
  dataHora: string | undefined;
  visitedUrl: string | undefined;
  visitedPagePath: string | undefined;
  userAgent: string | string[] | undefined;
  vercelId: string | string[] | undefined;
  forwardedIPv4: string | string[] | undefined;
  deployUrl: string | string[] | undefined;
  ipCity: string | string[] | undefined;
  ipCountry: string | string[] | undefined;
  createdAtBr: string;
}): Promise<VisitData> {
  try {
    const visit = () => {};
    visit.data = await prisma.visits.create({
      data: {
        visit_id: visitParams.visitId,
        visited_url: visitParams.visitedUrl,
        user_agent: visitParams.userAgent,
        ipv4: visitParams.IPv4,
        forwarded_ipv4: visitParams.forwardedIPv4,
        ip_city: visitParams.ipCity,
        ip_country: visitParams.ipCountry,
        vercel_id: visitParams.vercelId,
        protocol: visitParams.protocol,
        visited_domain: visitParams.visitedDomain,
        visited_page_path: visitParams.visitedPagePath,
        created_at_br: visitParams.createdAtBr,
      },
    });

    visit.ok = 'visitante registrado com suesso';
    return visit;
  } catch (e: any) {
    console.log('In insertVisit: ', e.message, e.code);
    return { error: e };
  }
}

export default insertVisit;
