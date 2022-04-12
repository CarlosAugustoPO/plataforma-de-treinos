import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_LOCALE,
  APP_TYPE,
} from 'src/lib/utils/constants';

type Robots = {
  robots?: 'noindex' | 'nofollow' | 'none' | 'all';
};

export default function MyHead(props: {
  title?: string;
  description?: string;
  robots?: 'noindex' | 'nofollow' | 'none' | 'all';
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogLocale?: string;
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();

  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
      ? 'http://'
      : 'https://';
  const publicUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  const urlComplement = router.pathname;
  const thisUrl = `${protocol + publicUrl + urlComplement}`;

  const theme = useTheme();

  let title = (props.title as string) || APP_NAME;
  let description =
    (props.description as string) || APP_DESCRIPTION;
  const robots = (props.robots as Robots) || 'none';
  const canonicalUrl = (props.canonicalUrl as string) || thisUrl;
  const ogTitle = (props.ogTitle as string) || title;
  const ogDescription =
    (props.ogDescription as string) || description;
  const ogType = (props.ogType as string) || APP_TYPE;
  const ogUrl = (props.ogUrl as string) || thisUrl;
  const ogImage =
    (props.ogImage as string) ||
    `${protocol + publicUrl}/banner.png`;
  const ogImageAlt =
    (props.ogImageAlt as string) || `Banner do APP ${APP_NAME}`;
  const ogLocale = (props.ogLocale as string) || APP_LOCALE;
  const children = props.children;

  title == 'replaceThis' ? (title = APP_NAME) : (title = title);
  description == 'replaceThis'
    ? (description = APP_DESCRIPTION)
    : (description = description);

  if (typeof window !== 'undefined') {
    if (theme.palette.mode == 'dark') {
      document.documentElement.dataset.theme = 'dark';
    }
    if (theme.palette.mode == 'light') {
      document.documentElement.dataset.theme = 'light';
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="desc"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          key="viewport"
        />
        <meta
          name="robots"
          content={robots as string}
          key="robots"
        />
        <link
          rel="canonical"
          href={canonicalUrl}
          key="canonical"
        />
        <meta
          property="og:title"
          content={ogTitle}
          key="ogTitle"
        />
        <meta
          property="og:description"
          content={ogDescription}
          key="ogDescription"
        />
        <meta property="og:type" content={ogType} key="ogType" />
        <meta property="og:url" content={ogUrl} key="ogUrl" />
        <meta
          property="og:image"
          content={ogImage}
          key="ogImage"
        />
        <meta
          property="og:image:alt"
          content={ogImageAlt}
          key="ogImageAlt"
        />
        <meta
          property="og:locale"
          content={ogLocale}
          key="ogLocale"
        />
        <meta
          name="theme-color"
          content={theme.palette.backgroundBrowserbar.main}
          key="themeColor"
        />
      </Head>
      <div>{children}</div>
    </>
  );
}
