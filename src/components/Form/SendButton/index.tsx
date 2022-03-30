import Button, { ButtonProps } from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Grid';

type NewOptions = {
  cta: string;
};

type ButtonPropsWhitOptions = ButtonProps & NewOptions;

export default function SendButton({
  onClick = undefined,
  cta = 'Enviar',
  ...props
}: ButtonPropsWhitOptions) {
  return (
    <Grid item xs={12}>
      {/* send button*/}
      <Button
        variant="outlined"
        type="submit"
        color="sendButton"
        onClick={onClick}
        {...props}
        endIcon={
          <CreateIcon
            sx={{
              marginTop: '-5px',
            }}
          />
        }
      >
        {cta}
      </Button>
    </Grid>
  );
}
