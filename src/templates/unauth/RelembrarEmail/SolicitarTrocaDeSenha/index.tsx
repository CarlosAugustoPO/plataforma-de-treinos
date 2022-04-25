import ModalForgotEmail from 'src/components/Modals/ForgotEmail/index';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import TextButton from 'src/components/TextButton/index';
import LoadingTemplate from 'src/templates/commons/Loading/index';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import readUser from 'src/lib/fetchers/users/read/index';
import Grid from '@mui/material/Grid';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import SendEmailIcon from '@mui/icons-material/ForwardToInboxOutlined';
import SendEmailIconTwoTone from '@mui/icons-material/ForwardToInboxTwoTone';
import useMediaQuery from '@mui/material/useMediaQuery';
import { sendChangePasswordEmail } from 'src/lib/chains/sendChangePasswordMail/index';

export default function RecuperarUnauthTemplate() {
  const [emailFound, setEmailFound] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [modalForgotEmail, setModalForgotEmail] =
    useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { email } = router.query;
  useEffect(() => {
    readUser({
      email: email as string,
      select: { email: true },
    }).then((user) => {
      if (user.error) {
        setEmailFound(false);
        dispatch(
          putAlert({
            content: {
              message: (user.error as string) + ' ' + email,
              severity: 'error',
              duration: 6000,
              show: true,
            },
          }),
        );
        router.push('/relembrar-email');
        return () => {};
      }
      setEmailFound(true);
    });
  }, [dispatch, router, email]);

  const lowerThan360 = useMediaQuery('(max-width:360px)');

  const handleSendChangePasswordEmail = async () => {
    setSubmitting(true);
    const sendChangePasswordEmailResult =
      await sendChangePasswordEmail(email as string);

    if (sendChangePasswordEmailResult.error) {
      dispatch(
        putAlert({
          content: {
            message: `Falha em enviar o email de troca de senha`,
            severity: 'error',
            duration: 6000,
            show: true,
          },
        }),
      );
      setSubmitting(false);
      return;
    }
    dispatch(
      putAlert({
        content: {
          message: `Intruções para recuperação de senha enviadas com sucesso para ${email}`,
          severity: 'success',
          duration: 6000,
          show: true,
        },
      }),
    );
    router.push('/autenticar-troca-de-senha/' + email);
    return;
  };

  return (
    <>
      {emailFound && (
        <MyCard>
          <ModalForgotEmail
            isOpen={modalForgotEmail}
            setOpen={setModalForgotEmail}
          />
          <SendEmailIconTwoTone
            sx={{ color: 'mainIcon.main', fontSize: 60 }}
          />
          <Grid style={{ width: '90%', margin: 'auto' }}>
            <Title paragraph>
              Enviar e-mail de recuperação de senha para{' '}
              <span
                style={{
                  color: 'var(--title-span-true)',
                  wordBreak: 'break-word',
                }}
              >
                {email}
              </span>
            </Title>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginBottom: '1em',
              }}
            />
            <Text>
              O código de confirmação junto com as instruções
              para redefinir a sua senha e confirmar sua
              identidade serão enviados para o email {email}.
            </Text>
          </Grid>
          <Grid style={{ width: '90%' }} mb={1}>
            <Grid container m="auto">
              <Grid
                item
                xs={lowerThan360 ? 12 : 6}
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
                xs={lowerThan360 ? 12 : 6}
                mt={lowerThan360 ? 2 : 0}
                p={
                  lowerThan360
                    ? '0 0.5em 0em 0.5em'
                    : '0.5em 0.5em 0em 0.5em'
                }
              >
                <Button
                  color="sendButton"
                  variant="outlined"
                  disabled={submitting ? true : false}
                  sx={{
                    width: '100%',
                  }}
                  endIcon={
                    !submitting ? (
                      <SendEmailIcon
                        sx={{ marginTop: '-2px' }}
                      />
                    ) : (
                      <CircularProgress
                        size={16}
                        sx={{ color: 'disabled.main' }}
                      />
                    )
                  }
                  onClick={handleSendChangePasswordEmail}
                >
                  {submitting ? 'Enviando' : 'Enviar'}
                </Button>
              </Grid>
            </Grid>{' '}
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
                  linkColor="pinkLinkWithoutRouter"
                  cta="Não lembro a senha desse e-mail"
                  sx={{ fontSize: '90%' }}
                  onClick={() => setModalForgotEmail(true)}
                />
              </Grid>
              <Grid item width="100%" mt={1}>
                <TextButton
                  linkColor="pinkLinkInt"
                  cta="Esse e-mail não é meu"
                  sx={{ fontSize: '90%' }}
                  href="/relembrar-email"
                />
              </Grid>
            </Grid>
          </Grid>{' '}
        </MyCard>
      )}
      {!emailFound && <LoadingTemplate />}
    </>
  );
}
