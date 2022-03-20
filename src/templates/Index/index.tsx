//fetchers
import logout from 'src/lib/fetchers/session/logout';
//components
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Main from 'src/components/Main/index';
import Title from 'src/components/Title/index';
import MyCard from 'src/components/Card/index';
import Text from 'src/components/Text/index';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
import CreateIcon from '@mui/icons-material/Create';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';
//Hooks
import { useForm } from 'react-hook-form';
import useRouter from 'src/lib/hooks/useRouter';
import useSession from 'src/lib/hooks/useSession';
import { useState } from 'react';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';

type Props = {
  status: string;
};

export default function IndexTemplate({ status }: Props) {
  const session = useSession();
  const router = useRouter();
  const [termosModal, setModalTermosOpen] = useState(false);
  const [politicasDeDadosModal, setModalPoliticaDeDadosOpen] =
    useState(false);

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleErrors() {
    clearErrors();
  }

  async function handleSignIn(data: any) {
    const email = data.email;
    const name = data.name;
    console.log(email, name);
  }

  return (
    <Main>
      <MyCard>
        <AnnouncementTwoToneIcon
          color="warning"
          sx={{ fontSize: 75 }}
        />
        <Title variant="h3" component="h1" color="title.main">
          Site em construção
        </Title>
        {status === 'unauthenticated' && (
          <>
            <Text
              variant="body1"
              component="p"
              color="text.secodary"
            >
              A Plataforma de Treinos está em construção, mas
              falta bem pouquinho para você poder utiliza-la!
              Essa nova versão da consultoria em exercício físico
              está com novidades incríveis, estamos trabalhando
              bastante para oferecer a melhor experiência para
              você.
            </Text>
            <Text
              variant="body1"
              component="p"
              color="text.secodary"
            >
              Assine a lista de lançamento para ficar sabendo
              assim que a Plataforma de Treinos estiver pronta.
            </Text>

            <form
              style={{ maxWidth: '600px', width: '90%' }}
              noValidate
              onSubmit={handleSubmit(handleSignIn)}
            >
              <Grid container rowSpacing={3} p={2}>
                <Grid item xs={12} mt={2}>
                  <TextField
                    required
                    color="warning"
                    fullWidth
                    id="email"
                    label="E-mail"
                    variant="standard"
                    error={errors.email ? true : false}
                    autoComplete="email"
                    inputProps={{
                      style: {
                        textTransform: 'lowercase',
                      },
                    }}
                    onClick={() => clearErrors('email')}
                    onKeyUp={(e) => changeWhiteSpace(e)}
                    {...register('email', {
                      required: true,
                      pattern:
                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                    })}
                  />
                  {errors.email?.type === 'required' && (
                    <Text
                      color="error"
                      variant="subtitle2"
                      align="left"
                      fontSize="80%"
                    >
                      O campo e-mail é obrigatório
                    </Text>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <Text
                      color="error"
                      align="left"
                      variant="subtitle2"
                      fontSize="80%"
                    >
                      Preencha com um e-mail válido
                    </Text>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    variant="standard"
                    error={errors.name ? true : false}
                    onClick={() => clearErrors('name')}
                    {...register('name', {
                      required: true,
                      minLength: 2,
                      maxLength: 80,
                      pattern: /^[^0-9]*$/gm,
                    })}
                  />
                  {errors.name?.type === 'required' && (
                    <Text
                      color="error"
                      fontSize="80%"
                      align="left"
                      variant="subtitle2"
                    >
                      O campo nome é obrigatório
                    </Text>
                  )}
                  {errors.name?.type === 'minLength' && (
                    <Text
                      color="error"
                      fontSize="80%"
                      align="left"
                      variant="subtitle2"
                    >
                      Preencha seu nome com no mínimo 2 letras
                    </Text>
                  )}
                  {errors.name?.type === 'maxLength' && (
                    <Text
                      color="error"
                      fontSize="80%"
                      align="left"
                      variant="subtitle2"
                    >
                      Preencha seu nome com no máximo 80 letras
                    </Text>
                  )}
                  {errors.name?.type === 'pattern' && (
                    <Text
                      color="error"
                      fontSize="80%"
                      align="left"
                      variant="subtitle2"
                    >
                      Preencha seu nome apenas com letras
                    </Text>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleErrors}
                    endIcon={
                      <CreateIcon
                        sx={{
                          marginTop: '-5px',
                        }}
                      />
                    }
                  >
                    Inscrever-se
                  </Button>
                </Grid>
                <Grid item xs={12} fontSize="80%">
                  <Text color="text.secondary" variant="caption">
                    Ao inscrever-se você está de acordo com as
                    seguintes{' '}
                    <Text
                      color="discretLink.main"
                      variant="caption"
                      onClick={() =>
                        setModalPoliticaDeDadosOpen(true)
                      }
                      sx={{ cursor: 'pointer' }}
                    >
                      <a>políticas de dados</a>
                    </Text>{' '}
                    e com os seguintes{' '}
                    <Text
                      color="discretLink.main"
                      onClick={() => setModalTermosOpen(true)}
                      variant="caption"
                      sx={{ cursor: 'pointer' }}
                    >
                      <a>termos de uso</a>
                    </Text>
                    .
                  </Text>
                </Grid>
              </Grid>
            </form>
          </>
        )}
        {status === 'authenticated' && (
          <div>
            <h3>Seja bem vindo {session!.user!.fname}</h3>
            <button
              type="button"
              onClick={() => router.push('/painel')}
            >
              Acessar sua área de usuário
            </button>
            <button
              type="button"
              onClick={() =>
                logout({
                  redirect: false,
                })
              }
            >
              sair de {session!.user!.fname}
            </button>
          </div>
        )}
      </MyCard>
      <BootstrapDialog
        onClose={() => setModalTermosOpen(false)}
        aria-labelledby="termos-pre-user"
        open={termosModal}
      >
        <BootstrapDialogTitle
          id="termos-pre-user"
          color="primary"
          sx={{ textTransform: 'uppercase' }}
        >
          Termos de uso - pré usuário
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Text gutterBottom>
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </Text>
          <Text gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor.
          </Text>
          <Text gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper
            nulla non metus auctor fringilla.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalTermosOpen(false)}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={() => setModalPoliticaDeDadosOpen(false)}
        aria-labelledby="politicas-de-dados"
        open={politicasDeDadosModal}
      >
        <BootstrapDialogTitle
          id="politicas-de-dados"
          color="primary"
          sx={{ textTransform: 'uppercase' }}
        >
          Política de dados - pré usuário
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Text gutterBottom>
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </Text>
          <Text gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor.
          </Text>
          <Text gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper
            nulla non metus auctor fringilla.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setModalPoliticaDeDadosOpen(false)}
          >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Main>
  );
}
