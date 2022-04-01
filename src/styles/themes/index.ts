import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

const colors = {
  light: {
    purple: '#423768',
    gray: '#000b',
    grayLighter: '#00000033',
    white: '#f8f8f2',
    red: '#c93939',
    pink: '#ff4db3',
    darkPink: '#cd5f9e',
    green: '#26bd4c',
    greenLighter: '#00ff80',
    yellow: '#f1fa8c',
  },
  dark: {
    purple: '#cba7ff',
    gray: '#44475a',
    grayLighter: '#f8f8f266',
    white: '#f8f8f2',
    red: '#ff5555',
    pink: '#ff79c6',
    green: '#50fa7b',
    blueDarker: '#282a36',
    blueMedium: '#2a2f4a',
    blue: '#6272a4',
    yellow: '#f1fa8c',
    orange: '#ffb86c',
  },
};
const getDesignTokens = (mode: any) => ({
  // {{{ Light Palette
  ...(mode === 'light'
    ? {
        palette: {
          mode: mode,
          background: {
            default: colors.light.purple + '20',
            paper: colors.light.white,
          },
          backgroundBrowserbar: {
            main: colors.light.purple,
          },
          backgroundSnackbar: {
            main: colors.light.purple + 'f6',
          },
          backgroundSettingsBox: {
            main: colors.light.purple,
          },
          headerTitle: {
            main: colors.light.purple,
          },
          headerIcons: {
            main: colors.light.purple,
          },
          primary: {
            main: colors.light.purple,
          },
          success: {
            main: colors.light.green,
          },
          title: {
            main: colors.light.purple,
          },
          backgroundModalBar: {
            main: colors.light.purple,
          },
          backgroundModalBody: {
            main: colors.light.white,
          },
          cookieConsentTitle: {
            main: colors.light.white,
          },
          text: {
            primary: colors.light.gray,
          },
          error: {
            main: colors.light.red,
            contrastText: colors.light.white,
          },
          appbar: {
            main: colors.light.white,
          },
          textSnackbar: {
            main: colors.light.white,
          },
          dividerSnackbar: {
            main: colors.light.white + '66',
          },
          borderModal: {
            main: colors.light.purple + '44',
          },
          textSettingsBox: {
            main: colors.light.white,
          },
          modalTitle: {
            main: colors.light.white,
          },
          modalVersion: {
            main: colors.light.white,
          },
          buttonSnackbarOk: {
            main: colors.light.greenLighter,
            contrastText: colors.light.purple,
          },
          buttonSnackbarCancel: {
            main: colors.light.yellow,
            contrastText: colors.light.yellow,
          },
          sendButton: {
            main: colors.light.green,
            contrastText: colors.light.white,
          },
          buttonModal: {
            main: colors.light.greenLighter,
          },
          mainIcon: {
            main: colors.light.darkPink,
          },
          disabled: {
            main: colors.light.grayLighter,
          },
        },
        components: {
          MuiFormLabel: {
            styleOverrides: {
              asterisk: {
                color: colors.light.pink,
                '&$error': {
                  color: colors.light.red,
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
          MuiButton: {
            styleOverrides: {
              outlined: {
                border: '0.10rem solid',
                '&:hover': {
                  border: '0.10rem solid',
                },
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                scrollbarWidth: 'thin',
                scrollbarColor: `${colors.light.purple}90 ${colors.light.gray}30`,
              },
              '*::-webkit-scrollbar': {
                width: '4px',
              },
              '*::-webkit-scrollbar-track': {
                background: colors.light.purple + '30',
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: colors.light.purple + 'aa',
                border: `3px solid ${colors.light.purple}aa`,
              },
            },
          },
        },
      }
    : //}}} Light Pallet
      //{{{ Dark Pallet
      {
        palette: {
          mode: mode,
          background: {
            default: colors.dark.gray,
            paper: colors.dark.blueDarker,
          },
          backgroundBrowserbar: {
            main: colors.dark.blueDarker,
          },
          backgroundSnackbar: {
            main: colors.dark.blueMedium + 'f6',
          },
          backgroundSettingsBox: {
            main: colors.dark.blueMedium,
          },
          textSnackbar: {
            main: colors.dark.white,
          },
          dividerSnackbar: {
            main: colors.light.white + '22',
          },
          borderModal: {
            main: colors.light.white + '22',
          },
          textSettingsBox: {
            main: colors.dark.white,
          },
          buttonSnackbarOk: {
            main: colors.dark.green,
          },
          buttonSnackbarCancel: {
            main: colors.dark.yellow,
          },
          buttonSettingsBoxOk: {
            main: colors.dark.green,
          },
          buttonSettingsBoxCancel: {
            main: colors.dark.yellow,
          },
          sendButton: {
            main: colors.dark.green,
            contrastText: colors.dark.blueDarker,
          },
          primary: {
            main: colors.dark.purple,
            contrastText: colors.dark.blueDarker,
          },
          success: {
            main: colors.dark.green,
          },
          headerTitle: {
            main: colors.dark.purple,
          },
          headerIcons: {
            main: colors.dark.purple,
          },
          appbar: {
            main: colors.dark.blueDarker,
          },
          backgroundModalBar: {
            main: colors.dark.blueMedium,
          },
          backgroundModalBody: {
            main: colors.dark.blueMedium,
          },
          headerText: {
            main: colors.dark.white,
          },
          mainIcon: {
            main: colors.dark.pink,
          },
          warning: {
            main: colors.dark.orange,
          },
          error: {
            main: colors.dark.red,
            contrastText: colors.dark.white,
          },
          title: {
            main: colors.dark.purple,
          },
          cookieConsentTitle: {
            main: colors.dark.purple,
          },
          cookieConsentVersion: {
            main: colors.dark.purple,
          },
          modalTitle: {
            main: colors.dark.purple,
          },
          modalVersion: {
            main: colors.dark.purple,
          },
          buttonModal: {
            main: colors.dark.green,
          },
          disabled: {
            main: colors.dark.grayLighter,
          },
        },
        components: {
          MuiFormLabel: {
            styleOverrides: {
              asterisk: {
                color: colors.dark.pink,
                '&$error': {
                  color: colors.dark.red,
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
          MuiButton: {
            styleOverrides: {
              outlined: {
                border: '0.10rem solid',
                '&:hover': {
                  border: '0.10rem solid',
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
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                scrollbarWidth: 'thin',
                scrollbarColor: `${colors.dark.blue}60 ${colors.light.gray}30`,
              },
              '*::-webkit-scrollbar': {
                width: '4px',
              },
              '*::-webkit-scrollbar-track': {
                background: colors.dark.blue + '30',
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: colors.dark.blue + '60',
                border: `3px solid ${colors.dark.blue}60`,
              },
            },
          },
        },
      }),
});
// }}}Dark Pallet

//Update custon colors in pallete
declare module '@mui/material/styles' {
  interface Palette {
    backgroundBrowserbar: Palette['primary'];
    backgroundSnackbar: Palette['primary'];
    backgroundSettingsBox: Palette['primary'];
    textSnackbar: Palette['primary'];
    sendButton: Palette['primary'];
    appbar: Palette['primary'];
    headerIcons: Palette['primary'];
    buttonSnackbarOk: Palette['primary'];
    buttonSettingsBoxOk: Palette['primary'];
    buttonSettingsBoxOkCancel: Palette['primary'];
    buttonSnackbarCancel: Palette['primary'];
    buttonModal: Palette['primary'];
  }
}

// Update the Button's color prop options that is present in
// Pallete
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    headerIcons: true;
    buttonSnackbarOk: true;
    buttonSnackbarCancel: true;
    buttonSettingsBoxCancel: true;
    sendButton: true;
    buttonModal: true;
  }
}

// Update the IconsButton's color prop options
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    headerIcons: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    appbar: true;
  }
}
export const createMuiTheme = (config: any = {}) => {
  const themeOptions = getDesignTokens(config.theme);

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createMuiTheme;
