import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  color?: string;
  sx?: object;
  fontSize?: string;
  onClose?: () => void;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
}

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-container': {
    maxWidth: '100%',
    width: '640px',
    margin: 'auto',
    borderRadius: '15%',
  },
  '& .MuiDialog-paper': {
    borderRadius: '10px',
    maxWidth: '90%',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const BootstrapDialogTitle = (
  props: DialogTitleProps,
): JSX.Element => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};
