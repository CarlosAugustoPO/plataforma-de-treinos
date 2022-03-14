import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { THEMES } from 'src/lib/utils/constants';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      mode: 'light',
      background: {
        default: '#6272a470',
        paper: '#f8f8f2',
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
  },
  {
    name: THEMES.DARK,
    palette: {
      mode: 'dark',
      background: {
        default: '#44475a',
        paper: '#282a36',
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
  },
];

declare module '@mui/material/styles' {
  interface Palette {
    draculaYellow: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    draculaYellow?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    draculaYellow: true;
  }
}

export const createMuiTheme = (config: any = {}) => {
  let themeOptions = themesOptions.find(
    (theme) => theme.name === config.theme,
  );

  if (!themeOptions) {
    console.warn(
      new Error(`The theme ${config.theme} is not valid`),
    );
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  return theme;
};

export default createMuiTheme;
