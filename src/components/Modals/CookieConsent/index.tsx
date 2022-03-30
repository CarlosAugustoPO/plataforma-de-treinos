import EssentialsCookies from 'src/components/cookiesinuse/Essentials/index';
import OwnerCookies from 'src/components/cookiesinuse/Owner/index';
import AnalyticsCookies from 'src/components/cookiesinuse/Analytics/index';
import TextButton from 'src/components/TextButton/index';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from 'src/components/vendor/mui/Modal/index';
import type { Dispatch, SetStateAction } from 'react';
import Text from 'src/components/Text/index';
import Title from 'src/components/Title/index';
import { COOKIE_CONSENT_VERSION } from 'src/lib/utils/constants/index';

export default function CookieConsentModal(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openSettings: (value: string) => void;
}): JSX.Element {
  function closeThisAndOpenSettings() {
    props.setOpen(false);
    props.openSettings('block');
  }
  return (
    <BootstrapDialog
      onClose={() => props.setOpen(false)}
      aria-labelledby="politicas-de-cookies"
      open={props.isOpen}
    >
      <BootstrapDialogTitle
        id="politicas-de-cookies"
        sx={{
          fontFamily: 'Carter One',
          backgroundColor: 'backgroundModalBar.main',
          color: 'cookieConsentTitle.main',
          fontSize: '85%',
        }}
      >
        Políticas de Cookies e de Armazenamento Local da
        Plataforma de Treinos
      </BootstrapDialogTitle>
      <DialogContent
        dividers
        sx={{ backgroundColor: 'backgroundModalBody.main' }}
      >
        <Text
          gutterBottom
          color="primary"
          sx={{ fontWeight: 600 }}
          fontSize="85%"
        >
          Última atualização: 12/03/2020
        </Text>
        <Text paragraph fontSize="85%">
          Para que a Plataforma de Treinos funcione de forma
          amigável, eficiente e segura utilizamos algumas
          tecnologias para armazenar suas informações
          preferenciais e de identificação. As tecnologias
          escolhidas para cumprir essas funções em nosso site são
          os cookies e os espaços de armazenamento local.{' '}
        </Text>
        <Text
          paragraph
          sx={{ wordBreak: 'break-word' }}
          fontSize="85%"
        >
          Abaixo explicamos como e por que utilizamos cada uma
          dessas tecnologias, porém, você pode entrar em contato
          conosco através do e-mail:{' '}
          <TextButton
            linkColor="modal"
            href="mailto:privacidade@plataformadetreinos.com.br"
            cta="privacidade@plataformadetreinos.com.br"
            sx={{ fontSize: '100%' }}
          />{' '}
          com qualquer questão adicional.
        </Text>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          O que são os cookies, tags e os itens de armazenamento
          local?
        </Title>
        <Text paragraph fontSize="85%">
          Cookies e itens de armazenamento local são pequenos
          arquivos de texto que ficam salvos no seu próprio
          dispositivo. Esses arquivos armazenam informações sobre
          o seu comportamento e preferências nos sites que você
          visita para que possam ser relembradas e com isso
          melhorar sua experiência de uso. Além desses, outras
          tecnologias similares como as tags, também são úteis
          para nos ajudar nas estratégias de marketing e
          contribuir para que a Plataforma de Treinos tenha
          recursos mais relevantes e otimizados para você.
        </Text>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Como e por que utilizamos os cookies?
        </Title>
        <Text paragraph fontSize="85%">
          O nosso site faz uso de cookies próprios, ou seja,
          definidos por nós e cookies de terceiros, que são
          definidos por outras empresas que prestam seus serviços
          para nós. Dentre os cookies utilizados, alguns deles
          são estritamente necessários e sem o seu funcionamento
          adequado, podem comprometer o funcionamento desse site.
        </Text>
        <Text paragraph fontSize="85%">
          Já outras categorias de cookies, apesar de não serem
          essenciais, nos ajudam a melhorar a Plataforma para
          você. É importante saber que essas tecnologias coletam
          informações pessoais, assim como informações não
          identificáveis e atividades suspeitas.
        </Text>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Cookies essenciais
        </Title>
        <Text paragraph fontSize="85%">
          Os cookies essenciais são responsáveis por funções
          fundamentais para o nosso site, como a segurança e a
          autenticação. Apesar de não recomendado, você pode
          desabilitar esses cookies através das configurações de
          seu navegador, entretanto, como as atividades desses
          cookies são fundamentais, isso pode levar a problemas
          de uso funcional nesse site. Esses cookies devem ser
          carregados pelo nosso interesse legítimo em lhe
          oferecer o melhor produto. Veja abaixo os cookies
          essenciais em uso.
        </Text>
        <div style={{ border: '1px solid', marginBottom: '4%' }}>
          <EssentialsCookies />
        </div>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Cookies de configurações
        </Title>
        <Text paragraph fontSize="85%">
          Os cookies de Configurações ajudam a lembrar suas
          preferências quando você interage com a nossa interface
          de usuário. Por exemplo, quando você faz a sua escolha
          por um tema em nosso aplicativo, salvamos esse dado em
          seu armazenamento local. Isso permite que possamos
          mostrar o seu tema preferido da próxima vez que você
          entrar sem que seja necessária uma nova escolha. Sem
          esses cookies habilitados, todas as escolhas opcionais
          devem ser feitas a cada nova visita. Você pode ver a
          lista dos cookies de configurações na tabela abaixo.
        </Text>
        <div style={{ border: '1px solid', marginBottom: '4%' }}>
          <OwnerCookies />
        </div>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Cookies de desempenho e de análise
        </Title>
        <Text paragraph fontSize="85%">
          Os cookies de desempenho e análise nos oferecem
          métricas sobre as visitas na página, as páginas mais
          acessadas, frequência de acessos, duração dos acessos,
          de onde vem esses acessos e outros dados semelhantes
          que nos ajudam a ter mais acertividade na hora de
          melhorar uma página e nossa estratégia de marketing. Os
          cookies que utilizamos para esse fim estarão listados
          na próxima tabela.
        </Text>
        <div style={{ border: '1px solid', marginBottom: '4%' }}>
          <AnalyticsCookies />
        </div>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Saiba mais sobre cookies
        </Title>
        <Text
          paragraph
          sx={{ wordBreak: 'break-word' }}
          fontSize="85%"
        >
          No geral os cookies são uma tecnologia que ganham cada
          vez mais espaço na web moderna. O site{' '}
          <TextButton
            linkColor="modal"
            cta="All about cookies"
            href="https://www.allaboutcookies.org/"
            target="_blank"
            rel="noreferrer"
            sx={{ fontSize: '100%' }}
          />{' '}
          oferece diversas informações úteis sobre cookies e como
          bloquear cookies indesejáveis pelo seu navegador. Caso
          você necessite de uma orientação específica para um
          navegador específico, você pode procurar na
          documentação do seu próprio navegador. Entretanto,
          lembre-se que ao restringir o acesso aos cookies
          essenciais algumas funcionalidades podem ficar
          indisponíveis.
        </Text>
        <Text
          paragraph
          sx={{ wordBreak: 'break-word' }}
          fontSize="85%"
        >
          Como cookies de análise utilizamos o Google Analytics
          para coletar as métricas, caso queira saber mais de sua
          política de privacidade acesse{' '}
          <TextButton
            linkColor="modal"
            href="https://policies.google.com/privacy?hl=pt-BR"
            target="_blank"
            rel="noreferrer"
            cta="as políticas de privacidade do Google"
            sx={{ fontSize: '100%' }}
          />{' '}
          caso queira desabilitar essa opção você pode{' '}
          <TextButton
            linkColor="modal"
            href=" https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
            cta="baixar o pluggin próprio do Google"
            sx={{ fontSize: '100%' }}
          />
          .
        </Text>
        <Text paragraph fontSize="85%">
          Há também a opção de desabilitar os cookies diretamente
          pelo{' '}
          <TextButton
            linkColor="modal"
            onClick={closeThisAndOpenSettings}
            cta="assistente de configurações"
            sx={{ fontSize: '100%' }}
          />{' '}
          da Plataforma de Treinos. Lá você pode escolher quais
          tipos de cookies você quer aceitar ou restringir mas,
          lembre-se, desabilitar os cookies pode impactar
          negativamente a sua experiência de uso neste site.
        </Text>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Alterações dessa política de cookies
        </Title>
        <Text paragraph fontSize="85%">
          A nosso critério, essa política de cookies pode ser
          atualizada. Nesse caso, publicaremos a nova política e
          as novas alterações entrarão em vigor a partir de sua
          publicação. O fornecimento de informações a nós após a
          publicação de uma política de cookies atualizada
          estarão sujeitos às estas alterações. Ao fazer uma nova
          visita sob um novo termo de cookies você será avisado e
          seu concentimento será pedido novamente.
        </Text>
        <Title
          gutterBottom
          component="h3"
          variant="h6"
          fontSize="85%"
        >
          Informações de contato
        </Title>
        <Text
          paragraph
          sx={{ wordBreak: 'break-word' }}
          fontSize="85%"
        >
          Se você tiver alguma dúvida a ser esclarecida a cerca
          dessa política de cookies, entre em contato com:{' '}
          <TextButton
            linkColor="modal"
            href="mailto:privacidade@plataformadetreinos.com.br"
            cta="privacidade@plataformadetreinos.com.br"
            sx={{ fontSize: '100%' }}
          />
        </Text>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: 'backgroundModalBar.main',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Text
          sx={{
            color: 'cookieConsentTitle.main',
            float: 'left',
          }}
          fontSize="85%"
        >
          Versão: {COOKIE_CONSENT_VERSION}
        </Text>
        <Button
          color="buttonSnackbarOk"
          variant="outlined"
          onClick={() => props.setOpen(false)}
        >
          Ok
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
