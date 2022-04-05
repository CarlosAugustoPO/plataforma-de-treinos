import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import TextButton from 'src/components/TextButton/index';
import Caption from 'src/components/Caption/index';
import EmailField from 'src/components/Form/EmailField/index';
import PasswordField from 'src/components/Form/PasswordField/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import ModalPoliticasDeDados from 'src/components/Modals/PoliticasDeDados/index';
import ModalTermosPreUser from 'src/components/Modals/TermosPreUser/index';
import LoginIcon from '@mui/icons-material/LoginRounded';
import { useState, useEffect } from 'react';
import login from 'src/lib/fetchers/session/login';
import { useForm } from 'react-hook-form';

export default function EntrarUnauthTemplate() {
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    return () => {
      setSubmitting(false); // This worked for me
    };
  }, []);
  const [generalError, setGeneralError] = useState<
    undefined | string
  >(undefined);
  const [okResult, setOkResult] = useState<undefined | string>(
    undefined,
  );
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleErrors() {
    setGeneralError('');
    clearErrors();
  }

  async function handleSignIn(data: any) {
    setSubmitting(true);
    const email = data.email;
    const password = data.password;
    const result = await login({
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setGeneralError(result.error);
      setSubmitting(false);
      return;
    }
    setOkResult('Login com sucesso');
    setSubmitting(false);
  }

  const [modalTermos, setModalTermos] = useState(false);
  const [modalPoliticas, setModalPoliticas] = useState(false);
  return (
    <MyCard>
      <ModalTermosPreUser
        isOpen={modalTermos}
        setOpen={setModalTermos}
      />
      <ModalPoliticasDeDados
        isOpen={modalPoliticas}
        setOpen={setModalPoliticas}
      />
      <LoginIcon sx={{ color: 'mainIcon.main', fontSize: 60 }} />
      <Title gutterBottom>Entre na Plataforma de Treinos</Title>
      <Text>
        Coloque suas credenciais para entrar na sua área de
        usuário
      </Text>
      <Form
        handleSubmit={handleSubmit}
        handleAction={handleSignIn}
      >
        <EmailField
          errors={errors.email?.type}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />
        <PasswordField
          errors={errors.password?.type}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />
        <SendButton
          sx={{ marginTop: '2%' }}
          enviar="Entrar"
          enviando="Entrando"
          submitting={submitting}
          onClick={handleErrors}
        />
        {generalError && (
          <Text
            mt={1}
            color="error"
            align="center"
            variant="subtitle2"
            width="100%"
            fontSize="80%"
          >
            {generalError}
          </Text>
        )}
        {okResult && (
          <Text
            mt={1}
            color="success"
            align="center"
            variant="subtitle2"
            width="100%"
            fontSize="80%"
          >
            {okResult}
          </Text>
        )}

        <Caption mt={3}>
          Ao utilizar nosso produto você está de acordo com os
          nossos{' '}
          <TextButton
            cta="termos de uso"
            onClick={() => setModalTermos(true)}
          />{' '}
          e com nossas{' '}
          <TextButton
            cta="politicas de dados"
            onClick={() => setModalPoliticas(true)}
          />
          .
        </Caption>
        <Grid container mt={3} justifyContent="center">
          <Grid item>
            <TextButton
              linkColor="pinkLinkInt"
              cta="Não tem uma conta? Registre-se"
              sx={{ fontSize: '90%' }}
              href="/cadastrar"
            />
          </Grid>
        </Grid>
      </Form>
    </MyCard>
  );
}
