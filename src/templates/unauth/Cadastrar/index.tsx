import createUser from 'src/lib/fetchers/users/create/index';
import createMagicLink from 'src/lib/fetchers/magic-links/create/index';
import deleteUser from 'src/lib/fetchers/users/delete/index';
import { sendVerificationMail } from 'src/lib/chains/sendVerificationMail/index';
import Grid from '@mui/material/Grid';
import Form from 'src/components/Form/index';
import TextButton from 'src/components/TextButton/index';
import Caption from 'src/components/Caption/index';
import LastNameField from 'src/components/Form/LastNameField/index';
import FirstNameField from 'src/components/Form/FirstNameField/index';
import EmailFieldWithConfirm from 'src/components/Form/EmailFieldWithConfirm/index';
import PasswordFieldWithConfirm from 'src/components/Form/PasswordFieldWithConfirm/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import ModalPoliticasDeDados from 'src/components/Modals/PoliticasDeDados/index';
import ModalTermosPreUser from 'src/components/Modals/TermosPreUser/index';
import SignUpIcon from '@mui/icons-material/HowToReg';
import { useState, useEffect } from 'react';
import login from 'src/lib/fetchers/session/login';
import { useForm } from 'react-hook-form';

export default function CadastrarUnauthTemplate() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      setSubmitting(false); // This worked for me
    };
  }, []);

  const [emailExistsError, setEmailExistsError] = useState<
    undefined | string
  >(undefined);
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
    getValues,
    formState: { errors },
  } = useForm();

  function handleErrors() {
    setGeneralError('');
    clearErrors();
  }

  async function handleSignUp(data: any) {
    setSubmitting(true);
    const fname = data.firstName;
    const lname = data.lastName;
    const email = data.email;
    const password = data.password;

    const signUpJson = await createUser({
      fname,
      lname,
      email,
      password,
    });
    if (signUpJson.error) {
      if (
        signUpJson.error.toString() ===
        'Esse e-mail já existe em nosso banco de dados'
      ) {
        setGeneralError('Falha em realizar cadastro');
        setEmailExistsError(signUpJson.error.toString());
        setSubmitting(false);
        return;
      }
      setGeneralError(signUpJson.error.toString());
      setSubmitting(false); //cause non-op error, cause try change when as unmouunt cause redirect, put this on useeFfect
      return;
    }

    const createMagicLinkResult = await createMagicLink(email);
    if (createMagicLinkResult.error) {
      setGeneralError(createMagicLinkResult.error.toString());
      setSubmitting(false);
      return;
    }

    const sendVerificationMailResult =
      await sendVerificationMail(email);
    if (sendVerificationMailResult.error) {
      await deleteUser(email);
      setGeneralError(sendVerificationMailResult.error);
      setSubmitting(false);
      return;
    }

    const loginResult = await login({
      email,
      password,
      redirect: false,
    });
    if (loginResult?.error) {
      setGeneralError(loginResult.error);
      setSubmitting(false);
      return;
    }

    setOkResult(signUpJson.ok);
    setSubmitting(false);
    return;
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
      <SignUpIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Title gutterBottom>
        Registre-se na Plataforma de Treinos
      </Title>
      <Text>
        Informe seus dados para criar sua conta na Plataforma de
        Treinos
      </Text>
      <Form
        handleSubmit={handleSubmit}
        handleAction={handleSignUp}
      >
        <FirstNameField
          errors={errors.firstName?.type}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />
        <LastNameField
          errors={errors.lastName?.type}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />
        <EmailFieldWithConfirm
          emailErrors={errors.email?.type}
          confirmEmailErrors={errors.confirmEmail?.type}
          getValues={getValues}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          emailExistsError={emailExistsError}
          setEmailExistsError={setEmailExistsError}
          register={register}
        />
        <PasswordFieldWithConfirm
          passwordErrors={errors.password?.type}
          confirmPasswordErrors={errors.confirmPassword?.type}
          getValues={getValues}
          clearErrors={clearErrors}
          setOkResult={setOkResult}
          setGeneralError={setGeneralError}
          register={register}
        />

        <SendButton
          sx={{ marginTop: '2%' }}
          enviar="Registrar"
          enviando="Registrando"
          submitting={submitting}
          onClick={handleErrors}
        />
        {generalError && (
          <Text
            mt={1}
            color="error"
            align="center"
            width="100%"
            variant="subtitle2"
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
            width="100%"
            variant="subtitle2"
            fontSize="80%"
          >
            {okResult}
          </Text>
        )}
        <Caption mt={3}>
          Ao criar uma conta você está de acordo com os nossos{' '}
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
              cta="Já tem uma conta? Entrar"
              sx={{ fontSize: '90%' }}
              href="/entrar"
            />
          </Grid>
        </Grid>
      </Form>
    </MyCard>
  );
}
