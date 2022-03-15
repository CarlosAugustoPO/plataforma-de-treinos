import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

const getDesignTokens = (mode: any) => ({
  ...(mode === 'light'
    ? {
        palette: {
          mode: mode,
          background: {
            default: '#cbd0e1',
            paper: '#f8f8f2',
          },
          backgroundBrowserbar: {
            main: '#6272a4',
          },
          backgroundSnackbar: {
            main: '#6272a4EE',
          },
          textSnackbar: {
            main: '#f8f8f2',
          },
          linkSnackbar: {
            main: '#8be9fd',
          },
          buttonSnackbar: {
            main: '#f1fa8c',
          },
          headerTitle: {
            main: '#6272a4',
          },
          headerIcons: {
            main: '#6272a4',
          },
          headerText: {
            main: '#44475a',
          },
          primary: {
            main: '#6272a4',
          },
          title: {
            main: '#6272a4',
          },
          discretLink: {
            main: '#394a7d',
          },
          appbar: {
            main: '#f8f8f2',
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
          fakedreamWhite: {
            main: '#f8f8f2',
          },
          draculaForeground: {
            main: '#f8f8f2',
          },
          cookieConsentLinkDark: {
            main: '#90a2db',
          },
          fakedreamGreen: {
            main: '#66bb6a',
          },
          draculaGreen: {
            main: '#50fa7b',
          },
          draculaYellow: {
            main: '#f1fa8c',
          },
          draculaCyan: {
            main: '#8be9fd',
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
                  transitionProperty: 'background-color',
                },
              },
            },
          },
        },
      }
    : {
        palette: {
          mode: mode,
          background: {
            default: '#44475a',
            paper: '#282a36',
          },
          backgroundBrowserbar: {
            main: '#282a36',
          },
          backgroundSnackbar: {
            main: '#2a2f4aEE',
          },
          textSnackbar: {
            main: '#f8f8f2',
          },
          linkSnackbar: {
            main: '#90a2db',
          },
          buttonSnackbar: {
            main: '#50fa7b',
          },
          primary: {
            main: '#bd93f9',
            contrastText: '#282a36',
          },
          headerTitle: {
            main: '#bd93f9',
          },
          discretLink: {
            main: '#6272a4',
          },
          headerIcons: {
            main: '#bd93f9',
          },
          appbar: {
            main: '#282a36',
          },
          headerText: {
            main: '#f8f8f2',
          },
          error: {
            main: '#ff5555',
            contrastText: '#f8f8f2',
          },
          title: {
            main: '#bd93f9',
          },
          textAlert: {
            main: '#f8f8f2',
          },
          textPs: {
            main: '#6272a4',
            contrastText: '#f8f8f2',
          },
          bottomLinks: {
            main: '#ff79c6',
            contrastText: '#f8f8f2',
          },
          fakedreamGreen: {
            main: '#66bb6a',
          },
          draculaGreen: {
            main: '#50fa7b',
          },
          draculaYellow: {
            main: '#f1fa8c',
          },
          cookieConsentLinkDark: {
            main: '#90a2db',
          },
        },
        components: {
          MuiFormLabel: {
            styleOverrides: {
              asterisk: {
                color: '#ff79c6',
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
                  transitionProperty: 'background-color',
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.04),rgba(255, 255, 255, 0.04));',
              },
            },
          },
        },
      }),
});

//Update custon colors in pallete
declare module '@mui/material/styles' {
  interface Palette {
    backgroundBrowserbar: Palette['primary'];
    backgroundSnackbar: Palette['primary'];
    textSnackbar: Palette['primary'];
    linkSnackbar: Palette['primary'];
    buttonSnackbar: Palette['primary'];
    headerIcons: Palette['primary'];
    appbar: Palette['primary'];
  }
}

// Update the Button's color prop options that is present in
// Pallete
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    headerIcons: true;
    buttonSnackbar: true;
  }
}

// Update the IconsButton's color prop options
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    headerIcons: true;
  }
}

export const createMuiTheme = (config: any = {}) => {
  const themeOptions = getDesignTokens(config.theme);

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createMuiTheme;
