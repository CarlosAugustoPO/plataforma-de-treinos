import TextButton from 'src/components/TextButton/index';
import Grid from '@mui/material/Grid';
import LabelIcon from '@mui/icons-material/LabelImportantTwoTone';
import DoneIcon from '@mui/icons-material/Done';
import Title from 'src/components/Title';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/Modals/index';
import type { Dispatch, SetStateAction } from 'react';
import Text from 'src/components/Text/index';
import { TransitionDown } from 'src/components/Transitions/index';
import PolicyIcon from '@mui/icons-material/Policy';

export default function TermposPreUserModal(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <BootstrapDialog
      onClose={() => props.setOpen(false)}
      aria-labelledby="forgot-email"
      TransitionComponent={TransitionDown}
      open={props.isOpen}
    >
      <BootstrapDialogTitle
        id="forgot-email"
        sx={{
          fontFamily: 'Carter One',
          backgroundColor: 'backgroundModalBar.main',
          color: 'modalTitle.main',
        }}
      >
        <Title
          variant="body1"
          fontSize="110%"
          sx={{ color: 'modalTitle.main' }}
        >
          <LabelIcon
            sx={{
              marginRight: '1%',
              fontSize: '65%',
              color: 'modalTitleIcon.main',
              transform: 'scale(170%)',
            }}
          />{' '}
          Não lembra a senha do seu e-mail?
        </Title>
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{ backgroundColor: 'backgroundModalBody.main' }}
      >
        <Text paragraph fontSize="85%">
          Se você perdeu sua senha de e-mail, entre em contato
          com o seu provedor de e-mail (
          <TextButton
            linkColor="modal"
            href="https://support.microsoft.com/pt-br/office/alterar-sua-senha-no-outlook-com-2138d690-811c-4545-b2f3-e4dbe80c9735"
            cta="Windows Live Hotmail/Outlook"
            target="_blank"
            rel="noreferrer"
            sx={{ fontSize: '100%' }}
          />
          ,{' '}
          <TextButton
            linkColor="modal"
            href="https://support.google.com/accounts/answer/7682439?hl=pt-BR"
            target="_blank"
            rel="noreferrer"
            cta="Gmail"
            sx={{ fontSize: '100%' }}
          />
          ,{' '}
          <TextButton
            target="_blank"
            rel="noreferrer"
            linkColor="modal"
            href="https://br.ajuda.yahoo.com/kb/SLN27051.html"
            cta="Yahoo Mail"
            sx={{ fontSize: '100%' }}
          />
          ) para saber como redefinir a sua senha. Entretanto,
          caso você não consiga recupera-la através de seu
          provedor, nós não podemos dar-lhe acesso à Plataforma
          de Treinos e para continuar a utilizar nossos serviços
          você terá que{' '}
          <TextButton
            linkColor="modalLinkInt"
            href="/cadastrar"
            cta="criar uma nova conta"
            sx={{ fontSize: '100%' }}
          />
          {'.'}
        </Text>
        <Text paragraph fontSize="85%">
          O motivo desse triste acontecimento é que não podemos
          confirmar sua identidade e consequentemente, não
          podemos afirmar se você é ou não o verdadeiro(a)
          dono(a) da conta em questão.
        </Text>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: 'backgroundModalBar.main',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid container>
          <PolicyIcon
            sx={{
              marginTop: '-2px',
              marginRight: '1%',
              color: 'modalVersionIcon.main',
            }}
          />
          <Text
            sx={{
              color: 'cookieConsentTitle.main',
              float: 'left',
            }}
            fontSize="85%"
          >
            Versão: 0.0.0
          </Text>
        </Grid>
        <Button
          color="buttonModal"
          variant="outlined"
          onClick={() => props.setOpen(false)}
          endIcon={<DoneIcon sx={{ marginTop: '-2px' }} />}
        >
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
