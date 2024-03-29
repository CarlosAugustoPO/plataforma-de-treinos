import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { Dispatch, SetStateAction } from 'react';
import { ChangeEvent, FocusEvent } from 'react';

export default function FirstNameField(props: {
  errors: any;
  lastFieldError: string;
  variant?: any;
  label?: string;
  placeholder?: string;
  id?: string;
  mt?: string;
  mb?: string;
  width?: string;
  required?: boolean;
  autoFocus?: boolean;
  clearErrors: (registerName: string) => void;
  register: any;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
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
        required={props.required ?? true}
        autoFocus={props.autoFocus ?? false}
        fullWidth
        id={props.id ?? 'firstName'}
        label={props.label ?? 'Primeiro Nome'}
        placeholder={props.placeholder ?? 'Insira seu nome'}
        variant={props.variant ?? 'standard'}
        error={props.errors ? true : false}
        onKeyDown={() => {
          props.setLastFieldError('');
        }}
        onClick={() => {
          props.setLastFieldError('');
        }}
        onFocus={props.onFocus ?? undefined}
        onChange={props.onChange ?? undefined}
        {...props.register(props.id ?? 'firstName', {
          required: props.required ?? true,
          minLength: 2,
          maxLength: 50,
          pattern: /^[^0-9]*$/gm,
        })}
      />
      {props.errors === 'required' && (
        <Text
          color="error"
          fontSize="80%"
          align="left"
          variant="subtitle2"
        >
          O campo {props.label?.toLowerCase()} é obrigatório
        </Text>
      )}
      {props.errors === 'minLength' && (
        <Text
          color="error"
          fontSize="80%"
          align="left"
          variant="subtitle2"
        >
          Preencha o {props.label?.toLowerCase()} com no mínimo 2
          letras
        </Text>
      )}
      {props.errors === 'maxLength' && (
        <Text
          color="error"
          fontSize="80%"
          align="left"
          variant="subtitle2"
        >
          Preencha o {props.label?.toLowerCase()} com no máximo
          50 letras
        </Text>
      )}
      {props.errors === 'pattern' && (
        <Text
          color="error"
          fontSize="80%"
          align="left"
          variant="subtitle2"
        >
          Preencha o {props.label?.toLowerCase()} apenas com
          letras
        </Text>
      )}
    </Grid>
  );
}
