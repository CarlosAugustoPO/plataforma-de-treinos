import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import useDebounce from 'src/lib/utils/debounce/index';

export default function EmailFieldWithConfirm(props: {
  emailErrors: any;
  confirmEmailErrors: any;
  emailExistsError: undefined | string;
  clearErrors: (registerName: string) => void;
  register: any;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  lastFieldError: string;
  label1?: string;
  label2?: string;
  getValues: any;
  setEmailExistsError: Dispatch<
    SetStateAction<string | undefined>
  >;
  sx?: {};
  variant?: any;
  placeholder1?: string;
  placeholder2?: string;
  id1?: string;
  id2?: string;
  mt?: string;
  mb?: string;
  width?: string;
  required?: boolean;
  autoFocus?: boolean;
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
          id={props.id1 ?? 'email'}
          label={props.label1 || 'E-mail'}
          placeholder={props.placeholder1 ?? 'Insira seu email'}
          variant={props.variant ?? 'standard'}
          error={
            props.emailErrors ||
            props.emailExistsError ||
            props.confirmEmailErrors === 'validate'
              ? true
              : false
          }
          autoComplete="email"
          onInput={() => {
            // debouncedClearErrors('email');
            props.confirmEmailErrors === 'validate'
              ? debouncedClearErrors(props.id2 ?? 'confirmEmail')
              : '';
          }}
          onKeyUp={(e) => changeWhiteSpace(e)}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setEmailExistsError('');
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setLastFieldError('');
            props.setEmailExistsError('');
          }}
          sx={{ ...props.sx }}
          inputProps={{
            style: {
              textTransform: 'lowercase',
            },
          }}
          {...props.register(props.id1 ?? 'email', {
            required: props.required ?? true,
            validate: (value: string) => {
              const confirmEmail = props.getValues(
                props.id2 ?? 'confirmEmail',
              );
              return (
                confirmEmail?.trim().toLowerCase() ===
                value?.trim().toLowerCase()
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
      <Grid
        item
        xs={12}
        sx={{
          width: `${props.width ?? '95%'}`,
          m: `${props.mt ?? '0%'} 2.5% ${props.mb ?? '0%'} 2.5%`,
        }}
      >
        {' '}
        {/* email text field */}
        <TextField
          required={props.required ?? true}
          fullWidth
          id={props.id2 ?? 'confirmEmail'}
          autoComplete="off"
          error={
            props.confirmEmailErrors ||
            errorEmailPaste ||
            props.emailExistsError ||
            props.emailErrors === 'validate'
              ? true
              : false
          }
          label={props.label2 || 'Confirme seu e-mail'}
          placeholder={props.placeholder2 ?? 'Insira seu email'}
          onPaste={preventEmailPaste}
          variant={props.variant ?? 'standard'}
          onInput={() => {
            // debouncedClearErrors('confirmEmail');
            props.emailErrors === 'validate'
              ? debouncedClearErrors(props.id1 ?? 'email')
              : '';
          }}
          onKeyUp={(e) => changeWhiteSpace(e)}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setEmailExistsError('');
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setEmailExistsError('');
            props.setLastFieldError('');
            setErrorEmailPaste(false);
          }}
          autoFocus={false}
          sx={{ ...props.sx }}
          inputProps={{
            style: {
              textTransform: 'lowercase',
            },
          }}
          {...props.register(props.id2 ?? 'confirmEmail', {
            required: props.required ?? true,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
            validate: (value: string) => {
              const email = props.getValues(
                props.id1 ?? 'email',
              );
              return (
                email?.trim().toLowerCase() ===
                value?.trim().toLowerCase()
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
