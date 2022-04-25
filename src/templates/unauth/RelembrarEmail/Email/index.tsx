import Divider from '@mui/material/Divider';
import TextButton from 'src/components/TextButton/index';
import LoadingTemplate from 'src/templates/commons/Loading/index';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import readUser from 'src/lib/fetchers/users/read/index';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Grid from '@mui/material/Grid';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LoginIcon from '@mui/icons-material/Login';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function RecuperarUnauthTemplate() {
  const [emailFound, setEmailFound] = useState(false);
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

  const lowerThan375 = useMediaQuery('(max-width:375px)');
  const lowerThan325 = useMediaQuery('(max-width:325px)');
  const lowerThan455 = useMediaQuery('(max-width:455px)');

  return (
    <>
      {emailFound && (
        <MyCard>
          <ContactMailIcon
            sx={{ color: 'mainIcon.main', fontSize: 60 }}
          />
          <Grid style={{ width: '90%', margin: 'auto' }}>
            <Title paragraph>
              <span
                style={{
                  color: 'var(--title-span-true)',
                  wordBreak: 'break-all',
                }}
              >
                {email}
              </span>{' '}
              está cadastrado na Plataforma de Treinos
            </Title>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginBottom: '1em',
              }}
            />
            <Text>
              Se você lembra a sua senha da Plataforma de
              Treinos, basta utiliza-la junto a este e-mail para
              acessar sua conta através da{' '}
              <TextButton
                cta="página de login"
                href="/entrar"
                fontSize="100%"
                linkColor="pinkLinkInt"
              />
              . Caso você não lembre sua senha, você pode{' '}
              <TextButton
                cta="redefini-la"
                href={`/relembrar-email/${email}/solicitar-troca-de-senha`}
                fontSize="100%"
                linkColor="pinkLinkInt"
              />
              {'.'}
            </Text>
          </Grid>
          <Grid container width="90%" m="auto">
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
                  <PublishedWithChangesIcon
                    sx={{ marginTop: '-2px' }}
                  />
                }
                onClick={() =>
                  router.push(
                    '/relembrar-email/' +
                      email +
                      '/solicitar-troca-de-senha',
                  )
                }
              >
                Trocar Senha
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
              <Button
                color="sendButton"
                variant="outlined"
                sx={{
                  width: '100%',
                }}
                endIcon={
                  <LoginIcon sx={{ marginTop: '-2px' }} />
                }
                onClick={() => router.push('/entrar')}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>{' '}
          <Grid style={{ width: '90%' }}>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '1em',
                marginBottom: '1em',
              }}
            />
            <TextButton
              linkColor="pinkLinkInt"
              cta="Esse e-mail não é meu"
              sx={{ fontSize: '90%' }}
              href="/relembrar-email"
            />
          </Grid>
        </MyCard>
      )}
      {!emailFound && <LoadingTemplate />}
    </>
  );
}
