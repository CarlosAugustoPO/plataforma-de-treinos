import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { Dispatch, SetStateAction } from 'react';

export default function RecoveryCodeField(props: {
  errors: string;
  clearErrors: (recoveryCode: 'recoveryCode') => void;
  register: (
    recoveryCode: 'recoveryCode',
    validation: {},
  ) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  lastFieldError: string;
  defaultValue?: string;
}) {
  return (
    <>
      {/* email text field */}
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="recoveryCode"
          label="Código de recuperação"
          variant="standard"
          error={
            props.errors || props.lastFieldError ? true : false
          }
          onKeyDown={() => {
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setLastFieldError('');
          }}
          inputProps={{
            defaultValue: props.defaultValue,
          }}
          {...props.register('recoveryCode', {
            required: true,
            pattern: /^[0-9]*$/gm,
            minLength: 5,
            maxLength: 5,
          })}
        />
        {props.errors === 'required' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            O campo código de recuperação é obrigatório
          </Text>
        )}
        {props.errors === 'pattern' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            O código de recuperação deve ter apenas números
          </Text>
        )}
        {props.errors === 'minLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha o código de recuperação com 5 dígitos
            (apenas números)
          </Text>
        )}
        {props.errors === 'maxLength' && (
          <Text
            color="error"
            fontSize="80%"
            align="left"
            variant="subtitle2"
          >
            Preencha o código de recuperação com 5 dígitos
            (apenas números)
          </Text>
        )}
      </Grid>
    </>
  );
}
