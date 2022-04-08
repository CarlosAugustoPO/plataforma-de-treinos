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

export default function PoliticasDeDadosModal(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <BootstrapDialog
      onClose={() => props.setOpen(false)}
      aria-labelledby="politicas-de-dados"
      TransitionComponent={TransitionDown}
      open={props.isOpen}
    >
      <BootstrapDialogTitle
        id="politicas-de-dados"
        sx={{
          fontFamily: 'Carter One',
          backgroundColor: 'backgroundModalBar.main',
          color: 'modalTitle.main',
        }}
      >
        Politicas de Dados da Plataforma de Treinos
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
