import CookieConsentModal from 'src/components/Modals/CookieConsent/index';
import CookieSettingsModal from 'src/components/Modals/CookieSettings/index';
import CookiesSnackBox from 'src/components/SnackBox/Cookies/index';
import { COOKIE_CONSENT_VERSION } from 'src/lib/utils/constants/index';
import { useState, useEffect } from 'react';
import { useAppSelector } from 'src/lib/hooks/useRedux';
import { selectVisit } from 'src/reducers/visit/index';
import type VisitData from 'src/types/VisitData';

export default function CookieConsent(): JSX.Element {
  /*{{{ StatesDeclatation */
  const [isCookieSnackBoxOpen, setCookieSnackBoxOpen] = useState<
    'block' | 'none'
  >('block');
  const [isCookieConsentModalOpen, setCookieConsentModalOpen] =
    useState(false);
  const [isCookieSettingsModalOpen, setCookieSettingsModalOpen] =
    useState(false);
  /*}}} StatedDeclaration */

  /*{{{ Consts and Var Declarations and Types Assigns */
  const visit: VisitData = useAppSelector(selectVisit);
  /*}}} Const and Var Declarations */

  /*{{{ GetStoredCookieConsentLogic */
  useEffect(() => {
    const storedCookieConsent = window.localStorage.getItem(
      'cookies-consent',
    );
    const storedCookieConsentObj: {
      version: string;
      accepted: string;
      save: string;
    } = JSON.parse(storedCookieConsent as string);
    if (
      storedCookieConsentObj?.version === COOKIE_CONSENT_VERSION
    ) {
      // setCookieSnackBoxOpen('none');
      return;
    }
    window.localStorage.removeItem('cookies-consent');
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
