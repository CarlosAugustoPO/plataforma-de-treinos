import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { Dispatch, SetStateAction } from 'react';

export default function EmailField(props: {
  errors: string;
  clearErrors: (fullName: 'fullName') => void;
  register: (fullName: 'fullName', validation: {}) => void;
  setGeneralError: Dispatch<SetStateAction<string | undefined>>;
  setOkResult: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <Grid item xs={12}>
      {/* email text field */}
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="fullName"
          label="Nome"
          variant="standard"
          error={props.errors ? true : false}
          onKeyDown={() => {
            props.setGeneralError('');
            props.setOkResult('');
          }}
          onClick={() => {
            props.clearErrors('fullName');
            props.setGeneralError('');
            props.setOkResult('');
          }}
          {...props.register('fullName', {
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
            O campo nome é obrigatório
          </Text>
        )}
        {props.errors === 'minLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu nome com no mínimo 2 letras
          </Text>
        )}
        {props.errors === 'maxLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha seu nome com no máximo 80 letras
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
