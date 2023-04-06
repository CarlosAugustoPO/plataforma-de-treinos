import Image from 'next/image';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useRouter } from 'next/router';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Avatar from '@mui/material/Avatar';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AdjustIcon from '@mui/icons-material/Adjust';
import SupportIcon from '@mui/icons-material/Support';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Caption from 'src/components/Caption/index';
import AngleDivisor from 'src/components/AngleDivisor/index';
//My components
import Title from 'src/components/Title/index';
import Text from 'src/components/Text/index';
//Mui Components
import Typography from '@mui/material/Typography';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import FotoAntesEDepoisGuto from 'src/components/FotoAntesEDepoisGuto/index';
import AFSellerBanner from 'src/components/AFSellerBanner/index';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {
  AccordionProps,
} from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.css';

//Hooks

const githubAvatarUrl =
  'https://avatars.githubusercontent.com/CarlosAugustoPO';
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: 'auto',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(
  (props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
      }
      {...props}
    />
  ),
)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? `${theme.palette.background.default}`
      : `${theme.palette.background.default}`,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: theme.palette.background.paper,
  }),
);

export default function IndexUnauthTemplate() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [expanded, setExpanded] = React.useState<string | false>(
    false,
  );
  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const router = useRouter();
  return (
    <Box
      className="container"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Box
        className="heroBanner"
        data-aos="fade-down"
        data-aos-once="true"
        sx={{
          height: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20px',
            right: '-110px',
            opacity: '0.15',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <Image
            data-aos="fade-left"
            data-aos-once="true"
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={400}
            height={400}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Box className="bannerIcons">
          <FitnessCenterIcon
            color="info"
            sx={{ color: 'mainIcon.main', fontSize: 60 }}
          />
          <DirectionsRunIcon
            color="warning"
            sx={{ fontSize: 60 }}
          />
          <TimelineIcon color="success" sx={{ fontSize: 60 }} />
        </Box>
        <Box
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          <Title paragraph data-aos="fade-right">
            Agende Agora sua Avaliação Física Presencial
          </Title>
          <Text
            align="justify"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Olá, eu sou o Treinador Carlos Augusto e gostaria de
            convidar você para uma avaliação física presencial na
            unidade 3 da Bluefit em Santos/SP.
          </Text>
          <Text
            align="justify"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Sou graduado em Educação Física, possuo diversos
            cursos de especialização e já atuo há mais de 10 anos
            na área. Com toda a experiência adquirida nesse
            percurso, posso te ajudar a alcançar seus objetivos
            de forma segura e eficaz.
          </Text>
        </Box>{' '}
        <div
          data-aos="fade-right"
          style={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <Avatar
            alt="Minha Foto de Perfil"
            src={githubAvatarUrl}
            style={{ marginRight: '5px' }}
            sx={{ width: 56, height: 56 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <Text variant="body1">Prof. Me. Carlos Augusto</Text>
            <Text variant="caption" sx={{ marginTop: '-5px' }}>
              CREF: 099.681-G/SP
            </Text>
          </div>
        </div>
        <Button
          sx={{
            width: '300px',
            margin: '10px auto',
          }}
          variant="outlined"
          color="success"
          endIcon={
            <EventAvailableIcon sx={{ marginTop: '-2px' }} />
          }
          onClick={() => {
            router.push(
              '/avaliacao-fisica/presencial/treinador-carlos-augusto/agendar',
            );
          }}
        >
          Agendar Agora
        </Button>
      </Box>

      <AngleDivisor
        color="background.default"
        data-aos="zoom-out-down"
        data-aos-duration="500"
        data-aos-offset="35"
        id="about1"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>
      <Box
        className="about"
        id="about2"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Title
          id="about3"
          mt={3}
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Potencialize Seus Resultados Com A Avaliação Física
        </Title>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
          sx={{ maxWidth: '960px', ml: 'auto', mr: 'auto' }}
        >
          A avaliação física é uma excelente ferramenta para
          monitorar e potencializar seus resultados na academia.
          Com ela, é possível obter um rastreamento preciso do
          seu progresso, feedback sobre seu desempenho,
          identificação de áreas de melhorias e adaptação da
          estratégia.
        </Text>
        <Title
          paragraph
          align="left"
          data-aos="fade-right"
          data-aos-once="true"
          fontSize="105%"
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Veja Alguns Benefícios de Utilizar a Avaliação Física
        </Title>
        <Box
          className={styles.gridServices}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          mb={3}
        >
          <Box
            data-aos="zoom-in"
            data-aos-once="true"
            sx={{
              backgroundColor: 'background.default',
            }}
            className={styles.cardStepByStep}
          >
            <InsertChartIcon
              color="success"
              sx={{
                position: 'absolute',
                transform: 'scale(5)',
                top: '50%',
                left: '20%',
                zIndex: '-1',
                opacity: '0.1',
              }}
            />
            <Title fontSize="100%">
              Rastreamento Preciso do seu Progresso
            </Title>
            <Text mt={2}>
              Acompanhe de forma detalhada as mudanças no seu
              corpo e no seu desempenho físico ao longo do tempo.
              Essas informações são essenciais para ajustar e
              aprimorar a sua rotina de treino, tornando-a mais
              eficiente e segura. Além disso, o rastreamento
              preciso do seu progresso também ajuda a manter a
              sua motivação em alta, pois você será capaz de
              visualizar o seu avanço e comprovar que o seu
              esforço está valendo a pena.
            </Text>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-once="true"
            sx={{ backgroundColor: 'background.default' }}
            className={styles.cardStepByStep}
          >
            <FeedbackIcon
              color="warning"
              sx={{
                position: 'absolute',
                transform: 'scale(5)',
                top: '50%',
                right: '20%',
                zIndex: '-1',
                opacity: '0.1',
              }}
            />
            <Title fontSize="100%">
              Feedback Sobre seu Desempenho
            </Title>
            <Text mt={2}>
              Após a avaliação, você receberá um relatório
              detalhado sobre o seu desempenho em diferentes
              áreas. Eu irei fornecer um feedback personalizado e
              orientá-lo sobre como melhorar o seu desempenho e
              alcançar seus objetivos de forma mais eficaz. Esse
              feedback é fundamental para corrigir erros na
              rotina e garantir que você esteja se fazendo sua
              preparação de forma segura e eficiente.
            </Text>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-once="true"
            sx={{ backgroundColor: 'background.default' }}
            className={styles.cardStepByStep}
          >
            <FitnessCenterIcon
              color="primary"
              sx={{
                position: 'absolute',
                transform: 'scale(5)',
                top: '50%',
                left: '20%',
                zIndex: '-1',
                opacity: '0.1',
              }}
            />
            <Title fontSize="100%">
              Identificação de Áreas de Melhorias
            </Title>
            <Text mt={2}>
              Eu irei avaliar diversos aspectos do seu corpo,
              como sua força, flexibilidade, resistência e
              composição corporal. Com base nessas informações,
              poderei identificar áreas específicas em que você
              precisa se concentrar para melhorar o seu
              desempenho e alcançar seus objetivos. Essa
              identificação de áreas de melhoria é fundamental
              para desenvolver um treinamento personalizado e
              eficaz, adaptado às suas necessidades específicas.
            </Text>
          </Box>{' '}
          <Box
            data-aos="zoom-in"
            data-aos-once="true"
            sx={{ backgroundColor: 'background.default' }}
            className={styles.cardStepByStep}
          >
            <AdjustIcon
              color="info"
              sx={{
                position: 'absolute',
                transform: 'scale(5)',
                top: '50%',
                right: '20%',
                zIndex: '-1',
                opacity: '0.1',
              }}
            />{' '}
            <Title fontSize="100%">
              Adaptação da Estratégia
            </Title>
            <Text mt={2}>
              Ao reunir informações precisas sobre o seu nível
              atual de condicionamento físico, suas áreas de
              força e fraqueza, bem como possíveis restrições ou
              limitações, você poderá ajustar seu programa de
              treinamento e receber recomendações específicas
              para ajudá-lo a atingir seus objetivos com mais
              eficácia. Além disso, a avaliação física regular
              permitirá que você veja os resultados do seu
              treinamento e adapte sua estratégia para continuar
              progredindo.
            </Text>{' '}
          </Box>{' '}
          <Box
            data-aos="zoom-in"
            data-aos-once="true"
            sx={{ backgroundColor: 'background.default' }}
            className={styles.cardStepByStep}
          >
            <SupportIcon
              color="info"
              sx={{
                position: 'absolute',
                transform: 'scale(5)',
                top: '50%',
                left: '20%',
                zIndex: '-1',
                opacity: '0.1',
              }}
            />{' '}
            <Title fontSize="100%">Suporte Profissional</Title>
            <Text mt={2}>
              O suporte profissional é essencial durante e após a
              avaliação física. Durante a avaliação irei guiá-lo
              em cada etapa do processo, explicando cada teste e
              ajudando-o a entender seus resultados. Após a
              avaliação, você terá acesso a um canal de suporte
              exclusivo onde poderá fazer perguntas e receber
              feedback contínuo sobre suas dúvidas. Ter acesso a
              um treinador experiente é uma grande vantagem, pois
              você pode contar com o suporte profissional
              necessário para obter resultados ainda melhores.
            </Text>{' '}
          </Box>{' '}
        </Box>
      </Box>
      <AngleDivisor
        data-aos="zoom-out-down"
        data-aos-duration="500"
        color="background.paper"
        bottom="0"
        data-aos-offset="35"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>

      <Box>
        <Box sx={{ padding: '5%' }}>
          <Title
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            BÔNUS EXCLUSIVO
          </Title>
          <Title
            mt={-2}
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Tenha um Treino Personalizado
          </Title>
          <Text
            mt={-2}
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
            color="mainIcon.main"
          >
            DURAÇÃO LIMITADA
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              maxWidth: '960px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Agende sua avaliação física agora e ganhe um bônus
            exclusivo: uma precrição de treinamento
            individualizado, com duração de 4 semanas, que se
            adapte às suas necessidades específicas.{' '}
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              maxWidth: '960px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Com base no resultado da avaliação e em uma conversa
            comigo, irei desenvolver um treino sob medida para
            você.
          </Text>
          <Button
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              width: '300px',
              margin: '10px auto',
            }}
            variant="outlined"
            color="success"
            endIcon={
              <ThumbUpAltIcon sx={{ marginTop: '-3px' }} />
            }
            onClick={() => {
              router.push(
                '/avaliacao-fisica/presencial/treinador-carlos-augusto/agendar',
              );
            }}
          >
            Aproveitar Oportunidade
          </Button>
        </Box>
      </Box>
      <AngleDivisor
        data-aos="zoom-out-down"
        data-aos-duration="500"
        color="background.default"
        data-aos-offset="35"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>

      <Box
        className="price"
        id="price"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '-120px',
              marginTop: '-50px',
              opacity: '0.15',
              pointerEvents: 'none',
              userSelect: 'none',
              overflow: 'hidden',
            }}
          >
            <Image
              data-aos="fade-right"
              data-aos-once="true"
              src="/logo-pdt-blue.png"
              alt="Logo da Plataforma de Treinos"
              width={300}
              height={300}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Box>{' '}
        <Box sx={{ padding: '5%' }}>
          <Title
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Local de Avaliação
          </Title>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              maxWidth: '960px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A avaliação física é realizada na unidade 3 da
            Bluefit em Santos/SP que fica no endereço Av. Alm.
            Cochrane, 187 - Embaré, Santos - SP, 11040-001 com
            horários disponíveis sob consulta.
          </Text>
        </Box>
      </Box>
      <AngleDivisor
        color="background.paper"
        bottom="0"
        data-aos="zoom-out-down"
        data-aos-duration="500"
        data-aos-offset="35"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>

      <Box
        sx={{
          padding: '5%',
        }}
      >
        <Title
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Sobre o Treinador Carlos Augusto
        </Title>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          O Treinador Carlos Augusto é graduado em Educação
          Física pela Universidade Santa Cecília, especialista em
          Treinamento Desportivo e em Treinamento Personalizado
          pela Universidade Santa Cecília, especialista em
          Condicionamento Físico Aplicado à Prevenção
          Cardiológica pela Faculdade de Medicina da USP e mestre
          em Ciências Interdisciplinar da Saúde pela UNIFESP, é o
          administrador e o Personal Trainer responsável pela
          Plataforma de Treinos e Professor de Musculação na
          Bluefit.
        </Text>
        <Box
          data-aos="zoom-in"
          data-aos-once="true"
          sx={{
            margin: 'auto',
          }}
        >
          <FotoAntesEDepoisGuto />
          <Box
            style={{
              marginTop: '-2%',
              marginBottom: '4%',
              lineHeight: '10px',
            }}
          >
            <Caption fontSize="70%">
              Legenda: Evolução do Treinador Carlos Augusto
              durante uma fase de definição.
            </Caption>
          </Box>
        </Box>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Com seu conhecimento baseado na literatura científica
          atual, o nosso treinador tem a missão de tornar o
          acesso aos benefícios dos exercícios físicos mais fácil
          e oferecer treinos simples e eficientes para o máximo
          de pessoas, garantindo resultados realmente
          surpreendentes.
        </Text>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Se você deseja alcançar suas metas de condicionamento
          físico de maneira rápida e eficiente, maque sua
          avaliação física comece a ver resultados de verdade!
        </Text>
      </Box>
      <AngleDivisor
        color="background.default"
        data-aos="zoom-out-down"
        data-aos-duration="500"
        data-aos-offset="35"
        id="about1"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>

      <Box
        className="price2"
        id="price2"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              right: '-120px',
              marginTop: '100px',
              opacity: '0.15',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <Image
              data-aos="fade-left"
              data-aos-once="true"
              src="/logo-pdt-blue.png"
              alt="Logo da Plataforma de Treinos"
              width={400}
              height={400}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Box>{' '}
        <AFSellerBanner />
      </Box>
      <AngleDivisor
        data-aos="zoom-out-down"
        data-aos-duration="500"
        color="background.paper"
        bottom="0"
        data-aos-offset="35"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>

      <Box
        data-aos="fade-right"
        data-aos-once="true"
        sx={{
          padding: '5% 5% 20px 5%',
          backgroundColor: 'background.default',
        }}
      >
        <Title paragraph>Perguntas e Respostas Frequentes</Title>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography textAlign="left">
              O que é uma avaliação física e por que ela é
              importante para o meu treinamento na academia?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: A avaliação física é uma ferramenta que ajuda a
              monitorar e potencializar seus resultados na
              academia, identificando áreas de melhoria e
              adaptando a estratégia para que você possa atingir
              seus objetivos de forma mais eficaz.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography textAlign="left">
              O que é incluído na avaliação física?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: A avaliação física varia de acordo com seu
              objetivo primário e pode incluir testes de força,
              flexibilidade, resistência e composição corporal,
              bem como uma análise detalhada do desempenho em
              diferentes áreas. Com base nessas informações, o
              treinador pode fornecer um feedback personalizado e
              orientá-lo sobre como melhorar seu desempenho.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography textAlign="left">
              Como a avaliação física pode ajudar a ajustar minha
              rotina de treino?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: A avaliação física fornece informações precisas
              sobre o seu progresso e desempenho, permitindo que
              você ajuste e aprimore sua rotina de treino para
              torná-la mais eficiente e segura. Além disso, o
              feedback do treinador ajuda a corrigir erros na
              rotina e garantir que você esteja se preparando de
              forma adequada.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography textAlign="left">
              Com que frequência devo fazer uma avaliação física?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: Isso depende dos seus objetivos e do seu nível
              atual de condicionamento físico. Em geral,
              recomenda-se fazer uma avaliação física no ínicio
              do programa de treinamento ou sempre que houver uma
              mudança significativa na sua rotina de treino.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography textAlign="left">
              O que é um treino personalizado e como ele pode me
              ajudar a atingir meus objetivos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: Um treino personalizado é desenvolvido com base
              nas informações coletadas durante a avaliação
              física e nas suas necessidades específicas. Ele é
              adaptado para ajudá-lo a alcançar seus objetivos de
              forma mais eficaz e segura, levando em consideração
              suas áreas de força e fraqueza.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography textAlign="left">
              Quanto tempo dura o programa de treinos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Os treinos são prescritos para 4 meses.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography textAlign="left">
              Quem pode se beneficiar de uma avaliação física e
              treinamento personalizado?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: Qualquer pessoa que queira melhorar sua saúde e
              condicionamento físico pode se beneficiar de uma
              avaliação física e treinamento personalizado. Isso
              inclui pessoas de todas as idades e níveis de
              condicionamento físico.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography textAlign="left">
              Como faço para agendar uma avaliação física?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              R: Você pode agendar uma avaliação física entrando
              no site de agendamento e agendando um horário
              disponível.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography textAlign="left">
              O Treinador Carlos tem vagas para aula de personal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              No momento, os horários para as aulas de personal
              estão todos ocupados. No entanto, pode haver vagas
              disponíveis se alguém desistir. Se você estiver
              interessado, entre em contato pelo e-mail
              prof.carlos.aug@gmail.com
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel10'}
          onChange={handleChange('panel10')}
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel17a-content"
            id="panel10a-header"
          >
            <Typography textAlign="left">
              Ainda tem dúvidas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Envie um e-mail para
              suporte@plataformadetreinos.com.br e nossa equipe
              ficará feliz em te ajudar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ marginTop: '20px' }}>
          <Button
            data-aos="fade-right"
            data-aos-once="true"
            sx={{
              width: '300px',
              margin: '10px auto',
            }}
            variant="outlined"
            color="success"
            endIcon={
              <SettingsAccessibilityIcon
                sx={{ marginTop: '-3px' }}
              />
            }
            onClick={() => {
              router.push(
                '/avaliacao-fisica/presencial/treinador-carlos-augusto/agendar',
              );
            }}
          >
            Quero me avaliar
          </Button>{' '}
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: 'clearLine.main',
        }}
      />
      <Box
        className="footer"
        sx={{ padding: '0 5%', mb: 4, mt: 4 }}
      >
        <Box mt="10px">
          <Text
            fontSize="70%"
            sx={{ color: 'clearComment.main' }}
          >
            Importante: A prática de atividade física envolve
            riscos para a saúde e segurança. Certifique-se de ler
            todas as orientações fornecidas e consultar seu
            médico antes de começar qualquer programa de
            avaliação física ou exercício físico. Siga as
            recomendações do seu avaliador físico e informe-o
            imediatamente se sentir algum desconforto ou dor
            durante a avaliação.
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="70%" sx={{ color: 'primary.main' }}>
            © 2023 Plataforma de Treinos.{' '}
          </Text>
          <Box>
            <Text
              fontSize="70%"
              sx={{ color: 'clearComment.main' }}
            >
              Todos os direito reservados.
            </Text>
          </Box>
        </Box>
        <Box mb="10px">
          <Text fontSize="70%" sx={{ color: 'success.main' }}>
            Design By:{' '}
            <Caption
              sx={{
                fontSize: '95%',
                color: 'clearComment.main',
              }}
            >
              Carlos Augusto
            </Caption>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
