import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { Dispatch, SetStateAction } from 'react';

export default function LastNameField(props: {
  errors: any;
  clearErrors: (lastName: 'lastName') => void;
  register: any;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  lastFieldError: string;
}) {
  return (
    <Grid
      item
      xs={12}
      sx={{ width: '95%', m: '0% 2.5% 0 2.5%' }}
    >
      {/* email text field */}
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Sobrenome"
          variant="standard"
          error={props.errors ? true : false}
          onKeyDown={() => {
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setLastFieldError('');
          }}
          {...props.register('lastName', {
            required: true,
            minLength: 2,
            maxLength: 80,
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
            O campo sobrenome é obrigatório
          </Text>
        )}
        {props.errors === 'minLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu sobrenome com no mínimo 2 letras
          </Text>
        )}
        {props.errors === 'maxLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu sobrenome com no máximo 80 letras
          </Text>
        )}
        {props.errors === 'pattern' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu sobrenome apenas com letras
          </Text>
        )}
      </Grid>{' '}
    </Grid>
  );
}
