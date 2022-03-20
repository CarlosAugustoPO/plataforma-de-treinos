type Visit = {
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
};

export default Visit;
