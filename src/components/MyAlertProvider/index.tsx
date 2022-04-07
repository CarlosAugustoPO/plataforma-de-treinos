import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import { useAppSelector } from 'src/lib/hooks/useRedux';
import { selectAlert } from 'src/reducers/alert/index';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//reducers
import { putAlert } from 'src/reducers/alert/index';
import Slide, { SlideProps } from '@mui/material/Slide';
type TransitionProps = Omit<SlideProps, 'direction'>;
import useMediaQuery from '@mui/material/useMediaQuery';

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}
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
  children: React.ReactNode;
}) {
  const alert = useAppSelector(selectAlert);
  const dispatch = useAppDispatch();

  const lowerThan600 = useMediaQuery('(max-width:600px)');

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      putAlert({
        content: {
          severity: alert.content?.severity as string,
          message: alert.content?.message as string,
          duration: 0,
          show: false,
        },
      }),
    );
  };

  return (
    <>
      <Snackbar
        open={alert.content?.show}
        autoHideDuration={alert.content?.duration || 5000}
        disableWindowBlurListener={true}
        onClose={handleClose}
        TransitionComponent={
          lowerThan600 ? TransitionUp : TransitionLeft
        }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: `${lowerThan600 ? 'center' : 'right'}`,
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.content?.severity as any}
          sx={{
            wordBreak: 'break-word',
          }}
        >
          {alert.content?.message}
        </Alert>
      </Snackbar>
      <>{props.children}</>
    </>
  );
}
