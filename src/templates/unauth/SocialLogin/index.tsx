import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { signIn } from 'next-auth/react';
import TextButton from 'src/components/TextButton/index';
import Caption from 'src/components/Caption/index';
import SendButton from 'src/components/Form/SendButton/index';
import Title from 'src/components/Title';
import Text from 'src/components/Text';
import ModalPoliticasDeDados from 'src/components/Modals/PoliticasDeDados/index';
import ModalTermosPreUser from 'src/components/Modals/TermosPreUser/index';
import HandshakeIcon from '@mui/icons-material/HandshakeRounded';
import { useState } from 'react';
export default function EntrarUnauthTemplate() {
  const router = useRouter();
  const [modalTermos, setModalTermos] = useState(false);
  const [modalPoliticas, setModalPoliticas] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '500px',
        margin: 'auto',
      }}
    >
      <ModalTermosPreUser
        isOpen={modalTermos}
        setOpen={setModalTermos}
      />
      <ModalPoliticasDeDados
        isOpen={modalPoliticas}
        setOpen={setModalPoliticas}
      />

      <Grid>
        <HandshakeIcon
          sx={{ color: 'mainIcon.main', fontSize: 60 }}
        />
        <Title paragraph>Seja bem-vindo(a)!</Title>
        <Text>
          Treine com acompanhamento profissional a qualquer hora
          e em qualquer lugar.
        </Text>
      </Grid>

      <Grid>
        <Grid item xs={12}>
          <SendButton
            enviar="Continuar com e-mail..."
            enviando="Entrando..."
            customIcon="email"
            onClick={() => router.push('/entrar')}
            sx={{
              width: '270px',
              paddingLeft: '0',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <SendButton
            enviar="Continuar com Google..."
            enviando="Entrando..."
            customIcon="google"
            color="error"
            onClick={() =>
              signIn('google', {
                callbackUrl: '/painel',
              })
            }
            sx={{
              width: '270px',
              paddingLeft: '7px',
              marginTop: '15px',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <SendButton
            enviar="Continuar com Facebook..."
            enviando="Entrando..."
            customIcon="facebook"
            color="primary"
            onClick={() => signIn()}
            sx={{
              width: '270px',
              paddingLeft: '25px',
              marginTop: '15px',
            }}
          />
        </Grid>
      </Grid>

      <Grid sx={{ width: '90%' }}>
        <Caption>
          Ao continuar você está de acordo com os nossos{' '}
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
      </Grid>
    </div>
  );
}
