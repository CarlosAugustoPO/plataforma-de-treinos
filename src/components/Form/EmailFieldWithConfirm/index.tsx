import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import useDebounce from 'src/lib/utils/debounce/index';

export default function EmailFieldWithConfirm(props: {
  emailErrors: string;
  confirmEmailErrors: string;
  emailExistsError: undefined | string;
  clearErrors: (id: string) => void;
  register: (id: string, validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  lastFieldError: string;
  fieldLabelEmail?: string;
  fieldLabelEmailConfirm?: string;
  getValues: any;
  setEmailExistsError: Dispatch<
    SetStateAction<string | undefined>
  >;
  sx?: {};
}) {
  const [errorEmailPaste, setErrorEmailPaste] = useState(false);
  const preventEmailPaste = (e: any) => {
    e.preventDefault();
    setErrorEmailPaste(true);
  };

  const debouncedClearErrors = useDebounce(
    props.clearErrors,
    1000,
  );

  return (
    <>
      <Grid item xs={12}>
        {/* email text field */}
        <TextField
          required
          fullWidth
          id="email"
          error={
            props.emailErrors ||
            props.emailExistsError ||
            props.confirmEmailErrors === 'validate'
              ? true
              : false
          }
          label={props.fieldLabelEmail || 'E-mail'}
          variant="standard"
          autoComplete="email"
          onInput={() => {
            // debouncedClearErrors('email');
            props.confirmEmailErrors === 'validate'
              ? debouncedClearErrors('confirmEmail')
              : '';
          }}
          onKeyUp={(e) => changeWhiteSpace(e)}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setLastFieldError('');
            props.setEmailExistsError('');
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
            validate: (value: string) => {
              const { confirmEmail } = props.getValues();
              return (
                confirmEmail.trim().toLowerCase() ===
                value.trim().toLowerCase()
              );
            },
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
          })}
        />
        {props.emailExistsError && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            {props.emailExistsError}
          </Text>
        )}
        {props.emailErrors === 'required' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            O campo e-mail é obrigatório
          </Text>
        )}
        {/*  {{{ se o email  é inválido */}
        {props.emailErrors === 'pattern' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Digite um e-mail válido
          </Text>
        )}
        {/*}}}*/}
        {/*  {{{ se os emails válidos são diferentes */}
        {(props.confirmEmailErrors === 'validate' ||
          props.emailErrors === 'validate') && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Os campos de e-mail e de confirmar e-mail devem ser
            iguais
          </Text>
        )}
        {/*}}}*/}
      </Grid>
      <Grid item xs={12}>
        {/* email text field */}
        <TextField
          required
          fullWidth
          id="confirmEmail"
          autoComplete="off"
          error={
            props.confirmEmailErrors ||
            errorEmailPaste ||
            props.emailExistsError ||
            props.emailErrors === 'validate'
              ? true
              : false
          }
          label={
            props.fieldLabelEmailConfirm || 'Confirme seu e-mail'
          }
          onPaste={preventEmailPaste}
          variant="standard"
          onInput={() => {
            // debouncedClearErrors('confirmEmail');
            props.emailErrors === 'validate'
              ? debouncedClearErrors('email')
              : '';
          }}
          onKeyUp={(e) => changeWhiteSpace(e)}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setEmailExistsError('');
            props.setLastFieldError('');
          }}
          autoFocus={false}
          sx={{ ...props.sx }}
          inputProps={{
            style: {
              textTransform: 'lowercase',
            },
          }}
          {...props.register('confirmEmail', {
            required: true,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
            validate: (value: string) => {
              const { email } = props.getValues();
              return (
                email.trim().toLowerCase() ===
                value.trim().toLowerCase()
              );
            },
          })}
        />
        {props.emailExistsError && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            {props.emailExistsError}
          </Text>
        )}
        {errorEmailPaste && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Por favor, para confirmar seu e-mail digite ao invés
            de colar
          </Text>
        )}
        {props.confirmEmailErrors === 'required' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            O campo confirmar e-mail é obrigatório
          </Text>
        )}
        {/*  {{{ se o confirmEmail é inválido */}
        {props.confirmEmailErrors === 'pattern' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Digite um e-mail válido
          </Text>
        )}
        {/*}}}*/}
        {/*  {{{ se os emails válidos são diferentes */}
        {(props.confirmEmailErrors === 'validate' ||
          props.emailErrors === 'validate') && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Os campos de e-mail e de confirmar e-mail devem ser
            iguais
          </Text>
        )}
        {/*}}}*/}
      </Grid>
    </>
  );
}
