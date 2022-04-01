import Ok from 'src/types/Ok';

export default async function fetcherUpdateVisitCookiesConsent(props: {
  visitId: string;
  cookiesConsentAccepted: string;
  cookiesConsentVersion: string;
  cookiesConsentSave: string;
}): Promise<Ok> {
  const updateVisitCookiesConsentFields: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/update-visit-cookies-consent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitId: props.visitId,
        cookiesConsentAccepted: props.cookiesConsentAccepted,
        cookiesConsentVersion: props.cookiesConsentVersion,
        cookiesConsentSave: props.cookiesConsentSave,
      }),
    },
  );
  const result = await updateVisitCookiesConsentFields.json();
  return result;
}
