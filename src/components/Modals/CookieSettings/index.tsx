// {{{ MyOwnImports
import AnalyticsCookies from 'src/components/cookiesinuse/Analytics/index';
import OwnerCookies from 'src/components/cookiesinuse/Owner/index';
import EssentialsCookies from 'src/components/cookiesinuse/Essentials/index';
// }}}
/*{{{ UtilsImport */
import formatDate from 'src/lib/utils/formatDate';
import { COOKIE_CONSENT_VERSION } from 'src/lib/utils/constants/index';
/*}}} UtilsImport  */
// MuiImports {{{
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CookieConsentModal from 'src/components/Modals/CookieConsent/index';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';
// }}}
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export default function CookieSettingsModal(props: {
  isCookieSettingsModalOpen: boolean;
  setCookieSettingsModalOpen: Dispatch<SetStateAction<boolean>>;
  closeSettings: () => void;
}): JSX.Element {
  const timeNow = formatDate(new Date());

  /* {{{ StatesDeclatation 2 */
  const [isCookieModalOpen, setCookieConsentModalOpen] =
    useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essentials: 'accepted',
    owner: 'accepted',
    analytics: 'accepted',
  });
  const [essentialsAccordionState, toggleEssentialsAccordion] =
    useState(false);
  const [ownerAccordionState, toggleOwnerAccordion] =
    useState(false);
  const [analyticsAccordionState, toggleAnalyticsAccordion] =
    useState(false);

  /*}}}*/

  // {{{ proxyCloseSettings
  const proxyCloseSettings = () => {
    setCookieSettings({
      essentials: 'accepted',
      owner: 'accepted',
      analytics: 'accepted',
    });
    props.closeSettings();
    toggleEssentialsAccordion(false);
    toggleOwnerAccordion(false);
    toggleAnalyticsAccordion(false);
  };
  //}}}

  // {{{ CloseAndAcceptCustonCookieConsent 2 */
  const closeAndAcceptCustonCookieConsent = () => {
    if (
      cookieSettings.owner === 'accepted' &&
      cookieSettings.analytics === 'rejected'
    ) {
      props.setCookieSettingsModalOpen(false);
      window.localStorage.setItem(
        'cookies-consent',
        `{"version": "${COOKIE_CONSENT_VERSION}", "accepted":
          "${timeNow}", "save": "custom"}`,
      );
    }
    if (
      cookieSettings.owner === 'accepted' &&
      cookieSettings.analytics === 'accepted'
    ) {
      props.setCookieSettingsModalOpen(false);
      window.localStorage.setItem(
        'cookies-consent',
        `{"version": "${COOKIE_CONSENT_VERSION}", "accepted":
          "${timeNow}", "save": "all"}`,
      );
    }

    if (
      cookieSettings.owner === 'rejected' &&
      cookieSettings.analytics === 'rejected'
    ) {
      props.setCookieSettingsModalOpen(false);
    }

    if (
      cookieSettings.owner === 'rejected' &&
      cookieSettings.analytics === 'accepted'
    ) {
      props.setCookieSettingsModalOpen(false);
    }

    // updateVisitCookiesConsentFields(cookieContentObject);
  };

  //}}}

  // Handle functions {{{
  function toggleOwner() {
    window.localStorage.removeItem('cookies-consent');
    cookieSettings.owner === 'rejected'
      ? setCookieSettings({
          ...cookieSettings,
          owner: 'accepted',
        })
      : setCookieSettings({
          ...cookieSettings,
          owner: 'rejected',
        });
  }

  function toggleAnalytics() {
    window.localStorage.removeItem('cookies-consent');
    cookieSettings.analytics === 'rejected'
      ? setCookieSettings({
          ...cookieSettings,
          analytics: 'accepted',
        })
      : setCookieSettings({
          ...cookieSettings,
          analytics: 'rejected',
        });
  }
  function openSettings() {
    setCookieConsentModalOpen(false);
    props.setCookieSettingsModalOpen(true);
  }
  //}}}
  return (
    <>
      {/* {{{ start Cookie Settings Modal  */}
      <BootstrapDialog
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            props.setCookieSettingsModalOpen(false);
          }
        }}
        disableEscapeKeyDown
        aria-labelledby="cookies-settings"
        open={props.isCookieSettingsModalOpen}
      >
        {/*}}}*/}
        {/* {{{ Configurações de Cookies Title  */}
        <BootstrapDialogTitle
          id="cookies-settings"
          sx={{
            fontFamily: 'Carter One',
            backgroundColor: 'backgroundModalBar.main',
            color: 'cookieConsentTitle.main',
            fontSize: '85%',
          }}
        >
          Configurações de Cookies
        </BootstrapDialogTitle>
        {/*}}}*/}

        {/* {{{ DialogContent 1 Open */}
        <DialogContent
          dividers
          sx={{
            backgroundColor: 'backgroundModalBody.main',
          }}
        >
          {/*}}}*/}
          <FormGroup>
            {/* {{{ accordion 1 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                checked
                disabled
                control={
                  <Switch size="small" name="essentials" />
                }
                label={
                  <>
                    <Caption color="text.primary">
                      Cookies essenciais{' '}
                    </Caption>
                    <Caption fontSize="70%" color="primary">
                      (Obrigatórios)
                    </Caption>
                  </>
                }
              />
              <IconButton
                onClick={() =>
                  toggleEssentialsAccordion(
                    !essentialsAccordionState,
                  )
                }
              >
                <ExpandMoreIcon
                  sx={{
                    transform: `${
                      essentialsAccordionState
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    }`,
                  }}
                />
              </IconButton>
            </div>
            {/*}}}*/}
            {/* {{{ EssentialCookies collapsed */}
            <Collapse
              sx={{
                maxWidth: '450px',
                textAlign: 'center',
                margin: 'auto',
                border: '1px solid',
                borderColor: 'borderModal.main',
                marginTop: `${
                  essentialsAccordionState ? '3%' : '0'
                }`,
                marginBottom: `${
                  essentialsAccordionState ? '3%' : '0'
                }`,
              }}
              in={essentialsAccordionState}
            >
              <EssentialsCookies />
            </Collapse>
            {/*}}}*/}

            {/* {{{ accordion 2 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    onChange={toggleOwner}
                    value={cookieSettings.owner}
                    size="small"
                    name="owner"
                    checked={
                      cookieSettings.owner === 'accepted'
                        ? true
                        : false
                    }
                  />
                }
                label={
                  <>
                    <Caption color="text.primary">
                      Cookies de configurações{' '}
                    </Caption>
                  </>
                }
              />
              <IconButton
                onClick={() =>
                  toggleOwnerAccordion(!ownerAccordionState)
                }
              >
                <ExpandMoreIcon
                  sx={{
                    transform: `${
                      ownerAccordionState
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    }`,
                  }}
                />
              </IconButton>
            </div>
            {/*}}}*/}
            {/* {{{  OwnerCookies collapsed */}
            <Collapse
              sx={{
                maxWidth: '450px',
                textAlign: 'center',
                margin: 'auto',
                border: '1px solid',
                borderColor: 'borderModal.main',
                marginTop: `${ownerAccordionState ? '3%' : '0'}`,
                marginBottom: `${
                  ownerAccordionState ? '3%' : '0'
                }`,
              }}
              in={ownerAccordionState}
            >
              <OwnerCookies />
            </Collapse>
            {/*}}}*/}

            {/* {{{ accordion 3 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    onChange={toggleAnalytics}
                    value={cookieSettings.analytics}
                    size="small"
                    name="analytics"
                    checked={
                      cookieSettings.analytics === 'accepted'
                        ? true
                        : false
                    }
                  />
                }
                label={
                  <div>
                    <Caption color="text.primary">
                      Cookies de desempenho e de analíse{' '}
                    </Caption>
                  </div>
                }
              />
              <IconButton
                onClick={() =>
                  toggleAnalyticsAccordion(
                    !analyticsAccordionState,
                  )
                }
              >
                <ExpandMoreIcon
                  sx={{
                    transform: `${
                      analyticsAccordionState
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    }`,
                  }}
                />
              </IconButton>
            </div>

            {/*}}}*/}
            {/* {{{ AnalyticsCookies collapsed */}
            <Collapse
              sx={{
                maxWidth: '450px',
                textAlign: 'center',
                margin: 'auto',
                border: '1px solid',
                borderColor: 'borderModal.main',
                marginTop: `${
                  analyticsAccordionState ? '3%' : '0'
                }`,
                marginBottom: `${
                  analyticsAccordionState ? '3%' : '0'
                }`,
              }}
              in={analyticsAccordionState}
            >
              <AnalyticsCookies />
            </Collapse>

            {/*}}}*/}
          </FormGroup>
          {/* {{{ DialogContent 1 end */}
        </DialogContent>
        {/*}}}*/}

        {/* {{{ CookieSettingsBottomTips DialogContent 2  */}
        <DialogContent
          dividers
          sx={{
            backgroundColor: 'backgroundModalBody.main',
            textAlign: 'center',
            maxWidth: '500px',
          }}
        >
          {cookieSettings.owner === 'rejected' &&
            cookieSettings.analytics === 'accepted' && (
              <Caption color="warning.main">
                Atenção: Desabilitar os cookies de configurações
                impossibilitará salvar suas escolhas, inclusive
                essa, portanto serão refeitas a cada visita.
              </Caption>
            )}
          {cookieSettings.owner === 'rejected' &&
            cookieSettings.analytics === 'rejected' && (
              <Caption color="warning.main">
                Atenção: Desabilitar os cookies de configurações
                impossibilitará salvar suas escolhas, inclusive
                essa, portanto serão refeitas a cada visita.
              </Caption>
            )}
          {cookieSettings.owner === 'accepted' &&
            cookieSettings.analytics === 'accepted' && (
              <Caption>
                Dica: Para saber mais sobre os diferentes grupos
                de cookies e suas funcionalidades você pode
                consultar nossa{' '}
                <TextButton
                  linkColor="modal"
                  cta="política de cookies"
                  onClick={() => setCookieConsentModalOpen(true)}
                  tabIndex={0}
                  onKeyPress={(e) =>
                    e.key === 'Enter' || e.key === ' '
                      ? setCookieConsentModalOpen(true)
                      : e.preventDefault
                  }
                >
                  política de cookies
                </TextButton>
                .
              </Caption>
            )}
          {cookieSettings.owner === 'accepted' &&
            cookieSettings.analytics === 'rejected' && (
              <Caption>
                Dica: Para saber mais sobre os diferentes grupos
                de cookies e suas funcionalidades você pode
                consultar nossa{' '}
                <TextButton
                  linkColor="modal"
                  cta="política de cookies"
                  onClick={() => setCookieConsentModalOpen(true)}
                >
                  política de cookies
                </TextButton>
                .
              </Caption>
            )}
        </DialogContent>
        {/*}}}*/}

        {/* {{{ BottomBarWithButtonsSaveAndCancel 2 */}
        <DialogActions
          sx={{
            backgroundColor: 'backgroundModalBar.main',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            type="submit"
            sx={{
              transform: 'scale(87%)',
            }}
            color="buttonSnackbarOk"
            variant="outlined"
            onClick={closeAndAcceptCustonCookieConsent}
          >
            Salvar
          </Button>
          <Button
            sx={{
              transform: 'scale(87%)',
            }}
            color="buttonSnackbarCancel"
            variant="outlined"
            onClick={proxyCloseSettings}
          >
            Cancelar
          </Button>
        </DialogActions>

        {/*}}}*/}

        {/* {{{ Cookie Settings Modal End */}
      </BootstrapDialog>
      {/*}}}*/}

      {/*{{{CookieConsentModal*/}
      <CookieConsentModal
        isOpen={isCookieModalOpen}
        setOpen={setCookieConsentModalOpen}
        openSettings={openSettings}
      />
      {/*}}}CookieConsentModal*/}
    </>
  );
}
