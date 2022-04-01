import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

const updateIsVerified = async (props: {
  cookiesConsentVersion: string;
  cookiesConsentAccepted: string;
  cookiesConsentSave: string;
  visitId: string;
}): Promise<Ok> => {
  try {
    await prisma.visits.update({
      where: {
        visit_id: props.visitId,
      },
      data: {
        cookies_consent_accepted: props.cookiesConsentAccepted,
        cookies_consent_version: props.cookiesConsentVersion,
        cookies_consent_save: props.cookiesConsentSave,
      },
    });

    return {
      ok: 'Update cookies field with success',
    };
  } catch (e: any) {
    console.log(
      'in update cookies-consent-fields(e): ',
      e.message,
      e.code,
    );
    return {
      error: e.message,
    };
  }
};
export default updateIsVerified;
