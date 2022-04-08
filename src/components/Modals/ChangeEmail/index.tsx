import EmailFieldWithConfirm from 'src/components/Form/EmailFieldWithConfirm/index';
import Text from 'src/components/Text/index';
import Form from 'src/components/Form/index';
import PasswordField from 'src/components/Form/PasswordField/index';
// MuiImports {{{
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/Modals/index';
// }}}
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { TransitionDown } from 'src/components/Transitions/index';

export default function CookieSettingsModal(props: {
  isChangeEmailModalOpen: boolean;
  setChangeEmailModalOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [emailExistsError, setEmailExistsError] = useState<
    undefined | string
  >(undefined);
  const [lastFieldError, setLastFieldError] = useState<
    undefined | string
  >(undefined);
  const {
    register,
    clearErrors,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleChangeEmail = async (data: any) => {
    console.log('change');
  };

  return (
    <>
      {/* {{{ start Cookie Settings Modal  */}
      <BootstrapDialog
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            props.setChangeEmailModalOpen(false);
          }
        }}
        TransitionComponent={TransitionDown}
        scroll="body"
        aria-labelledby="change-email"
        open={props.isChangeEmailModalOpen}
      >
        {/*}}}*/}
        {/* {{{ Configurações de Cookies Title  */}
        <BootstrapDialogTitle
          id="change-email"
          sx={{
            fontFamily: 'Carter One',
            backgroundColor: 'backgroundModalBar.main',
            color: 'cookieConsentTitle.main',
            fontSize: '85%',
          }}
        >
          Corrigir e-mail de cadastro
        </BootstrapDialogTitle>
        {/*}}}*/}

        {/* {{{ DialogContent 1 Open */}
        <DialogContent
          dividers
          sx={{
            backgroundColor: 'backgroundModalBody.main',
          }}
        >
          <Form
            handleSubmit={handleSubmit}
            handleAction={handleChangeEmail}
            style={{ marginTop: '-40px' }}
          >
            <EmailFieldWithConfirm
              fieldLabelEmail="E-mail corrigido"
              fieldLabelEmailConfirm="Confirme o e-mail corrigido"
              emailErrors={errors.email?.type}
              confirmEmailErrors={errors.confirmEmail?.type}
              getValues={getValues}
              clearErrors={clearErrors}
              setLastFieldError={setLastFieldError}
              lastFieldError={lastFieldError as string}
              emailExistsError={emailExistsError}
              setEmailExistsError={setEmailExistsError}
              register={register}
            />
            <PasswordField
              errors={errors.password?.type}
              clearErrors={clearErrors}
              setLastFieldError={setLastFieldError}
              lastFieldError={lastFieldError as string}
              register={register}
            />
            {lastFieldError && (
              <Text
                mb={-2}
                color="error"
                align="left"
                variant="subtitle2"
                width="100%"
                fontSize="80%"
              >
                {lastFieldError}
              </Text>
            )}
          </Form>
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
            onClick={handleChangeEmail}
          >
            Alterar
          </Button>
          <Button
            sx={{
              transform: 'scale(87%)',
            }}
            color="buttonSnackbarCancel"
            variant="outlined"
            onClick={() => props.setChangeEmailModalOpen(false)}
          >
            Cancelar
          </Button>
        </DialogActions>
        {/*}}}*/}
      </BootstrapDialog>
    </>
  );
}
