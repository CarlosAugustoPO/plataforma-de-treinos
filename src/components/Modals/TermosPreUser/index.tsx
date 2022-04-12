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
      aria-labelledby="termos-pre-user"
      TransitionComponent={TransitionDown}
      open={props.isOpen}
    >
      <BootstrapDialogTitle
        id="termos-pre-user"
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
          Termos de uso do pré usuário da Plataforma de Treinos
        </Title>
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{ backgroundColor: 'backgroundModalBody.main' }}
      >
        <Text
          gutterBottom
          color="primary"
          sx={{ fontWeight: 600 }}
          fontSize="85%"
        >
          Última atualização: 27/03/2020
        </Text>
        <Text paragraph fontSize="85%">
          Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Text>
        <Text paragraph fontSize="85%">
          Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor.
        </Text>
        <Text paragraph fontSize="85%">
          Aenean lacinia bibendum nulla sed consectetur. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur
          et. Donec sed odio dui. Donec ullamcorper nulla non
          metus auctor fringilla.
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
