import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const DefaultConfirmationDialog = async (msg) => {
  const [modalUnsavedChangesOpen, setModalUnsavedChangesOpen] =
    useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleCancel = () => {
    setModalUnsavedChangesOpen(false);
    setConfirmed(false);
  };
  core;

  const handleClose = () => {
    setModalUnsavedChangesOpen(false);
  };

  useEffect(() => {
    if (modalUnsavedChangesOpen) {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = '';
      };
      window.addEventListener(
        'beforeunload',
        handleBeforeUnload,
      );

      return () => {
        window.removeEventListener(
          'beforeunload',
          handleBeforeUnload,
        );
      };
    }
  }, [modalUnsavedChangesOpen]);

  return new Promise((resolve) => {
    setModalUnsavedChangesOpen(true);

    const handleResolve = () => {
      resolve(confirmed);
      handleClose();
    };

    return (
      <Dialog
        open={modalUnsavedChangesOpen}
        onClose={handleClose}
      >
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          <p>{msg}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleResolve} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  });
};

export default DefaultConfirmationDialog;
