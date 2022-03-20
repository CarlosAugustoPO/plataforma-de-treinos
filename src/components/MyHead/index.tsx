import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_LOCALE,
  APP_TYPE,
} from 'src/lib/utils/constants';

type Props = {
  title?: string;
  description?: string;
  robots?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogLocale?: string;
  children?: React.ReactNode;
};

export default function Layout({
  title,
  description,
  robots,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogType,
  ogUrl,
  ogImage,
  ogImageAlt,
  ogLocale,
  children,
}: Props) {
  const router = useRouter();
  const publicUrl = process.env.NEXT_PUBLIC_URL;
  const urlComplement = router.pathname;
  const thisUrl = `${publicUrl + urlComplement}`;
  const theme = useTheme();

  title ? (title = title) : (title = APP_NAME);
  description
    ? (description = description)
    : (description = APP_DESCRIPTION);
  robots ? (robots = robots) : (robots = 'none');
  canonicalUrl
    ? (canonicalUrl = canonicalUrl)
    : (canonicalUrl = thisUrl);
  ogTitle ? (ogTitle = ogTitle) : (ogTitle = title);
  ogDescription
    ? (ogDescription = ogDescription)
    : (ogDescription = description);
  ogType ? (ogType = ogType) : (ogType = APP_TYPE);
  ogUrl ? (ogUrl = ogUrl) : (ogUrl = thisUrl);
  ogImage
    ? (ogImage = ogImage)
    : (ogImage = `${publicUrl}/banner.png`);
  ogImageAlt
    ? (ogImageAlt = ogImageAlt)
    : (ogImageAlt = `Banner do APP ${APP_NAME}`);
  ogLocale ? (ogLocale = ogLocale) : (ogLocale = APP_LOCALE);

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
        <meta name="robots" content={robots} key="robots" />
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
