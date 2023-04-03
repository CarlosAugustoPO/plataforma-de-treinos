import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';
import Text from 'src/components/Text/index';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import changeWhiteSpace from 'src/lib/utils/changeWhiteSpace';
import preventWhiteSpace from 'src/lib/utils/preventWhiteSpace';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export default function PasswordField(props: {
  errors: any;
  lastFieldError: string;
  wrongPasswordError?: string;
  clearErrors: (password: 'password') => void;
  register: (password: 'password', validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
  setWrongPasswordError?: Dispatch<
    SetStateAction<string | undefined>
  >;
  sx?: {};
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword(!showPassword);
  const handleMouseDownPassword = () =>
    setShowPassword(!showPassword);

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
        id="password"
        error={
          props.wrongPasswordError ||
          props.errors ||
          props.lastFieldError
            ? true
            : false
        }
        label="Senha"
        variant="standard"
        type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
        autoComplete="password"
        onKeyUp={(e) => changeWhiteSpace(e)}
        onKeyDown={(e) => {
          preventWhiteSpace(e);
          props.setLastFieldError('');
          props.setWrongPasswordError
            ? props.setWrongPasswordError('')
            : null;
        }}
        onClick={() => {
          props.setLastFieldError('');
          props.setWrongPasswordError
            ? props.setWrongPasswordError('')
            : null;
        }}
        autoFocus={false}
        sx={{ ...props.sx }}
        InputProps={{
          // <-- This is where the toggle button is added.
          // defaultValue: '111111',
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
          minLength: 6,
          maxLength: 15,
        })}
      />
      {props.errors === 'required' && (
        <Text
          color="error"
          variant="subtitle2"
          align="left"
          fontSize="80%"
        >
          O campo senha é obrigatório
        </Text>
      )}
      {props.errors === 'maxLength' && (
        <Text
          color="error"
          align="left"
          variant="subtitle2"
          fontSize="80%"
        >
          A senha deve ter no máximo 15 caracteres
        </Text>
      )}
      {props.errors === 'minLength' && (
        <Text
          color="error"
          align="left"
          variant="subtitle2"
          fontSize="80%"
        >
          A senha deve ter no mínimo 6 caracteres
        </Text>
      )}
    </Grid>
  );
}
