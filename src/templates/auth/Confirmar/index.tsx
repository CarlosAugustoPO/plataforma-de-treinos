import updateMagicToken from 'src/lib/fetchers/magic-links/update/magicTokenFields/index';
import updateVerificationCode from 'src/lib/fetchers/users/update/verificationCodeField/index';
import { sendVerificationMail } from 'src/lib/chains/sendVerificationMail/index';
import TimerTextButton from 'src/components/TimerTextButton/index';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import TextButton from 'src/components/TextButton/index';
import VerificationCodeField from 'src/components/Form/VerificationCodeField/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import ConfirmMailIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logout from 'src/lib/fetchers/session/logout';
import verifyCode from 'src/lib/chains/verifyCode';
import type Session from 'src/types/Session';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';
import ChangeEmailModal from 'src/components/Modals/ChangeEmail/index';

export default function ConfirmarAuthTemplate(props: {
  session: Session;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [isChangeEmailModalOpen, setChangeEmailModalOpen] =
    useState(false);

  useEffect(() => {
    return () => {
      setSubmitting(false); // This worked for me
    };
  }, []);

  const [lastFieldError, setLastFieldError] = useState<
    undefined | string
  >(undefined);
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const openChangeEmailModal = () => {
    setChangeEmailModalOpen(true);
  };
  const handleLogout = async () => {
    dispatch(
      putAlert({
        content: {
          message: 'Saindo da área de usuário...',
          severity: 'warning',
          duration: 3000,
          show: true,
        },
      }),
    );
    const result = await logout({
      redirect: false,
      callbackUrl: '/entrar',
    });
    router.push(result.url);
  };
  function handleErrors() {
    clearErrors();
  }

  async function handleConfirm(data: any) {
    setSubmitting(true);
    const verificationCode = data.verificationCode;

    const email = props.session?.user?.email as string;
    const hashFragment = props.session?.user
      ?.fragment_hash_password as string;

    const verifyCodeResult = await verifyCode({
      verificationCode,
      hashFragment,
      email,
    });
    if (verifyCodeResult.error) {
      setLastFieldError(verifyCodeResult.error.toString());
      setSubmitting(false); //cause non-op error, cause try change when as unmouunt cause redirect, put this on useeFfect
      return;
    }

    dispatch(
      putAlert({
        content: {
          message: verifyCodeResult.ok as string,
          severity: 'success',
          duration: 6000,
          show: true,
        },
      }),
    );
    setSubmitting(false);
    return;
  }

  async function handleResendVerificationEmail() {
    handleErrors();
    const email = props.session?.user?.email as string;

    const updateVerificationCodeResult =
      await updateVerificationCode(email);

    if (updateVerificationCodeResult.error) {
      setLastFieldError(
        'Falha em gerar novo código de verificação, tente novamente mais tarde',
      );
      return;
    }

    const updateMagicTokenResult = await updateMagicToken(email);
    if (updateMagicTokenResult.error) {
      setLastFieldError(
        'Falha em gerar novo link mágico, tente novamente mais tarde',
      );
      return;
    }

    const sendVerificationMailResult =
      await sendVerificationMail(email);

    if (sendVerificationMailResult.error) {
      setLastFieldError(
        'Falha em reenviar código de verificação, tente novamente mais tarde',
      );
      return;
    }

    dispatch(
      putAlert({
        content: {
          message: `Código reenviado com sucesso para ${email}`,
          severity: 'success',
          duration: 6000,
          show: true,
        },
      }),
    );
    return;
  }

  return (
    <MyCard>
      <ConfirmMailIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Title gutterBottom>
        Confirme sua conta na Plataforma de Treinos
      </Title>
      <Text>
        Digite o número de 5 dígitos enviado ao email{' '}
        {props.session?.user?.email}
      </Text>
      <Grid style={{ width: '90%' }}>
        <Form
          handleSubmit={handleSubmit}
          handleAction={handleConfirm}
        >
          <VerificationCodeField
            errors={errors.verificationCode?.type}
            clearErrors={clearErrors}
            setLastFieldError={setLastFieldError}
            lastFieldError={lastFieldError as string}
            register={register}
          />
          {lastFieldError && (
            <Text
              color="error.main"
              align="left"
              width="100%"
              variant="subtitle2"
              fontSize="80%"
            >
              {lastFieldError}
            </Text>
          )}
          <Grid item xs={12}>
            <SendButton
              enviar="Verificar"
              enviando="Verificando"
              submitting={submitting}
              onClick={handleErrors}
              customIcon="verifyEmail"
            />
          </Grid>
        </Form>
      </Grid>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12}>
          <TimerTextButton
            onClick={handleResendVerificationEmail}
            cta={`Reenviar email de confirmação`}
            initialTime={45000}
            resetTimer={resetTimer}
            setResetTimer={setResetTimer}
            fontSize="90%"
          />
        </Grid>
        <Grid item xs={12}>
          <TextButton
            linkColor="pinkLinkWithoutRouter"
            sx={{ fontSize: '90%' }}
            onClick={openChangeEmailModal}
            cta={`Corrigir endereço de e-mail`}
          />
        </Grid>
        <Grid item xs={12}>
          <TextButton
            linkColor="pinkLinkWithoutRouter"
            sx={{ fontSize: '90%' }}
            onClick={handleLogout}
            cta={`Sair de ${props.session?.user?.email}`}
          />
        </Grid>
      </Grid>
      <ChangeEmailModal
        isChangeEmailModalOpen={isChangeEmailModalOpen}
        setChangeEmailModalOpen={setChangeEmailModalOpen}
        setResetTimer={setResetTimer}
        resendVerificationMail={handleResendVerificationEmail}
      />
    </MyCard>
  );
}
