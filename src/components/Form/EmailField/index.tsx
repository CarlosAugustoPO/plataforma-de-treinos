import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import type { Dispatch, SetStateAction } from 'react';

export default function EmailField(props: {
  errors: string;
  lastFieldError: string;
  fieldLabel?: string;
  clearErrors: (email: 'email') => void;
  register: (email: 'email', validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  sx?: {};
}) {
  return (
    <Grid
      item
      xs={12}
      sx={{ width: '95%', m: '0% 2.5% 0% 2.5%' }}
    >
      {/* email text field */}
      <TextField
        required
        fullWidth
        id="email"
        error={
          props.errors || props.lastFieldError ? true : false
        }
        label={props.fieldLabel || 'E-mail'}
        variant="standard"
        autoComplete="email"
        onKeyUp={(e) => changeWhiteSpace(e)}
        onKeyDown={(e) => {
          preventWhiteSpace(e);
          props.setLastFieldError('');
        }}
        onClick={() => {
          props.setLastFieldError('');
        }}
        autoFocus={false}
        sx={{ ...props.sx }}
        inputProps={{
          style: {
            textTransform: 'lowercase',
          },
        }}
        {...props.register('email', {
          required: true,
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
        })}
      />
      {props.errors === 'required' && (
        <Text
          color="error"
          variant="subtitle2"
          align="left"
          fontSize="80%"
        >
          O campo e-mail é obrigatório
        </Text>
      )}
      {props.errors === 'pattern' && (
        <Text
          color="error"
          align="left"
          variant="subtitle2"
          fontSize="80%"
        >
          Preencha com um e-mail válido
        </Text>
      )}
    </Grid>
  );
}
