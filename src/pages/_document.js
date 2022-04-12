import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import {
  APP_CHARSET,
  APP_LOCALE,
} from 'src/lib/utils/constants';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'src/lib/vendor/mui/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={APP_LOCALE} id="root">
        <Head>
          {this.props.emotionStyleTags}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap"
            rel="stylesheet"
          />
          <meta charSet={APP_CHARSET} />
          <link rel="icon" href="/logo-pdt-blue.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(
    initialProps.html,
  );
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
