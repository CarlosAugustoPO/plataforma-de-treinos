import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import type { Dispatch, SetStateAction } from 'react';

export default function EmailField(props: {
  variant?: any;
  label?: string;
  placeholder?: string;
  id?: string;
  mt?: string;
  mb?: string;
  width?: string;
  required?: boolean;
  autoFocus?: boolean;
  onChange?: boolean;
  errors: any;
  lastFieldError: string;
  fieldLabel?: string;
  clearErrors: (registerEmail: string) => void;
  register: (registerEmail: string, validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  sx?: {};
}) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: `${props.width ?? '95%'}`,
        m: `${props.mt ?? '0%'} 2.5% ${props.mb ?? '0%'} 2.5%`,
      }}
    >
      {/* email text field */}
      <TextField
        fullWidth
        required={props.required ?? true}
        id={props.id ?? 'email'}
        placeholder={props.placeholder ?? 'Insira seu e-mail'}
        error={
          props.errors || props.lastFieldError ? true : false
        }
        label={props.fieldLabel || props.label || 'E-mail'}
        variant={props.variant ?? 'standard'}
        autoComplete="email"
        onKeyUp={(e) => changeWhiteSpace(e)}
        onKeyDown={(e) => {
          preventWhiteSpace(e);
          props.setLastFieldError('');
        }}
        onClick={() => {
          props.setLastFieldError('');
        }}
        autoFocus={props.autoFocus ?? false}
        sx={{ ...props.sx }}
        inputProps={{
          style: {
            textTransform: 'lowercase',
          },
        }}
        {...props.register(props.id ?? 'email', {
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
          O campo {props.label?.toLowerCase()} é obrigatório
        </Text>
      )}
      {props.errors === 'pattern' && (
        <Text
          color="error"
          align="left"
          variant="subtitle2"
          fontSize="80%"
        >
          Preencha com um {props.label?.toLowerCase()} válido
        </Text>
      )}
    </Grid>
  );
}
