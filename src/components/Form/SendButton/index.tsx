import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';

type NewOptions = {
  enviar?: string;
  enviando?: string;
  submitting?: boolean;
  customIcon?:
    | 'change'
    | 'send'
    | 'login'
    | 'register'
    | 'verifyEmail';
};

type ButtonPropsWhitOptions = ButtonProps & NewOptions;

export default function SendButton({
  onClick = undefined,
  enviar = 'Enviar',
  enviando = 'Enviando',
  submitting = false,
  customIcon = 'register',
  color = 'sendButton',
  ...props
}: ButtonPropsWhitOptions) {
  function ChoosedSendIcon() {
    if (customIcon === 'register') {
      return (
        <CreateIcon
          sx={{
            marginTop: '-5px',
          }}
        />
      );
    }
    if (customIcon === 'verifyEmail') {
      return (
        <MarkEmailReadIcon
          sx={{
            marginTop: '-2px',
          }}
        />
      );
    }
    if (customIcon === 'change') {
      return (
        <PublishedWithChangesIcon
          sx={{
            marginTop: '-2px',
          }}
        />
      );
    }
    if (customIcon === 'send') {
      return (
        <SendIcon
          sx={{
            marginTop: '-2px',
          }}
        />
      );
    }
    if (customIcon === 'login') {
      return (
        <LoginIcon
          sx={{
            marginTop: '-2px',
          }}
        />
      );
    }
    return (
      <CreateIcon
        sx={{
          marginTop: '-5px',
        }}
      />
    );
  }
  return (
    <Button
      disabled={submitting}
      variant="outlined"
      type="submit"
      color={color}
      onClick={onClick}
      {...props}
      endIcon={
        !submitting ? (
          <ChoosedSendIcon />
        ) : (
          <CircularProgress
            size={16}
            sx={{ color: 'disabled.main' }}
          />
        )
      }
    >
      {submitting ? enviando : enviar}
    </Button>
  );
}
