import Ok from 'src/types/Ok';

export default async function updateVisitCookiesConsentFields(props: {
  visitId: string;
  cookiesConsentAccepted: string;
  cookiesConsentVersion: string;
  cookiesConsentSave: string;
}): Promise<Ok> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/visits/patch/cookies-consent-fields`,
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
  const jsonResponse = await response.json();
  return jsonResponse;
}
