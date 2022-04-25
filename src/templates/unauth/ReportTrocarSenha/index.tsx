import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import MyCard from 'src/components/MyCard/index';
import SystemSecurityUpdateGoodTwoToneIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import Button from '@mui/material/Button';

export default function CadastrarUnauthTemplate(props: {
  email: string;
}) {
  const router = useRouter();

  return (
    <MyCard>
      <SystemSecurityUpdateGoodTwoToneIcon
        sx={{ color: 'mainIcon.main', fontSize: 60 }}
      />
      <Grid sx={{ width: '90%' }}>
        <Title paragraph>Obrigado por nos avisar</Title>
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginBottom: '3%',
          }}
        />
        <Text>
          Registramos que você não solicitou uma redefinição de
          senha para a conta:{' '}
          <span
            style={{
              color: 'var(--title-span-true)',
              wordBreak: 'break-word',
            }}
          >
            {props.email}
          </span>
          {'.'} Faça login na sua conta normalmente, com sua
          senha atual e não precisará fazer mais nada.
        </Text>
      </Grid>
      <Grid container width="90%" m="auto">
        <Grid item xs={12} p={'0em 0.5em 0em 0.5em'}>
          <Button
            color="sendButton"
            variant="outlined"
            sx={{
              width: '130px',
              maxWidth: '100%',
            }}
            endIcon={<LoginIcon sx={{ marginTop: '-2px' }} />}
            onClick={() => router.push('/entrar')}
          >
            Entrar
          </Button>
        </Grid>
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
      </Grid>
    </MyCard>
  );
}
