type VisitParams = {
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
  cookiesConsentVersion: string;
  cookiesConsentAccepted: string;
  cookiesConsentSave: string;
  createdAtBr: string;
};

export default VisitParams;
