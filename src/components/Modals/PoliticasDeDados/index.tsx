import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/Modals/index';
import type { Dispatch, SetStateAction } from 'react';
import Text from 'src/components/Text/index';

export default function PoliticasDeDadosModal(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <BootstrapDialog
      onClose={() => props.setOpen(false)}
      aria-labelledby="termos-pre-user"
      open={props.isOpen}
    >
      <BootstrapDialogTitle
        id="termos-pre-user"
        color="primary"
        sx={{
          fontFamily: 'Carter One',
          backgroundColor: 'backgroundModalBar.main',
          color: 'modalTitle.main',
        }}
      >
        Politicas de Dados da Plataforma de Treinos
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Text
          gutterBottom
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          Última atualização: 27/03/2020
        </Text>
        <Text paragraph>
          Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Text>
        <Text paragraph>
          Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor.
        </Text>
        <Text paragraph>
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
        <Text
          sx={{
            color: 'modalVersion.main',
          }}
        >
          Versão: 0.0.0/Dev
        </Text>
        <Button
          color="buttonModal"
          variant="outlined"
          onClick={() => props.setOpen(false)}
        >
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
