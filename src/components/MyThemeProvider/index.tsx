import { createMuiTheme } from 'src/styles/themes/index';
import { ThemeProvider } from '@mui/material/styles';
import useSettings from 'src/lib/hooks/useSettings';

function MyThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { settings } = useSettings();
  const theme = createMuiTheme({ theme: settings.theme });

  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  );
}

export default MyThemeProvider;
