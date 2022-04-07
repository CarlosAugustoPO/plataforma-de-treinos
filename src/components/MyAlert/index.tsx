import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        {...props}
      />
    );
  },
);

export default function MyAlert(props: {
  handleClose: any;
  message: string;
  severity: 'success' | 'error';
}) {
  return (
    <Snackbar
      open={props.message ? true : false}
      autoHideDuration={6000}
      onClose={props.handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '90%',
        margin: 'auto',
      }}
    >
      <Alert
        onClose={props.handleClose}
        severity={props.severity}
        sx={{
          width: '350px',
          maxWidth: '95%',
          wordBreak: 'break-word',
        }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
