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
import { useAppDispatch } from 'src/lib/hooks/useRedux/index';
import { putAlert } from 'src/reducers/alert/index';
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
        setEmailExistsError(signUpJson.error.toString());
        dispatch(
          putAlert({
            content: {
              message: 'Falha em realizar cadastro',
              severity: 'error',
              duration: 5000,
              show: true,
            },
          }),
        );
        setSubmitting(false);
        return;
      }
      setLastFieldError(signUpJson.error.toString());
      setSubmitting(false); //cause non-op error, cause try change when as unmouunt cause redirect, put this on useeFfect
      return;
    }

    const createMagicLinkResult = await createMagicLink(email);
    if (createMagicLinkResult.error) {
      setLastFieldError(createMagicLinkResult.error.toString());
      setSubmitting(false);
      return;
    }

    const sendVerificationMailResult =
      await sendVerificationMail(email);
    if (sendVerificationMailResult.error) {
      await deleteUser(email);
      setLastFieldError(sendVerificationMailResult.error);
      setSubmitting(false);
      return;
    }

    const loginResult = await login({
      email,
      password,
      redirect: false,
    });
    if (loginResult?.error) {
      setLastFieldError(loginResult.error);
      setSubmitting(false);
      return;
    }

    dispatch(
      putAlert({
        content: {
          message: 'Cadastro criado com sucesso',
          severity: 'success',
          duration: 8000,
          show: true,
        },
      }),
    );
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
      <Grid sx={{ maxWidth: '90%' }}>
        <Form
          handleSubmit={handleSubmit}
          handleAction={handleSignUp}
        >
          <FirstNameField
            errors={errors.firstName?.type}
            clearErrors={clearErrors}
            setLastFieldError={setLastFieldError}
            lastFieldError={lastFieldError as string}
            register={register}
          />
          <LastNameField
            errors={errors.lastName?.type}
            clearErrors={clearErrors}
            setLastFieldError={setLastFieldError}
            lastFieldError={lastFieldError as string}
            register={register}
          />
          <EmailFieldWithConfirm
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
          <PasswordFieldWithConfirm
            passwordErrors={errors.password?.type}
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
          <SendButton
            sx={{ marginTop: '2%' }}
            enviar="Registrar"
            enviando="Registrando"
            submitting={submitting}
            onClick={handleErrors}
          />

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
      </Grid>
    </MyCard>
  );
}
