import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Grid';

type NewOptions = {
  enviar?: string;
  enviando?: string;
  submitting?: boolean;
};

type ButtonPropsWhitOptions = ButtonProps & NewOptions;

export default function SendButton({
  onClick = undefined,
  enviar = 'Enviar',
  enviando = 'Enviando',
  submitting = false,
  ...props
}: ButtonPropsWhitOptions) {
  return (
    <Grid item xs={12}>
      {/* send button*/}
      <Button
        disabled={submitting}
        variant="outlined"
        type="submit"
        color="sendButton"
        onClick={onClick}
        {...props}
        endIcon={
          !submitting ? (
            <CreateIcon
              sx={{
                marginTop: '-5px',
              }}
            />
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
    </Grid>
  );
}
