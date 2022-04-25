import TextButton from 'src/components/TextButton/index';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import readUser from 'src/lib/fetchers/users/read/index';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailField from 'src/components/Form/EmailField/index';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function RecuperarUnauthTemplate() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
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
  const dispatch = useAppDispatch();

  function handleErrors() {
    clearErrors();
    setLastFieldError('');
  }

  const lowerThan360 = useMediaQuery('(max-width:360px)');

  async function handleCheckUser(data: any) {
    const emailTratado = data.email.toLowerCase();
    setSubmitting(true);
    const user = await readUser({
      email: emailTratado,
      select: { email: true },
    });
    if (user.error) {
      setLastFieldError(
        user.error + '. Tente novamente com outro e-mail.',
      );
      setSubmitting(false);
      return;
    }
    dispatch(
      putAlert({
        content: {
          message: user.ok as string,
          severity: 'success',
          duration: 6000,
          show: true,
        },
      }),
    );
    router.push('/relembrar-email/' + emailTratado);
    return;
  }

  return (
    <MyCard>
      <ContactMailIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Grid style={{ width: '90%' }}>
        <Title paragraph>
          Relembre seu email cadastrado na Plataforma de Treinos
        </Title>
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginBottom: '3%',
          }}
        />
        <Text>
          Caso você não lembre qual e-mail está cadastrado na
          Plataforma de Treinos, insira um dos seus principais
          e-mails abaixo que faremos uma busca para verificar se
          há um cadastro ativo e, caso haja, lhe daremos as
          opções disponíveis para recuperar sua senha.
        </Text>
      </Grid>
      <Grid style={{ width: '90%' }}>
        <Form
          handleSubmit={handleSubmit}
          handleAction={handleCheckUser}
        >
          <EmailField
            fieldLabel="Possível e-mail de cadastro"
            errors={errors.email?.type}
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
          <Grid container width="100%" m="auto">
            <Grid
              item
              xs={lowerThan360 ? 12 : 6}
              p={'1.5em 0.5em 0em 0.5em'}
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
              p={
                lowerThan360
                  ? '0 0.5em 0em 0.5em'
                  : '1.5em 0.5em 0em 0.5em'
              }
              xs={lowerThan360 ? 12 : 6}
              mt={lowerThan360 ? 2 : 0}
            >
              <SendButton
                enviar="Buscar"
                enviando="Buscando"
                submitting={submitting}
                onClick={handleErrors}
                customIcon="verifyEmail"
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item width="100%">
              <Divider
                sx={{
                  bgcolor: 'clearLine.main',
                  marginTop: '1.5em',
                  marginBottom: '1em',
                }}
              />
              <TextButton
                linkColor="pinkLinkInt"
                cta="Lembrou suas credenciais? Entre"
                sx={{ fontSize: '90%' }}
                href="/entrar"
              />
            </Grid>
            <Grid item width="100%" mt={1}>
              <TextButton
                linkColor="pinkLinkInt"
                cta="Não achou sua conta? Cadastre-se"
                sx={{ fontSize: '90%' }}
                href="/cadastrar"
              />
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </MyCard>
  );
}
