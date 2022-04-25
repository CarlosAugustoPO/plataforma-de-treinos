import updateLogonTokenFields from 'src/lib/fetchers/users/update/jwtKeyField/index';
import readUser from 'src/lib/fetchers/users/read/index';
import updateUserPasswordField from 'src/lib/fetchers/users/update/passwordField/index';
import { useRouter } from 'next/router';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import PasswordFieldWithConfirm from 'src/components/Form/PasswordFieldWithConfirm/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import SignUpIcon from '@mui/icons-material/HowToReg';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import { useAppDispatch } from 'src/lib/hooks/useRedux/index';
import { putAlert } from 'src/reducers/alert/index';
import Button from '@mui/material/Button';

export default function CadastrarUnauthTemplate(props: {
  email: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const lowerThan455 = useMediaQuery('(max-width:455px)');
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
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }

  async function handlechangePassword(data: any) {
    setSubmitting(true);
    const email = props.email;
    const password = data.password as string;
    const user = await readUser({
      email,
      select: { recovery_code: true, recovery_code_date: true },
    });

    if (user.data?.recovery_code === null) {
      dispatch(
        putAlert({
          content: {
            message:
              'Solicitação de recuperação cancelada, faça uma nova solicitação',
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

    const updateUserPasswordFieldResult =
      await updateUserPasswordField({
        email,
        newPassword: password,
      });
    if (updateUserPasswordFieldResult.error) {
      setLastFieldError(updateUserPasswordFieldResult.error);
    }

    await updateLogonTokenFields({
      email,
      logoutRequestId: 'none',
    });

    dispatch(
      putAlert({
        content: {
          message: `Senha alterada com sucesso! Você já pode entrar em ${email} utilizando a nova senha`,
          severity: 'success',
          duration: 8000,
          show: true,
        },
      }),
    );
    router.push('/entrar');
    return;
  }

  return (
    <MyCard>
      <SignUpIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Grid sx={{ width: '90%' }}>
        <Title paragraph>
          Troque sua senha da Plataforma de Treinos
        </Title>
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginBottom: '3%',
          }}
        />
        <Text>
          Escolha sua nova senha para a conta{' '}
          <span
            style={{
              color: 'var(--title-span-true)',
              wordBreak: 'break-word',
            }}
          >
            {props.email}
          </span>
        </Text>
      </Grid>
      <Grid sx={{ maxWidth: '90%' }}>
        <Form
          handleSubmit={handleSubmit}
          handleAction={handlechangePassword}
        >
          <PasswordFieldWithConfirm
            passwordErrors={errors.password?.type}
            fieldLabelPassword="Nova senha"
            fieldLabelConfirmPassword="Confirmar nova senha"
            confirmPasswordErrors={errors.confirmPassword?.type}
            getValues={getValues}
            clearErrors={clearErrors}
            setLastFieldError={setLastFieldError}
            lastFieldError={lastFieldError as string}
            register={register}
          />
          {lastFieldError && (
            <Text
              mt={1}
              color="error"
              align="left"
              width="100%"
              variant="subtitle2"
              fontSize="80%"
            >
              {lastFieldError}
            </Text>
          )}
          <Grid container width="90%" m="auto" mt={2} mb={1}>
            <Grid
              item
              xs={lowerThan455 ? 12 : 6}
              p={'0.5em 0.5em 0em 0.5em'}
            >
              <Button
                color="buttonCancel"
                variant="outlined"
                sx={{
                  width: '100%',
                }}
                endIcon={
                  <CloseIcon sx={{ marginTop: '-2px' }} />
                }
                onClick={() => router.push('/entrar')}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid
              item
              xs={lowerThan455 ? 12 : 6}
              mt={lowerThan455 ? 2 : 0}
              p={
                lowerThan455
                  ? '0 0.5em 0em 0.5em'
                  : '0.5em 0.5em 0em 0.5em'
              }
            >
              <SendButton
                enviar="Trocar"
                enviando="Trocando"
                submitting={submitting}
                onClick={handleErrors}
                customIcon="change"
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>{' '}
          <Grid container justifyContent="center">
            <Grid item width="100%">
              <Divider
                sx={{
                  bgcolor: 'clearLine.main',
                  marginTop: '3%',
                  marginBottom: '3%',
                }}
              />
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </MyCard>
  );
}
