import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/lib/vendor/mui/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { SessionProvider } from 'next-auth/react';
import { SettingsProvider } from 'src/lib/contexts/SettingsContext';
import MyThemeProvider from 'src/components/MyThemeProvider/index';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import CookieConsent from 'src/components/CookieConsent/index';
import MyHead from 'src/components/MyHead/index';
import MyHeader from 'src/components/MyHeader/index';
import LoadingBar from 'src/components/LoadingBar/index';
import 'src/styles/globals.css';
import 'src/styles/themes/variables.css';
import 'src/styles/nprogress.css';
import store from 'src/store/index';
import { Provider } from 'react-redux';

type AppPropsWithCache = AppProps & {
  Component: NextPage;
  emotionCache?: any;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: AppPropsWithCache) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
          <SettingsProvider>
            <MyThemeProvider>
              <CssBaseline enableColorScheme />
              <CookieConsent>
                <MyHead>
                  {/* MyHead as layout component*/}
                  <LoadingBar>
                    <MyHeader>
                      {/* Main as main wraper*/}
                      <Component {...pageProps} />
                    </MyHeader>
                  </LoadingBar>
                </MyHead>
              </CookieConsent>
            </MyThemeProvider>
          </SettingsProvider>
        </CacheProvider>
      </SessionProvider>
    </Provider>
  );
}
