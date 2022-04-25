import CookieConsentModal from 'src/components/Modals/CookieConsent/index';
import CookieSettingsModal from 'src/components/Modals/CookieSettings/index';
import CookiesSnackBox from 'src/components/SnackBox/Cookies/index';
import { COOKIE_CONSENT_VERSION } from 'src/lib/utils/constants/index';
import { useState, useEffect } from 'react';
import { parseCookies, destroyCookie } from 'nookies';

export default function CookieConsent(): JSX.Element {
  /*{{{ StatesDeclatation */
  const [isCookieSnackBoxOpen, setCookieSnackBoxOpen] = useState<
    'block' | 'none'
  >('none');
  const [isCookieConsentModalOpen, setCookieConsentModalOpen] =
    useState(false);
  const [isCookieSettingsModalOpen, setCookieSettingsModalOpen] =
    useState(false);
  /*}}} StatedDeclaration */

  /*{{{ GetStoredCookieConsentLogic */
  useEffect(() => {
    const storedCookies = parseCookies();
    const storedCookieConsent = storedCookies.consent;
    if (storedCookieConsent) {
      const storedCookieConsentObj: {
        version: string;
        accepted: string;
        save: string;
      } = JSON.parse(storedCookieConsent);
      if (
        storedCookieConsentObj?.version ===
        COOKIE_CONSENT_VERSION
      ) {
        setCookieSnackBoxOpen('none');
        return;
      }
    }
    setCookieSnackBoxOpen('block');
  }, []);
  /*}}} GetStoredCookieConsentLogic */

  //{{{ Handle functions
  function openSettingAndCloseSnack() {
    setCookieSnackBoxOpen('none');
    setCookieSettingsModalOpen(true);
  }

  function closeSettingsAndOpenSnack() {
    setCookieSnackBoxOpen('block');
    setCookieSettingsModalOpen(false);
  }

  //}}}
  return (
    <>
      <CookiesSnackBox
        isCookieSnackBoxOpen={isCookieSnackBoxOpen}
        setCookieSnackBoxOpen={setCookieSnackBoxOpen}
        setCookieConsentModalOpen={setCookieConsentModalOpen}
        openSettingAndCloseSnack={openSettingAndCloseSnack}
      />
      <CookieSettingsModal
        isCookieSettingsModalOpen={isCookieSettingsModalOpen}
        setCookieSettingsModalOpen={setCookieSettingsModalOpen}
        closeSettings={closeSettingsAndOpenSnack}
      />
      <CookieConsentModal
        isOpen={isCookieConsentModalOpen}
        setOpen={setCookieConsentModalOpen}
        openSettings={openSettingAndCloseSnack}
      />
    </>
  );
}
