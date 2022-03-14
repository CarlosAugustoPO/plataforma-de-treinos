import App, { AppContext } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/lib/vendor/mui/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { SessionProvider } from 'next-auth/react';
import { SettingsProvider } from 'src/lib/contexts/SettingsContext';
import MyThemeProvider from 'src/components/MyThemeProvider/index';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'src/styles/themes.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <SettingsProvider>
          <MyThemeProvider>
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
          </MyThemeProvider>
        </SettingsProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const req = appContext.ctx.req;
  const visitor = {
    remoteAdress: req?.connection.remoteAddress,
    host: req?.headers['host'],
    realIp: req?.headers['x-real-ip'],
    forwarded: req?.headers['x-forwarded-for'],
    forwardedVercel: req?.headers['x-vercel-forwarded-for'],
    deployUrl: req?.headers['x-vercel-deployment-url'],
    ipCountry: req?.headers['x-vercel-ip-country'],
    ipCountryRegion: req?.headers['x-vercel-ip-country-region'],
    vercelId: req?.headers['x-vercel-id'],
    ipCity: req?.headers['x-vercel-ip-city'],
  };
  console.log(visitor);
  return {
    pageProps: {
      ...appProps.pageProps,
    },
  };
};
