import { createMuiTheme } from 'src/styles/themes/index';
import { ThemeProvider } from '@mui/material/styles';
import useSettings from 'src/lib/hooks/useSettings';

type Props = {
  children?: React.ReactNode;
};

function MyThemeProvider({ children }: Props) {
  const { settings } = useSettings();
  const theme = createMuiTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
