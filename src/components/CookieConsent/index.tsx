import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Text from 'src/components/Text/index';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';

export default function CookieConsent() {
  const theme = useTheme();
  const [cookieConsent, setCookieConsent] = useState('block');
  const [
    politicasDeCookiesModal,
    setModalPolitcasDeCookiesOpen,
  ] = useState(false);

  const closeAndAcceptCookieConsent = () => {
    setCookieConsent('none');
    window.localStorage.setItem('cookies-consent', 'true');
  };

  useEffect(() => {
    const storedCookieConsent = window.localStorage.getItem(
      'cookies-consent',
    );
    if (storedCookieConsent == 'true') {
      // setCookieConsent('none');
    }
  }, []);

  return (
    <div>
      <div
        style={{
          zIndex: '999',
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
        Utilizamos cookies para salvar suas preferências nesse
        site, para saber mais você pode consultar nossa{' '}
        <Text
          sx={{
            cursor: 'pointer',
          }}
          color={theme.palette.linkSnackbar.main}
          fontSize="100%"
          onClick={() => setModalPolitcasDeCookiesOpen(true)}
          variant="caption"
        >
          <a>Política de Cookies</a>
        </Text>{' '}
        e personalizar suas opções. Ao continuar navegando você
        concorda com essas condições.
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
          Políticas de Cookies e de Armazenamento Local da
          Plataforma de Treinos
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Text gutterBottom color="primary">
            Última atualização: 12/03/2020
          </Text>
          <Text gutterBottom mt={2}>
            Para que a Plataforma de Treinos funcione de forma
            amigável, eficiente e segura utilizamos algumas
            tecnologias para armazenar suas informações
            preferenciais e de identificação. As tecnologias
            escolhidas para cumprir essas funções em nosso site
            são os cookies e os espaços de armazenamento local.{' '}
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Abaixo explicamos como e por que utilizamos cada uma
            dessas tecnologias, porém, você pode entrar em
            contato conosco através do e-mail:{' '}
            <a href="mailto:primary@plataformadetreinos.com.br">
              privacidade@plataformadetreinos.com.br
            </a>{' '}
            com qualquer questão adicional.
          </Text>
          <Text
            gutterBottom
            color="primary"
            fontSize="120%"
            mt={3}
          >
            O que são os cookies, tags e os itens de
            armazenamento local?
          </Text>
          <Text gutterBottom>
            Cookies e itens de armazenamento local são pequenos
            arquivos de texto que ficam salvos no seu próprio
            dispositivo. Esses arquivos armazenam informações
            sobre o seu comportamento e preferências nos sites
            que você visita para que possam ser relembradas e com
            isso melhorar sua experiência de uso. Além desses,
            outras tecnologias similares como as tags, também são
            úteis para nos ajudar nas estratégias de marketing e
            contribuir para que a Plataforma de Treinos tenha
            recursos mais relevantes e otimizados para você.
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
            O nosso site faz uso de cookies próprios, ou seja,
            definidos por nós e cookies de terceiros, que são
            definidos por outras empresas que prestam seus
            serviços para nós. Dentre os cookies utilizados,
            alguns deles são estritamente necessários e sem o seu
            funcionamento adequado, podem comprometer o
            funcionamento desse site.
          </Text>
          <Text gutterBottom>
            Já outras categorias de cookies, apesar de não serem
            essenciais, nos ajudam a melhorar a Plataforma para
            você. É importante saber que essas tecnologias
            coletam informações pessoais, assim como informações
            não identificáveis e atividades suspeitas.
          </Text>
          <Text
            gutterBottom
            color="primary"
            fontSize="120%"
            mt={3}
          >
            Cookies necessários
          </Text>
          <Text gutterBottom>
            Os cookies necessários são responsáveis por funções
            fundamentais para o nosso site, como a segurança e a
            autenticação. Você pode desabilitar esses cookies
            através das configurações de seu navegador,
            entretanto, como as atividades desses cookies são
            fundamentais, isso pode levar a problemas de uso
            funcional nesse site. Esses cookies devem ser
            carregados pelo nosso interesse legítimo em lhe
            oferecer o melhor produto.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Cookies de configurações
          </Text>
          <Text gutterBottom>
            Os cookies de Configurações ajudam a lembrar suas
            preferências quando você interage com a nossa
            interface de usuário. Por exemplo, quando você faz a
            sua escolha por um tema em nosso aplicativo, salvamos
            esse dado em seu armazenamento local. Isso permite
            que possamos mostrar o seu tema preferido da próxima
            vez que você entrar sem que seja necessária uma nova
            escolha.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Cookies de desempenho e de análise
          </Text>
          <Text gutterBottom>
            Os cookies de desempenho e análise nos oferecem
            métricas sobre as visitas na página, as páginas mais
            acessadas, frequência de acessos, duração dos
            acessos, de onde vem esses acessos e outros dados
            semelhantes que nos ajudam a ter mais acertividade na
            hora de melhorar uma página.
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
            No geral os cookies são uma tecnologia que ganham
            cada vez mais espaço na web moderna. O site{' '}
            <a
              href="https://www.allaboutcookies.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.allaboutcookies.org/
            </a>{' '}
            oferece diversas informações úteis sobre cookies e
            como bloquear cookies indesejáveis pelo seu
            navegador. Caso você necessite de uma orientação
            específica para um navegador específico, você pode
            procurar na documentação do seu próprio navegador.
            Entretanto, lembre-se que ao restringir o acesso aos
            cookies essenciais algumas funcionalidades podem
            ficar indisponíveis.
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Como cookies de análise utilizamos o Google Analytics
            para coletar as métricas, caso queira saber mais de
            sua politica de privacidade acesse:{' '}
            <a
              href="https://policies.google.com/privacy?hl=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              https://policies.google.com/privacy
            </a>{' '}
            caso queira desabilitar essa opção você pode baixar
            um pluggin próprio do Google:{' '}
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
            Alterações dessa política de cookies
          </Text>
          <Text gutterBottom>
            A nosso critério, essa política de cookies pode ser
            atualizada periodicamente. Nesse caso, publicaremos a
            nova política e as novas alterações entrarão em vigor
            a partir de sua publicação. Recomenda-se que você
            revise a política frequentemente para saber de
            quaisquer alteração. O fornecimento de informações a
            nós após a publicação de uma política de cookies
            atualizada estarão sujeitos às estas alterações. Se
            você continuar a usar a Plataforma, será considerado
            que você aceitou a alteração e concorda com esses
            termos.
          </Text>
          <Text
            gutterBottom
            color="primary"
            mt={3}
            fontSize="120%"
          >
            Informações de contato
          </Text>
          <Text gutterBottom sx={{ wordBreak: 'break-all' }}>
            Se você tiver alguma dúvida a ser esclarecida a cerca
            dessa política de cookies, entre em contato com:{' '}
            <a href="mailto:privacidade@plataformadetreinos.com.br">
              privacidade@plataformadetreinos.com.br
            </a>
          </Text>
          <Text gutterBottom color="primary" mt={3}>
            Última atualização: 12/03/2020
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
    </div>
  );
}
