import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { Dispatch, SetStateAction } from 'react';

export default function FirstNameField(props: {
  errors: string;
  lastFieldError: string;
  clearErrors: (firstName: 'firstName') => void;
  register: (firstName: 'firstName', validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
}) {
  return (
    <Grid item xs={12}>
      {/* email text field */}
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="firstName"
          label="Primeiro Nome"
          variant="standard"
          error={props.errors ? true : false}
          onKeyDown={() => {
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.clearErrors('firstName');
            props.setLastFieldError('');
          }}
          {...props.register('firstName', {
            required: true,
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
            O campo primeiro nome é obrigatório
          </Text>
        )}
        {props.errors === 'minLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu primeiro nome com no mínimo 2 letras
          </Text>
        )}
        {props.errors === 'maxLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu primeiro nome com no máximo 50 letras
          </Text>
        )}
        {props.errors === 'pattern' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu nome apenas com letras
          </Text>
        )}
      </Grid>{' '}
    </Grid>
  );
}
