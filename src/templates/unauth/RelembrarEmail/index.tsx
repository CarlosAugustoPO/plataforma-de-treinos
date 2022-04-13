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
    setSubmitting(false);
    router.push('/email-encontrado/' + emailTratado);
    return;
  }

  return (
    <MyCard>
      <ContactMailIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Title gutterBottom>
        Relembre seu email cadastrado na Plataforma de Treinos
      </Title>
      <Grid style={{ width: '90%' }}>
        <Text>
          Caso não lembre qual e-mail está cadastrado na
          Plataforma de Treinos, insira um dos possíveis e-mails
          abaixo que faremos os teste para verificar se há um
          cadastro ativo e lhe daremos as opções disponíveis para
          recuperar sua senha.
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
          <Grid item xs={12}>
            <SendButton
              enviar="Verificar"
              enviando="Verificando"
              submitting={submitting}
              onClick={handleErrors}
              customIcon="verifyEmail"
              sx={{ margin: '10px' }}
            />
            <Button
              color="buttonSnackbarCancel"
              variant="outlined"
              sx={{ margin: '10px' }}
              endIcon={<CloseIcon sx={{ marginTop: '-2px' }} />}
              onClick={() => router.push('/entrar')}
            >
              Cancelar
            </Button>
          </Grid>
        </Form>
      </Grid>
    </MyCard>
  );
}
