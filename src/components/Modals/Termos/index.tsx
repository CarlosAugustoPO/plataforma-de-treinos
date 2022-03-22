import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';
import { useState } from 'react';
import Text from 'src/components/Text/index';
export default function Termos(state: { open: boolean }) {
  const [termosModal, setModalTermosOpen] = useState(state.open);
  return (
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
          Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros.
        </Text>
        <Text gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor.
        </Text>
        <Text gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur
          et. Donec sed odio dui. Donec ullamcorper nulla non
          metus auctor fringilla.
        </Text>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setModalTermosOpen(false)}>
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
