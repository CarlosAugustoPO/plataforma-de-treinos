import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';
import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import useDebounce from 'src/lib/utils/debounce/index';

export default function PassWordFieldWithConfirm(props: {
  passwordErrors: string;
  confirmPasswordErrors: string;
  clearErrors: (id: string) => void;
  register: (id: string, validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  lastFieldError: string;
  getValues: any;
  sx?: {};
  fieldLabelPassword?: string;
  fieldLabelConfirmPassword?: string;
}) {
  const debouncedClearErrors = useDebounce(
    props.clearErrors,
    1000,
  );

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorPasswordPaste, setErrorPasswordPaste] =
    useState(false);
  const preventPasswordPaste = (e: any) => {
    e.preventDefault();
    setErrorPasswordPaste(true);
  };
  const handleClickShowPassword = () =>
    setShowPassword(!showPassword);
  const handleMouseDownPassword = () =>
    setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{ width: '95%', m: '0% 2.5% 0% 2.5%' }}
      >
        {' '}
        {/* email text field */}
        <TextField
          required
          fullWidth
          id="password"
          error={
            props.passwordErrors ||
            props.confirmPasswordErrors === 'validate'
              ? true
              : false
          }
          label={
            props.fieldLabelPassword
              ? props.fieldLabelPassword
              : 'Senha'
          }
          type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
          variant="standard"
          autoComplete="password"
          onKeyUp={(e) => changeWhiteSpace(e)}
          onInput={() => {
            props.confirmPasswordErrors === 'validate'
              ? debouncedClearErrors('confirmPassword')
              : '';
          }}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.setLastFieldError('');
          }}
          autoFocus={false}
          sx={{ ...props.sx }}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props.register('password', {
            required: true,
            validate: (value: string) => {
              const { confirmPassword } = props.getValues();
              return (
                confirmPassword.trim().toLowerCase() ===
                value.trim().toLowerCase()
              );
            },
            minLength: 6,
            maxLength: 15,
          })}
        />
        {props.passwordErrors === 'required' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            O campo senha é obrigatório
          </Text>
        )}
        {props.passwordErrors === 'minLength' && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            A senha deve ter no mínimo 6 caracteres
          </Text>
        )}
        {props.passwordErrors === 'maxLength' && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            A senha deve ter no máximo 15 caracteres
          </Text>
        )}
        {(props.passwordErrors === 'validate' ||
          props.confirmPasswordErrors === 'validate') && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            Os campos de senha e confirmar senha devem ser iguais
          </Text>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ width: '95%', m: '0% 2.5% 0% 2.5%' }}
      >
        {' '}
        {/* email text field */}
        <TextField
          required
          fullWidth
          id="confirmPassword"
          autoComplete="off"
          error={
            props.confirmPasswordErrors ||
            errorPasswordPaste ||
            props.passwordErrors === 'validate'
              ? true
              : false
          }
          label={
            props.fieldLabelConfirmPassword
              ? props.fieldLabelConfirmPassword
              : 'Confirme sua senha'
          }
          type={showConfirmPassword ? 'text' : 'password'} // <-- This is where the magic happens
          onPaste={preventPasswordPaste}
          variant="standard"
          onInput={() => {
            props.passwordErrors === 'validate'
              ? debouncedClearErrors('password')
              : '';
          }}
          onKeyUp={(e) => changeWhiteSpace(e)}
          onKeyDown={(e) => {
            preventWhiteSpace(e);
            props.setLastFieldError('');
          }}
          onClick={() => {
            props.confirmPasswordErrors === 'validate'
              ? ''
              : props.clearErrors('confirmPassword');
            props.setLastFieldError('');
          }}
          autoFocus={false}
          sx={{ ...props.sx }}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props.register('confirmPassword', {
            required: true,
            validate: (value: string) => {
              const { password } = props.getValues();
              return (
                password.trim().toLowerCase() ===
                value.trim().toLowerCase()
              );
            },
            minLength: 6,
            maxLength: 15,
          })}
        />
        {errorPasswordPaste && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            Por favor, para confirmar sua senha digite ao invés
            de colar
          </Text>
        )}
        {props.confirmPasswordErrors === 'required' && (
          <Text
            color="error"
            variant="subtitle2"
            align="left"
            fontSize="80%"
          >
            O campo confirmar senha é obrigatório
          </Text>
        )}
        {props.confirmPasswordErrors === 'minLength' && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            A senha deve ter no mínimo 6 caracteres
          </Text>
        )}
        {props.confirmPasswordErrors === 'maxLength' && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            A senha deve ter no máximo 15 caracteres
          </Text>
        )}
        {(props.passwordErrors === 'validate' ||
          props.confirmPasswordErrors === 'validate') && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            Os campos de senha e confirmar senha devem ser iguais
          </Text>
        )}
      </Grid>
    </>
  );
}
