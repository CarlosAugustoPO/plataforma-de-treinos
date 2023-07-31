import prisma from 'src/lib/vendor/prisma/index';
import type VisitData from 'src/types/VisitData';

async function postVisitModel(visitParams: {
  IPv4: string | string[] | undefined;
  visitedDomain: string | string[] | undefined;
  protocol: string | string[] | undefined;
  visitedUrl: string | undefined;
  visitedPagePath: string | undefined;
  userAgent: string | string[] | undefined;
  vercelId: string | string[] | undefined;
  forwardedIPv4: string | string[] | undefined;
  ipCity: string | string[] | undefined;
  ipCountry?: string | string[];
  cookiesConsentVersion: string;
  cookiesConsentAccepted: string;
  cookiesConsentSave: string;
  loggedAs: string;
  createdAtBr: string;
}): Promise<VisitData> {
  try {
    const visit: VisitData = {
      data: await prisma.visits.create({
        data: {
          ipv4: visitParams.IPv4,
          visited_domain: visitParams.visitedDomain,
          protocol: visitParams.protocol,
          visited_url: visitParams.visitedUrl,
          visited_page_path: visitParams.visitedPagePath,
          user_agent: visitParams.userAgent,
          vercel_id: visitParams.vercelId,
          forwarded_ipv4: visitParams.forwardedIPv4,
          ip_city: visitParams.ipCity,
          ip_country: visitParams.ipCountry,
          logged_as: visitParams.loggedAs,
          cookies_consent_accepted:
            visitParams.cookiesConsentAccepted,
          cookies_consent_version:
            visitParams.cookiesConsentVersion,
          cookies_consent_save: visitParams.cookiesConsentSave,
          created_at_br: visitParams.createdAtBr,
          updated_at_br: visitParams.createdAtBr,
        },
      }),
    };
    return visit;
  } catch (e: any) {
    console.log(
      '[ERROR]: in src/lib/models/visits/post/index.ts: ',
      e.message,
      e.code,
    );
    throw new Error(
      'Falha em inserir visita atavés do modelo padrão',
    );
  }
}

export default postVisitModel;
