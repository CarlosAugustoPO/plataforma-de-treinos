import Title from 'src/components/Title';
import LabelIcon from '@mui/icons-material/LabelImportantTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import SendButton from 'src/components/Form/SendButton/index';
import updateMagicToken from 'src/lib/fetchers/magic-links/update/magicTokenFields/index';
import updateVerificationCode from 'src/lib/fetchers/users/update/verificationCodeField/index';
import { sendVerificationMail } from 'src/lib/chains/sendVerificationMail/index';
import compareUserPassword from 'src/lib/fetchers/users/compare/insertedPasswordVsDataPassword/index';
import reloginSession from 'src/lib/fetchers/session/relogin/index';
import updateUserEmail from 'src/lib/fetchers/users/update/emailField/index';
import updateMagicLinkUserEmail from 'src/lib/fetchers/magic-links/update/userEmailField/index';
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
import useSession from 'src/lib/hooks/useSession';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';

export default function ChangeEmailModal(props: {
  isChangeEmailModalOpen: boolean;
  setChangeEmailModalOpen: Dispatch<SetStateAction<boolean>>;
  setResetTimer: Dispatch<SetStateAction<boolean>>;
  resendVerificationMail: () => void;
}): JSX.Element {
  const [submitting, setSubmitting] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState<
    undefined | string
  >(undefined);
  const [lastFieldError, setLastFieldError] = useState<
    undefined | string
  >(undefined);
  const [wrongPasswordError, setWrongPasswordError] = useState<
    undefined | string
  >(undefined);
  const {
    register,
    clearErrors,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const session = useSession();
  const dispatch = useAppDispatch();

  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }
  async function handleResendVerificationEmail(email: string) {
    const updateVerificationCodeResult =
      await updateVerificationCode(email);

    if (updateVerificationCodeResult.error) {
      return {
        error:
          'Falha em gerar novo código de verificação, tente novamente mais tarde',
      };
    }
    const updateMagicTokenResult = await updateMagicToken(email);
    if (updateMagicTokenResult.error) {
      return {
        error:
          'Falha em gerar novo link mágico, tente novamente mais tarde',
      };
    }

    const sendVerificationMailResult =
      await sendVerificationMail(email);

    if (sendVerificationMailResult.error) {
      return {
        error:
          'Falha em reenviar código de verificação, tente novamente mais tarde',
      };
    }

    return { ok: 'enviado com sucesso' };
  }

  const handleChangeEmail = async (data: any) => {
    setSubmitting(true);
    const insertedPassword = data.password as string;
    const insertedEmail = data.email as string;

    if (insertedEmail === session?.user?.email) {
      setEmailExistsError(
        'O novo e-mail não poder ser igual ao antigo',
      );
      setSubmitting(false);
      return;
    }

    const comparePassword = await compareUserPassword({
      password: insertedPassword,
    });
    if (comparePassword.error) {
      setWrongPasswordError('A senha está incorreta');
      setSubmitting(false);
      return;
    }

    const updateEmail = await updateUserEmail({
      email: insertedEmail,
    });
    if (updateEmail.error) {
      setLastFieldError('Falha em atualizar e-mail');
      setSubmitting(false);
      return;
    }

    const updateMagicLinkUserEmailResult =
      await updateMagicLinkUserEmail({
        email: insertedEmail,
      });
    if (updateMagicLinkUserEmailResult.error) {
      setSubmitting(false);
      setLastFieldError('Falha em atualizar link mágico');
      return;
    }

    const reloginSessionResult = await reloginSession({
      email: insertedEmail,
      password: `${session?.user?.fragment_hash_password}`,
      redirect: false,
    });
    if (reloginSessionResult.error) {
      setSubmitting(false);
      setLastFieldError(
        'Falha em iniciar a nova sessão com novo email',
      );
      return;
    }

    props.setResetTimer(true);
    handleResendVerificationEmail(insertedEmail);
    if (reloginSessionResult.error) {
      setSubmitting(false);
      setLastFieldError(
        'Falha em enviar e-mail de confirmação para o novo e-mail',
      );
      return;
    }

    dispatch(
      putAlert({
        content: {
          message: `E-mail corrigido e código enviado com sucesso para ${insertedEmail}`,
          severity: 'success',
          duration: 8000,
          show: true,
        },
      }),
    );

    setSubmitting(false);
    handleChangeEmailModalClose();
  };
  const handleChangeEmailModalClose = () => {
    reset();
    props.setChangeEmailModalOpen(false);
    setLastFieldError('');
    setWrongPasswordError('');
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
          }}
        >
          <Title
            variant="body1"
            fontSize="110%"
            sx={{ color: 'modalTitle.main' }}
          >
            <LabelIcon
              sx={{
                marginRight: '1%',
                fontSize: '65%',
                transform: 'scale(170%)',
                color: 'modalTitleIcon.main',
              }}
            />{' '}
            Corrigir e-mail de cadastro
          </Title>
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
            id="change-email-form"
            style={{ marginBottom: '5%' }}
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
              setWrongPasswordError={setWrongPasswordError}
              wrongPasswordError={wrongPasswordError as string}
              register={register}
            />
            {wrongPasswordError && (
              <Text
                mb={-2}
                color="error"
                align="left"
                variant="subtitle2"
                width="100%"
                fontSize="80%"
              >
                {wrongPasswordError}
              </Text>
            )}
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
          <SendButton
            sx={{
              transform: 'scale(87%)',
            }}
            form="change-email-form"
            enviar="Corrigir"
            enviando="Corrigindo"
            submitting={submitting}
            onClick={handleErrors}
            customIcon="change"
            color="buttonSnackbarOk"
          />
          <Button
            sx={{
              transform: 'scale(87%)',
            }}
            color="buttonSnackbarCancel"
            variant="outlined"
            onClick={handleChangeEmailModalClose}
            endIcon={<CloseIcon sx={{ marginTop: '-2px' }} />}
          >
            Cancelar
          </Button>
        </DialogActions>
        {/*}}}*/}
      </BootstrapDialog>
    </>
  );
}
