import prisma from 'src/lib/vendor/prisma/index';
import type VisitData from 'src/types/VisitData';

async function insertVisit(visitParams: {
  IPv4: string | string[] | undefined;
  visitedDomain: string | string[] | undefined;
  protocol: string | string[] | undefined;
  visitedUrl: string | undefined;
  visitedPagePath: string | undefined;
  userAgent: string | string[] | undefined;
  vercelId: string | string[] | undefined;
  forwardedIPv4: string | string[] | undefined;
  ipCity: string | string[] | undefined;
  ipCountry: string | string[] | undefined;
  createdAtBr: string;
}): Promise<VisitData> {
  try {
    const visit: VisitData = {
      data: await prisma.visits.create({
        data: {
          ipv4: visitParams.IPv4,
          visited_domain: visitParams.visitedDomain,
          protocol: visitParams.protocol,
          created_at_br: visitParams.createdAtBr,
          visited_url: visitParams.visitedUrl,
          visited_page_path: visitParams.visitedPagePath,
          user_agent: visitParams.userAgent,
          vercel_id: visitParams.vercelId,
          forwarded_ipv4: visitParams.forwardedIPv4,
          ip_city: visitParams.ipCity,
          ip_country: visitParams.ipCountry,
        },
      }),
    };
    return visit;
  } catch (e: any) {
    console.log(
      '[ERROR]: in models/visit/insert/index.ts:53(prisma.visit.query): ',
      e.message,
      e.code,
    );
    throw new Error(
      'Falha em inserir visita atavés do modelo padrão',
    );
  }
}

export default insertVisit;
