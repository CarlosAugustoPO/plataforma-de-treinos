import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import { useAppSelector } from 'src/lib/hooks/useRedux';
import { selectAlert } from 'src/reducers/alert/index';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//reducers
import { putAlert } from 'src/reducers/alert/index';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  TransitionUp,
  TransitionLeft,
} from 'src/components/Transitions/index';
// const TransitionUp = forwardRef<HTMLDivElement, TransitionProps>(
//   function TransitionLeft(props, ref) {
//     return <Slide {...props} ref={ref} direction="up" />;
//   },
// );
//
// const TransitionLeft = forwardRef<
//   HTMLDivElement,
//   TransitionProps
// >(function TransitionLeft(props, ref) {
//   return <Slide {...props} ref={ref} direction="left" />;
// });

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
            maxWidth: `${lowerThan600 ? '100%' : '90%'}`,
          }}
        >
          {alert.content?.message}
        </Alert>
      </Snackbar>
      <>{props.children}</>
    </>
  );
}
