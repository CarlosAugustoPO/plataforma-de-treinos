import updateVisitCookiesConsentFields from 'src/lib/fetchers/visits/update/cookiesConsentFields/index';
import Button from '@mui/material/Button';
import SnackBox from 'src/components/SnackBox/index';
import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import Divider from '@mui/material/Divider';
import CookieIcon from '@mui/icons-material/CookieTwoTone';
import { COOKIE_CONSENT_VERSION } from 'src/lib/utils/constants/index';
import formatDate from 'src/lib/utils/formatDate';
import type { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from 'src/lib/hooks/useRedux';
import { selectVisit } from 'src/reducers/visit/index';
import type VisitData from 'src/types/VisitData';
import { setCookie } from 'nookies';

export default function CookiesSnackBox(props: {
  isCookieSnackBoxOpen: 'none' | 'block';
  setCookieSnackBoxOpen: Dispatch<
    SetStateAction<'none' | 'block'>
  >;
  setCookieConsentModalOpen: Dispatch<SetStateAction<boolean>>;
  openSettingAndCloseSnack: () => void;
}) {
  const visit: VisitData = useAppSelector(selectVisit);
  const timeNow = formatDate(new Date());

  const closeAndAcceptDefaultCookieConsent = () => {
    props.setCookieSnackBoxOpen('none');
    setCookie(
      null,
      'consent',
      `{"version": "${COOKIE_CONSENT_VERSION}", "accepted":
              "${timeNow}", "save": "essentials,owner,analytics"}`,
      { maxAge: 86400 * 365, path: '/' },
    );

    updateVisitCookiesConsentFields({
      cookiesConsentAccepted: timeNow,
      cookiesConsentVersion: COOKIE_CONSENT_VERSION,
      cookiesConsentSave: 'essentials,owners,analytics',
      visitId: visit.data?.visit_id as string,
    });
  };
  return (
    <SnackBox display={props.isCookieSnackBoxOpen}>
      <CookieIcon
        sx={{
          fontSize: 45,
          display: 'block',
          margin: 'auto',
          color: '#f8f8f280',
        }}
      />
      <Divider
        sx={{
          bgcolor: 'dividerSnackbar.main',
          margin: '2%',
        }}
      />
      <Caption color="textSnackbar.main">
        Utilizamos cookies para salvar suas preferências nesse
        site, mas para isso você precisa aceita-los. Para saber
        mais você pode consultar nossa{' '}
        <TextButton
          onClick={() => props.setCookieConsentModalOpen(true)}
          linkColor="cyan"
          cta="política de cookies"
          tabIndex={0}
          onKeyPress={(e) =>
            e.key === 'Enter' || e.key === ' '
              ? props.setCookieConsentModalOpen(true)
              : e.preventDefault
          }
        />
        . Você também pode personaliza-los, basta clicar no botão
        configurar. Ao continuar navegando sem aceitar os cookies
        suas escolhas não serão salvas.
      </Caption>
      <Divider
        sx={{
          bgcolor: 'dividerSnackbar.main',
          margin: '2%',
        }}
      />
      <div style={{ margin: '3%' }}>
        <Button
          sx={{
            transform: 'scale(87%)',
          }}
          color="buttonSnackbarCancel"
          variant="outlined"
          onClick={props.openSettingAndCloseSnack}
        >
          Configurar
        </Button>
        <Button
          sx={{
            transform: 'scale(87%)',
          }}
          color="buttonSnackbarOk"
          variant="outlined"
          onClick={closeAndAcceptDefaultCookieConsent}
        >
          Aceitar Cookies
        </Button>
      </div>
    </SnackBox>
  );
}
