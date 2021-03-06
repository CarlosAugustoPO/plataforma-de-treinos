import Head from 'next/head';
import Text from 'src/components/Text/index';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';

import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_CHARSET,
  APP_LOCALE,
  APP_TYPE,
} from 'src/lib/utils/constants';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

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
  const [cookieConsent, setCookieConsent] = useState('block');
  const [
    politicasDeCookiesModal,
    setModalPolitcasDeCookiesOpen,
  ] = useState(false);

  const closeAndAcceptCookieConsent = () => {
    setCookieConsent('none');
    window.localStorage.setItem('cookies-consent', 'true');
  };

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

  const theme = useTheme();

  useEffect(() => {
    const storedCookieConsent = window.localStorage.getItem(
      'cookies-consent',
    );
    if (storedCookieConsent == 'true') {
      // setCookieConsent('none');
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet={APP_CHARSET} />
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
        <link rel="icon" href="/logo-pdt.png" />
        <meta
          name="theme-color"
          content={theme.palette.backgroundBrowserbar.main}
        />
      </Head>
      <div className={styles.Layout}>{children}</div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          padding: '2.5%',
          fontSize: '80%',
          width: '100%',
          backgroundColor: theme.palette.backgroundSnackbar.main,
          color: theme.palette.textSnackbar.main,
          textAlign: 'center',
          display: cookieConsent,
        }}
      >
        Utilizamos cookies para salvar suas prefer??ncias nesse
        site, para saber mais voc?? pode consultar nossa{' '}
        <Text
          sx={{
            cursor: 'pointer',
          }}
          color={theme.palette.linkSnackbar.main}
          fontSize="100%"
          onClick={() => setModalPolitcasDeCookiesOpen(true)}
          variant="caption"
        >
          <a>Pol??tica de Cookies</a>
        </Text>{' '}
        e personalizar suas op????es. Ao continuar navegando voc??
        concorda com essas condi????es.
        <div>
          <Button
            sx={{
              margin: '3%',
            }}
            color="buttonSnackbar"
            variant="outlined"
            size="small"
            onClick={closeAndAcceptCookieConsent}
          >
            Ok, entendi
          </Button>
        </div>
      </div>

      <BootstrapDialog
        onClose={() => setModalPolitcasDeCookiesOpen(false)}
        aria-labelledby="politicas-de-cookies"
        open={politicasDeCookiesModal}
      >
        <BootstrapDialogTitle
          id="politicas-de-cookies"
          color="primary"
          fontSize="120%"
        >
          Pol??ticas de Cookies e de Armazenamento Local da
          Plataforma de Treinos
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Text gutterBottom color="primary">
            ??ltima atualiza????o: 12/03/2020
          </Text>
          <Text gutterBottom mt={2}>
            Para que a Plataforma de Treinos funcione de forma
            amig??vel, eficiente e segura utilizamos algumas
            tecnologias para armazenar suas informa????es
            preferenciais e de identifica????o. As tecnologias
            escolhidas para cumprir essas fun????es em nosso site
            s??o os cookies e os espa??os de armazenamento local.{' '}
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Abaixo explicamos como e por que utilizamos cada uma
            dessas tecnologias, por??m, voc?? pode entrar em
            contato conosco atrav??s do e-mail:{' '}
            <a href="mailto:primary@plataformadetreinos.com.br">
              privacidade@plataformadetreinos.com.br
            </a>{' '}
            com qualquer quest??o adicional.
          </Text>
          <Text
            gutterBottom
            color="primary"
            fontSize="120%"
            mt={3}
          >
            O que s??o os cookies, tags e os itens de
            armazenamento local?
          </Text>
          <Text gutterBottom>
            Cookies e itens de armazenamento local s??o pequenos
            arquivos de texto que ficam salvos no seu pr??prio
            dispositivo. Esses arquivos armazenam informa????es
            sobre o seu comportamento e prefer??ncias nos sites
            que voc?? visita para que possam ser relembradas e com
            isso melhorar sua experi??ncia de uso. Al??m desses,
            outras tecnologias similares como as tags, tamb??m s??o
            ??teis para nos ajudar nas estrat??gias de marketing e
            contribuir para que a Plataforma de Treinos tenha
            recursos mais relevantes e otimizados para voc??.
          </Text>
          <Text
            gutterBottom
            color="primary"
            fontSize="120%"
            mt={3}
          >
            Como e por que utilizamos os cookies?
          </Text>
          <Text gutterBottom>
            O nosso site faz uso de cookies pr??prios, ou seja,
            definidos por n??s e cookies de terceiros, que s??o
            definidos por outras empresas que prestam seus
            servi??os para n??s. Dentre os cookies utilizados,
            alguns deles s??o estritamente necess??rios e sem o seu
            funcionamento adequado, podem comprometer o
            funcionamento desse site.
          </Text>
          <Text gutterBottom>
            J?? outras categorias de cookies, apesar de n??o serem
            essenciais, nos ajudam a melhorar a Plataforma para
            voc??. ?? importante saber que essas tecnologias
            coletam informa????es pessoais, assim como informa????es
            n??o identific??veis e atividades suspeitas.
          </Text>
          <Text
            gutterBottom
            color="primary"
            fontSize="120%"
            mt={3}
          >
            Cookies necess??rios
          </Text>
          <Text gutterBottom>
            Os cookies necess??rios s??o respons??veis por fun????es
            fundamentais para o nosso site, como a seguran??a e a
            autentica????o. Voc?? pode desabilitar esses cookies
            atrav??s das configura????es de seu navegador,
            entretanto, como as atividades desses cookies s??o
            fundamentais, isso pode levar a problemas de uso
            funcional nesse site. Esses cookies devem ser
            carregados pelo nosso interesse leg??timo em lhe
            oferecer o melhor produto.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Cookies de configura????es
          </Text>
          <Text gutterBottom>
            Os cookies de Configura????es ajudam a lembrar suas
            prefer??ncias quando voc?? interage com a nossa
            interface de usu??rio. Por exemplo, quando voc?? faz a
            sua escolha por um tema em nosso aplicativo, salvamos
            esse dado em seu armazenamento local. Isso permite
            que possamos mostrar o seu tema preferido da pr??xima
            vez que voc?? entrar sem que seja necess??ria uma nova
            escolha.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Cookies de desempenho e de an??lise
          </Text>
          <Text gutterBottom>
            Os cookies de desempenho e an??lise nos oferecem
            m??tricas sobre as visitas na p??gina, as p??ginas mais
            acessadas, frequ??ncia de acessos, dura????o dos
            acessos, de onde vem esses acessos e outros dados
            semelhantes que nos ajudam a ter mais acertividade na
            hora de melhorar uma p??gina.
          </Text>
          <Text
            mt={3}
            gutterBottom
            color="primary"
            fontSize="120%"
          >
            Saiba mais sobre cookies
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            No geral os cookies s??o uma tecnologia que ganham
            cada vez mais espa??o na web moderna. O site{' '}
            <a
              href="https://www.allaboutcookies.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.allaboutcookies.org/
            </a>{' '}
            oferece diversas informa????es ??teis sobre cookies e
            como bloquear cookies indesej??veis pelo seu
            navegador. Caso voc?? necessite de uma orienta????o
            espec??fica para um navegador espec??fico, voc?? pode
            procurar na documenta????o do seu pr??prio navegador.
            Entretanto, lembre-se que ao restringir o acesso aos
            cookies essenciais algumas funcionalidades podem
            ficar indispon??veis.
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Como cookies de an??lise utilizamos o Google Analytics
            para coletar as m??tricas, caso queira saber mais de
            sua politica de privacidade acesse:{' '}
            <a
              href="https://policies.google.com/privacy?hl=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              https://policies.google.com/privacy
            </a>{' '}
            caso queira desabilitar essa op????o voc?? pode baixar
            um pluggin pr??prio do Google:{' '}
            <a
              href=" https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </Text>
          <Text
            gutterBottom
            mt={3}
            color="primary"
            fontSize="120%"
          >
            Altera????es dessa pol??tica de cookies
          </Text>
          <Text gutterBottom>
            A nosso crit??rio, essa pol??tica de cookies pode ser
            atualizada periodicamente. Nesse caso, publicaremos a
            nova pol??tica e as novas altera????es entrar??o em vigor
            a partir de sua publica????o. Recomenda-se que voc??
            revise a pol??tica frequentemente para saber de
            quaisquer altera????o. O fornecimento de informa????es a
            n??s ap??s a publica????o de uma pol??tica de cookies
            atualizada estar??o sujeitos ??s estas altera????es. Se
            voc?? continuar a usar a Plataforma, ser?? considerado
            que voc?? aceitou a altera????o e concorda com esses
            termos.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Informa????es de contato
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Se voc?? tiver alguma d??vida a ser esclarecida a cerca
            dessa pol??tica de cookies, entre em contato com:{' '}
            <a href="mailto:privacidade@plataformadetreinos.com.br">
              privacidade@plataformadetreinos.com.br
            </a>
          </Text>
          <Text gutterBottom color="primary" mt={3}>
            ??ltima atualiza????o: 12/03/2020
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setModalPolitcasDeCookiesOpen(false)}
          >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
