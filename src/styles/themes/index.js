import { createTheme } from '@mui/material/styles';

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#394a7d',
    },
    title: {
      main: '#394a7d',
    },
    textAlert: {
      main: '#444',
      contrastText: '#f8f8f2',
    },
    textPs: {
      main: '#394a7d',
      contrastText: '#f8f8f2',
    },
    bottomLinks: {
      main: '#ff4db3',
      contrastText: '#f8f8f2',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#ff4db3',
          '&$error': {
            color: '#ff5555',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
  },
});

export default light;
