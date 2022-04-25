import LoadingTemplate from 'src/templates/commons/Loading/index';
import readUser from 'src/lib/fetchers/users/read/index';
import Divider from '@mui/material/Divider';
import ModalForgotEmail from 'src/components/Modals/ForgotEmail/index';
import TextButton from 'src/components/TextButton/index';
import updateRecoveryCode from 'src/lib/fetchers/users/update/recoveryCodeFields/index';
import { sendChangePasswordEmail } from 'src/lib/chains/sendChangePasswordMail//index';
import TimerTextButton from 'src/components/TimerTextButton/index';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import RecoveryCodeField from 'src/components/Form/RecoveryCodeField/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import ConfirmMailIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';

export default function ConfirmarAuthTemplate(props: {
  email: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [modalForgotEmail, setModalForgotEmail] =
    useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    return () => {
      setSubmitting(false); // This worked for me
      setUserExist(false);
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
  const email = props.email;

  useEffect(() => {
    readUser({
      email: email,
      select: { recovery_code: true, recovery_code_date: true },
    }).then((user) => {
      if (user.error) {
        router.push('/relembrar-email');
        dispatch(
          putAlert({
            content: {
              message: (user.error + ' ' + email) as string,
              severity: 'error',
              duration: 6000,
              show: true,
            },
          }),
        );
        return;
      }
      if (user.data?.recovery_code === null) {
        dispatch(
          putAlert({
            content: {
              message:
                'Solicitação de recuperação inexistente, faça uma nova solicitação',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(
          '/relembrar-email/' +
            email +
            '/solicitar-troca-de-senha',
        );
        return;
      }

      const requestDate: any = new Date(
        user.data?.recovery_code_date as Date,
      );
      const today: any = new Date();
      const diffTime = Math.abs(today - requestDate);
      const diffDays = Math.ceil(
        diffTime / (1000 * 60 * 60 * 24),
      );

      if (diffDays > 1) {
        dispatch(
          putAlert({
            content: {
              message:
                'Link de recuperação expirado, faça uma nova solicitação',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(
          '/relembrar-email/' +
            email +
            '/solicitar-troca-de-senha',
        );
        return;
      }
      setUserExist(true);
    });
  }, [email, router, dispatch]);

  function handleErrors() {
    clearErrors();
  }

  async function handleCheckRecoveryCode(data: any) {
    setSubmitting(true);
    const recoveryCode = data.recoveryCode;
    const user = await readUser({
      email,
      select: {
        recovery_code: true,
        recovery_code_date: true,
        fragment_hash_password: true,
      },
    });

    if (user.error) {
      setLastFieldError(user.error);
      setSubmitting(false);
      return;
    }

    if (user.data?.recovery_code === null) {
      dispatch(
        putAlert({
          content: {
            message:
              'Solicitação de recuperação inexistente, faça uma nova solicitação',
            severity: `error`,
            duration: 8000,
            show: true,
          },
        }),
      );
      router.push(
        '/relembrar-email/' +
          email +
          '/solicitar-troca-de-senha',
      );
      return;
    }

    const requestDate: any = new Date(
      user.data?.recovery_code_date as Date,
    );
    const today: any = new Date();
    const diffTime = Math.abs(today - requestDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      dispatch(
        putAlert({
          content: {
            message:
              'Link de recuperação expirado, faça uma nova solicitação',
            severity: `error`,
            duration: 8000,
            show: true,
          },
        }),
      );
      router.push(
        '/relembrar-email/' +
          email +
          '/solicitar-troca-de-senha',
      );
      return;
    }

    if (recoveryCode != user.data?.recovery_code) {
      setLastFieldError(
        'Código de recuperação incorreto. Verifique o número de 5 dígitos enviado ao email ' +
          email,
      );
      setSubmitting(false);
      return;
    }
    const fragmentHashPassword =
      user.data?.fragment_hash_password;

    dispatch(
      putAlert({
        content: {
          message: `Código verificado com sucesso`,
          severity: 'success',
          duration: 6000,
          show: true,
        },
      }),
    );
    router.push(
      `/trocar-senha/${email}/${fragmentHashPassword}/${recoveryCode}`,
    );
    return;
  }

  async function handleResendRecoveryEmail() {
    handleErrors();

    const updateRecoveryCodeResult = await updateRecoveryCode(
      email,
    );

    if (updateRecoveryCodeResult.error) {
      setLastFieldError(
        'Falha em gerar novo código de recuperação, tente novamente mais tarde',
      );
      return;
    }

    const sendChangePasswordEmailResult =
      await sendChangePasswordEmail(email);

    if (sendChangePasswordEmailResult.error) {
      setLastFieldError(
        'Falha em reenviar código de recuperação, tente novamente mais tarde',
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
    <>
      {userExist ? (
        <MyCard>
          <ConfirmMailIcon
            sx={{ color: 'mainIcon.main', fontSize: 60 }}
          />
          <Grid sx={{ width: '90%' }}>
            <Title paragraph>
              Confirme que você é dono desta conta na Plataforma
              de Treinos
            </Title>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginBottom: '3%',
              }}
            />
            <Text>
              Digite o número de recuperação com 5 dígitos
              enviado ao email{' '}
              <span
                style={{
                  color: 'var(--title-span-true)',
                }}
              >
                {email}
              </span>
            </Text>
          </Grid>
          <Grid style={{ width: '90%' }}>
            <Form
              handleSubmit={handleSubmit}
              handleAction={handleCheckRecoveryCode}
            >
              <RecoveryCodeField
                errors={errors.recoveryCode?.type}
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
                  enviar="confirmar"
                  enviando="Conferindo"
                  submitting={submitting}
                  onClick={handleErrors}
                  customIcon="check"
                />
              </Grid>
            </Form>
          </Grid>
          <Grid
            container
            width="90%"
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Divider
                sx={{
                  bgcolor: 'clearLine.main',
                  marginBottom: '3%',
                }}
              />{' '}
              <TimerTextButton
                onClick={handleResendRecoveryEmail}
                cta={`Reenviar código de recuperação`}
                initialTime={75000}
                resetTimer={resetTimer}
                setResetTimer={setResetTimer}
                fontSize="90%"
              />
            </Grid>
            <Grid item width="100%">
              <TextButton
                linkColor="pinkLinkWithoutRouter"
                cta="Não lembro a senha desse e-mail"
                sx={{ fontSize: '90%' }}
                onClick={() => setModalForgotEmail(true)}
              />{' '}
            </Grid>
          </Grid>
          <ModalForgotEmail
            isOpen={modalForgotEmail}
            setOpen={setModalForgotEmail}
          />
        </MyCard>
      ) : (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
    </>
  );
}
