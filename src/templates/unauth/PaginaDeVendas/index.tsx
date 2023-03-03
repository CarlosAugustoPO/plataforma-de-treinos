import Image from 'next/image';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import UpdateIcon from '@mui/icons-material/Update';
import FlagIcon from '@mui/icons-material/Flag';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmailIcon from '@mui/icons-material/Email';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TimerIcon from '@mui/icons-material/Timer';
import PaymentsIcon from '@mui/icons-material/Payments';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InsightsIcon from '@mui/icons-material/Insights';
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
import SellerBanner from 'src/components/SellerBanner/index';
import FotoGraficoDesempenho from 'src/components/FotoGraficoDesempenho/index';
import LogoPagSeguro from 'src/components/LogoPagSeguro/index';
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
import SwipeUpSharpIcon from '@mui/icons-material/SwipeUpSharp';
import styles from './styles.module.css';

//Hooks

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
          overflow: 'hidden',
        }}
      >
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
        <Title paragraph data-aos="fade-right">
          Treinos específicos e individualizados para praticantes
          de exercícios físicos, iniciantes ou avançados que
          querem, sem perder tempo, entrar em forma, melhorar a
          saúde e potencializar seus resultados.
        </Title>
        <Button
          sx={{
            width: '300px',
            margin: '10px auto',
          }}
          variant="outlined"
          color="success"
          endIcon={
            <SwipeUpSharpIcon sx={{ marginTop: '-2px' }} />
          }
          onClick={() => {
            document.getElementById('anchor1')?.scrollIntoView();
          }}
        >
          Saiba mais...
        </Button>
        <Box
          id="anchor1"
          sx={{
            position: 'absolute',
            bottom: '-30px',
            left: 0,
          }}
        />

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
          />
        </Box>
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
          Sobre a Plataforma de Treinos
        </Title>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          A Plataforma de Treinos é a escolha certa para você que
          está cansado de tentar soluções milagrosas que não
          trazem resultados e quer ver resultados duradouros.
        </Text>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Oferecemos exercícios físicos individualizados para
          cada pessoa, levando em conta suas características
          físicas e objetivos específicos.
        </Text>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Com exercícios adaptados à sua rotina e baseados em
          evidências científicas, nossos treinos são mais curtos
          e eficientes do que os convencionais, promovendo
          resultados ainda melhores.
        </Text>
        <Box data-aos="zoom-in" data-aos-once="true">
          <FotoGraficoDesempenho />
          <Box
            style={{
              marginBottom: '4%',
              lineHeight: '10px',
            }}
          >
            <Caption fontSize="70%">
              Legenda: Gráfico de barras com representação da
              diferença na progressão dos resultados entre
              treinos padrões e individualizados no decorrer do
              tempo.
            </Caption>
          </Box>
        </Box>
        <Text
          data-aos="fade-right"
          data-aos-once="true"
          align="left"
          paragraph
        >
          Cada um dos nossos alunos recebe um plano de treino
          individualizado, criado por profissionais qualificados.
          Nosso objetivo é garantir uma evolução constante e
          resultados duradouros de acordo com os objetivos de
          cada aluno.
        </Text>
        <Text
          data-aos="fade-right"
          data-aos-once="true"
          align="left"
          paragraph
        >
          Garanta sua vaga e comece a ver resultados de verdade
          com a Plataforma de Treinos!
        </Text>
        <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <a href="https://pag.ae/7Y-U92iVs">
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
                  sx={{ marginTop: '-2px' }}
                />
              }
            >
              Quero um treino para mim
            </Button>
          </a>
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
            Porque Utilizar a Plataforma de Treinos?
          </Title>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Os exercícios físicos são uma ótima maneira de trazer
            benefícios ao corpo, mas sabemos que pode ser difícil
            saber por onde começar.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            É preciso considerar qual tipo de exercício fazer,
            por quanto tempo, qual método usar e muitas outras
            variáveis para que o treino seja eficiente. Além
            disso, o treino precisa ser ajustado às suas
            necessidades individuais e atualizado regularmente
            para garantir resultados.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Montar uma rotina de exercícios eficiente e segura
            pode ser demorado, exigir muito estudo, disciplina e
            organização. E às vezes, o professor da academia não
            tem tempo ou recursos para fornecer o suporte
            adequado, fazer avaliações físicas e mudar o treino
            com a frequência necessária.
          </Text>
          <Title
            paragraph
            align="left"
            data-aos="fade-right"
            data-aos-once="true"
            fontSize="110%"
          >
            Veja Alguns Benefícios de Utilizar a Plataforma de
            Treinos
          </Title>
          <Box className={styles.gridServices} mb={3}>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
              }}
              className={styles.cardStepByStep}
            >
              <FlagIcon
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
                Facilidade de Começar
              </Title>
              <Text mt={2}>
                A Plataforma de Treinos oferece orientação e
                suporte para começar a se exercitar de maneira
                eficiente e segura, sem precisar se preocupar com
                as variáveis envolvidas na criação de uma rotina
                de exercícios.
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <SettingsAccessibilityIcon
                color="warning"
                sx={{
                  position: 'absolute',
                  transform: 'scale(5)',
                  top: '40%',
                  right: '20%',
                  zIndex: '-1',
                  opacity: '0.1',
                }}
              />
              <Title fontSize="100%">
                Adaptação a Necessidades Individuais
              </Title>
              <Text mt={2}>
                Os treinos são personalizados e ajustados às suas
                necessidades individuais, garantindo resultados
                mais eficientes.
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <UpdateIcon
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
              <Title fontSize="100%">Atualização Regular</Title>
              <Text mt={2}>
                Os treinos são atualizados regularmente para
                garantir que você continue progredindo e
                alcançando seus objetivos.
              </Text>
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <StarIcon
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
              <Title fontSize="100%">Suporte Profissional</Title>
              <Text mt={2}>
                A Plataforma de Treinos fornece suporte
                profissional para garantir que você esteja se
                exercitando de maneira segura e eficiente.
              </Text>{' '}
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <TrendingUpIcon
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
              <Title fontSize="100%">
                Otimização de Resultados
              </Title>
              <Text mt={2}>
                A Plataforma de Treinos ajuda a otimizar os
                resultados dos exercícios, garantindo que você
                não perca tempo com estratégias e exercícios que
                não funcionam.
              </Text>{' '}
            </Box>{' '}
          </Box>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Com a Plataforma de Treinos, você sabe exatamente o
            que fazer e como fazer para atingir seus objetivos de
            forma otimizada, seja em uma academia ou em casa. Não
            perca mais tempo, faça sua inscrição e comece a ver
            resultados de verdade com a Plataforma de Treinos.
          </Text>
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
          />
        </Box>
      </AngleDivisor>

      <Box
        className="price"
        id="price"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '-120px',
              marginTop: '100px',
              opacity: '0.15',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <Image
              data-aos="fade-right"
              data-aos-once="true"
              src="/logo-pdt-blue.png"
              alt="Logo da Plataforma de Treinos"
              width={400}
              height={400}
            />
          </Box>
        </Box>{' '}
        <SellerBanner />
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
            Política de Reembolso
          </Title>
          <Image
            data-aos="zoom-in"
            data-aos-once="true"
            src="/garantia_14_dias.png"
            alt="Logo da Plataforma de Treinos"
            width={175}
            height={150}
          />
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            <p>
              Oferecemos um termo de reembolso válido por 14 dias
              após a compra de nossos produtos ou serviços. Se
              você não estiver satisfeito com o que comprou, pode
              solicitar um reembolso total dentro desse prazo.
              Para obter mais detalhes, consulte o nosso termo de
              reembolso completo.
            </p>
          </Text>
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
          />
        </Box>
      </AngleDivisor>

      <Box
        id="step-by-step"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Box>
          <Title
            mt={3}
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Como funciona a Plataforma de Treinos?
          </Title>
          <Box className={styles.gridStepByStep} mb={3}>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
              }}
              className={styles.cardStepByStep}
            >
              <PaymentsIcon
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
              <Title className={styles.cardTitle}>1</Title>
              <Text mt={2}>
                O usuário realiza a compra da Plataforma de
                Treinos.
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <SettingsAccessibilityIcon
                color="warning"
                sx={{
                  position: 'absolute',
                  transform: 'scale(5)',
                  top: '40%',
                  right: '20%',
                  zIndex: '-1',
                  opacity: '0.1',
                }}
              />
              <Title className={styles.cardTitle}>2</Title>
              <Text mt={2}>
                É enviada uma avaliação física para o usuário
                preencher e enviar de volta.
              </Text>
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <TimerIcon
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
              <Title className={styles.cardTitle}>3</Title>

              <Text mt={2}>
                Com base nas respostas da avaliação física, é
                feita a prescrição dos treinos, em até 72 horas,
                e enviada para o usuário.
              </Text>
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <UploadFileIcon
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
              <Title className={styles.cardTitle}>4</Title>
              <Text mt={2}>
                O usuário recebe o material do programa por
                e-mail junto com o número de WhatsApp do
                professor.
              </Text>
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <EmailIcon
                color="action"
                sx={{
                  position: 'absolute',
                  transform: 'scale(5)',
                  top: '50%',
                  left: '20%',
                  zIndex: '-1',
                  opacity: '0.1',
                }}
              />
              <Title className={styles.cardTitle}>5</Title>
              <Text mt={2}>
                O usuário tem acesso ao conteúdo 100% online, que
                pode ser acessado de qualquer dispositivo com
                acesso ao e-mail.
              </Text>
            </Box>{' '}
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <HowToRegIcon
                color="primary"
                sx={{
                  position: 'absolute',
                  transform: 'scale(5)',
                  top: '50%',
                  right: '20%',
                  zIndex: '-1',
                  opacity: '0.1',
                }}
              />
              <Title className={styles.cardTitle}>6</Title>
              <Text mt={2}>
                O usuário tem acesso à área de usuário com maior
                interatividade onde pode ver o seu progresso.
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <StackedLineChartIcon
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
              <Title className={styles.cardTitle}>7</Title>
              <Text mt={2}>
                A avaliação física é reenviada periodicamente
                durante e ao final do programa para avaliar os
                resultados, realizar a progressão e os ajustes
                necessários.
              </Text>
            </Box>{' '}
          </Box>
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
            Sobre os Treinos
          </Title>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            A Plataforma de Treinos oferece uma consultoria
            fitness completa e personalizada. Cada treino enviado
            possui todas as informações necessárias para uma
            execução segura e eficiente dos exercícios.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Os treinos incluem o nome dos exercícios, informações
            detalhadas sobre como realizá-los, vídeos
            demonstrativos, observações sobre a execução correta,
            e uma descrição do método utilizado no treino. Além
            disso, você também terá acesso à informações sobre o
            método e tempo utilizado no intervalo, quantidade de
            repetições e séries, e a cadência de movimento
            recomendada.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Com essas informações completas e precisas, você
            poderá se exercitar de maneira eficiente e segura,
            alcançando seus objetivos de fitness de maneira mais
            rápida e duradoura. Não perca mais tempo com treinos
            sem resultados, escolha a nossa plataforma de treinos
            e dê o primeiro passo para o seu sucesso.
          </Text>
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
          />
        </Box>
      </AngleDivisor>

      <Box
        className="tipos-de-treinos"
        id="tipos-de-treinos"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Box>
          <Title
            mt={3}
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Tipos de Treinos
          </Title>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Na nossa consultoria fitness, montamos treinos
            personalizados de acordo com os objetivos de cada
            aluno. Oferecemos uma ampla variedade de opções para
            atender às suas necessidades e garantir o máximo de
            sucesso.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Se o seu objetivo é a melhora estética, temos treinos
            focados em ganho de massa muscular ou perda de
            gordura. Para atletas ou praticantes de esportes,
            oferecemos treinos de performance esportiva,
            incluindo opções específicas para corrida.
          </Text>
          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Também oferecemos treinos focados em saúde, como
            aqueles que visam a melhora da qualidade de vida,
            reabilitação física, reabilitação cardiovascular, e a
            luta contra o sedentarismo.{' '}
          </Text>
          <Title
            paragraph
            align="left"
            data-aos="fade-right"
            data-aos-once="true"
            fontSize="110%"
          >
            Treinos Para a Melhora Estética:
          </Title>
          <Box className={styles.gridServices} mb={3}>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Ganho de Massa Muscular
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{ backgroundColor: 'background.default' }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Diminuição da Gordura Corporal
              </Text>
            </Box>
          </Box>
          <Title
            paragraph
            align="left"
            data-aos="fade-right"
            data-aos-once="true"
            fontSize="110%"
          >
            Treinos Para Esportistas e Atletas:
          </Title>
          <Box className={styles.gridServices} mb={3}>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Aumento de Performance Esportiva
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">Progressão na Corrida</Text>
            </Box>
          </Box>

          <Title
            paragraph
            align="left"
            data-aos="fade-right"
            data-aos-once="true"
            fontSize="110%"
          >
            Treinos Focados em Saúde
          </Title>
          <Box className={styles.gridServices} mb={3}>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Melhora da Qualidade de Vida
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">Reabilitação Física</Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Reabilitação Cardiovascular
              </Text>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-once="true"
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center',
              }}
              className={styles.cardStepByStep}
            >
              <Text fontSize="100%">
                Combate ao Sedentarismo
              </Text>
            </Box>
          </Box>

          <Text
            align="left"
            paragraph
            data-aos="fade-right"
            data-aos-once="true"
          >
            Não importa qual seja o seu objetivo, temos um treino
            personalizado que pode ajudá-lo a alcançá-lo de
            maneira eficiente e segura. Não perca mais tempo com
            treinos sem resultados. Escolha a nossa consultoria e
            veja a diferença em pouco tempo.
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
          Sobre o Treinador
        </Title>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          O Treinador Carlos Augusto, graduado em Educação Física
          pela Universidade Santa Cecília, especialista em
          Treinamento Desportivo e em Treinamento Personalizado
          pela Universidade Santa Cecília, especialista em
          Condicionamento Físico Aplicado à Prevenção
          Cardiológica pela Faculdade de Medicina da USP e mestre
          em Ciências Interdisciplinar da Saúde pela UNIFESP, é o
          administrador e o Personal Trainer responsável pelo
          time técnico da Plataforma de Treinos.
        </Text>
        <Box data-aos="zoom-in" data-aos-once="true">
          <FotoAntesEDepoisGuto />
          <Box
            style={{
              marginTop: '-2%',
              marginBottom: '4%',
              lineHeight: '10px',
            }}
          >
            <Caption fontSize="70%">
              Legenda: Evolução do Professor Carlos Augusto
              durante uma fase de definição.
            </Caption>
          </Box>
        </Box>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Com seu conhecimento baseado na literatura científica
          atual, o nosso treinador lidera o time com a missão de
          tornar o acesso aos benefícios dos exercícios físicos
          mais fácil e oferecer treinos simples e eficientes para
          o máximo de pessoas, garantindo resultados realmente
          surpreendentes.
        </Text>
        <Text
          align="left"
          paragraph
          data-aos="fade-right"
          data-aos-once="true"
        >
          Se você deseja alcançar suas metas de condicionamento
          físico de maneira rápida e eficiente, tenha o
          acompanhamento do nosso time e comece a ver resultados
          de verdade com a Plataforma de Treinos!
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
            />
          </Box>
        </Box>{' '}
        <SellerBanner />
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
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography textAlign="left">
              A Plataforma de Treinos é para quem?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Todos que desejem se beneficiar com os exercícios
              físicos podem se tornar alunos da Plataforma de
              Treinos. Adaptamos os exercícios para qualquer
              realidade, mas é importante lembrar que é sempre
              necessário obter o aval de um médico antes de
              iniciar uma rotina de exercícios. Portanto, para
              garantir sua segurança, faça um checkup médico
              antes de começar qualquer atividade física.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography textAlign="left">
              Por que as vagas são limitadas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O objetivo do programa é fornecer o apoio adequado
              a todos os alunos, portanto, é preciso limitar o
              número de pessoas nas turma para aumentar a
              qualidade e eficácia do serviço e poder atender
              cada um de maneira mais eficiente.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography textAlign="left">
              A Plataforma de Treino é para quem quer emagrecer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Plataforma de Treinos não é exclusiva para quem
              deseja emagrecer. Também é adequada para aqueles
              que buscam aumentar a massa muscular, manter a
              forma física atual e melhorar os parâmetros de
              saúde. Todos esses objetivos, e muitos outros,
              podem ser alcançados com sucesso na plataforma.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography textAlign="left">
              Os treinos devem ser feitos em academia?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Não! Os treinos também podem ser feitos fora de uma
              academia. Existem exercícios que podem ser feitos
              em qualquer lugar e todos eles trazem benefícios
              para o corpo. No entanto, quanto mais equipamentos
              e uma boa infraestrutura estiverem disponíveis,
              melhor será o resultado. É possível treinar apenas
              com o peso do próprio corpo, mas se houver um
              elástico disponível, o treino pode ser
              intensificado. É importante ter claro qual é o seu
              objetivo e entender as limitações do ambiente para
              escolher onde e como treinar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography textAlign="left">
              Quanto tempo dura o programa da Plataforma de
              Treinos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Plataforma de Treinos dura 4 semanas. Há uma
              avaliação física pré participação, uma avaliação
              física na segunda semana e uma avaliação final na
              quarta semana.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography textAlign="left">
              Como é feita a individualização do exercício?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O processo de individualização de Treinos inclui
              uma avaliação física inicial, com base na qual são
              prescritos os treinos. Essa prescrição pode ser
              adaptada durante o período em que os exercícios são
              realizados, de acordo com o relato de necessidade,
              enquanto a inscrição ainda estiver válida.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panelAF'}
          onChange={handleChange('panelAF')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelAF-content"
            id="panelAF-header"
          >
            <Typography textAlign="left">
              Como funciona a avaliação física?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Na plataforma de treinos, a avaliação física é
              enviada automaticamente após o pagamento. É
              importante que essa avaliação seja preenchida com
              todas as informações para que o treino seja
              prescrito de forma otimizada. A avaliação é
              reenviada periodicamente durante e ao final do
              programa para avaliar os resultados, realizar a
              progressão e os ajustes necessários.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography textAlign="left">
              Como vou acessar o conteúdo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Após a aprovação da compra, o usuário receberá
              gradativamente o material do programa por e-mail.
              Todo o conteúdo é 100% online e pode ser acessado
              de qualquer dispositivo (computador, smart TV,
              celular, tablet) com acesso ao e-mail. Além disso,
              o usuário terá acesso a uma área de usuário com uma
              maior interatividade com o professor, onde poderá
              ver o seu progresso.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography textAlign="left">
              Preciso tomar remédios ou fazer dieta?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Você não precisa tomar remédios para alcançar seus
              objetivos. Além disso, temos um aplicativo de
              alimentação disponível na área de usuário, que pode
              ajudá-lo a atingir resultados mais rápidos, mesmo
              se você não tiver um nutricionista. Embora não seja
              obrigatório, se você combinar os treinos com uma
              alimentação balanceada, os resultados serão ainda
              melhores.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography textAlign="left">
              O programa é indicado para quem
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A plataforma de treinos pode ser útil para pessoas
              de todas as idades e níveis de aptidão física que
              desejam melhorar sua forma física, seja aumentando
              a massa muscular ou perdendo gordura. Pode ser útil
              para pessoas que não têm tempo para ir à academia,
              que preferem treinos mais personalizados ou
              específicos, que já fazem exercícios mas não obtêm
              resultados ou que preferem treinar em casa ou em
              condomínios. Também pode ser útil para pessoas que
              têm limitações físicas ou doenças crônicas e
              precisam de orientação sobre como incluir
              exercícios de forma segura em sua rotina.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel11'}
          onChange={handleChange('panel11')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <Typography textAlign="left">
              Quem tem algum tipo de limitação pode utilizar a
              Plataforma de Treinos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Indenpendente da limitação, antes de começar
              qualquer tipo de programa de exercícios, é
              importante conversar com o seu médico e garantir
              que sua saúde atual é adequada para a prática. Se
              você está apto para fazer musculação, também estará
              apto para participar do nosso programa. Os
              exercícios de musculação têm baixo impacto e são
              facilmente adaptáveis, o que os torna uma opção
              segura para pessoas com problemas de saúde, desde
              que estejam aptas para treinar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel12'}
          onChange={handleChange('panel12')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12a-content"
            id="panel12a-header"
          >
            <Typography textAlign="left">
              Quem nunca praticou atividade física pode utilizar
              a Plataforma de Treinos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              É recomendável ter alguma familiaridade com
              exercícios antes de usar a nossa plataforma. Embora
              os treinos venham com vídeos demonstrativos de cada
              movimento, a dificuldade de fornecer correção em
              tempo real pode dificultar a execução correta. No
              entanto, se você ainda assim deseja começar a usar
              a plataforma com pouca ou nenhuma experiência, pode
              enviar suas dúvidas e vídeos da sua execução para
              que possamos sugerir adaptações e correções para
              garantir sua segurança.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel13'}
          onChange={handleChange('panel13')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13a-content"
            id="panel13a-header"
          >
            <Typography textAlign="left">
              Todo mundo que usa a Plataforma tem resultados?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Diferentemente de muitos outros produtos no
              mercado, a nossa plataforma não tem um objetivo
              específico e cada cliente pode ter um objetivo
              diferente, como emagrecer, ganhar massa muscular,
              correr 10 km ou simplesmente se manter saudável. No
              entanto, todos esses objetivos têm um ponto em
              comum: aumentar a eficácia dos exercícios físicos.
              Isso só não é possível se você desistir do programa
              ou não conseguir implementar a rotina proposta e
              fazer as adaptações sugeridas. Vale lembrar que
              cada corpo tem uma velocidade de evolução que
              depende do esforço pessoal, mas também de fatores
              genéticos.
            </Typography>
            <Typography>
              É importante frisar que não estamos oferecendo uma
              solução milagrosa ou treinos padronizados em vídeo.
              A nossa plataforma é um programa de treinos
              personalizados que dependem do seu esforço para dar
              resultados.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel14'}
          onChange={handleChange('panel14')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel14a-content"
            id="panel14a-header"
          >
            <Typography textAlign="left">
              Até quando ficarão abertas as inscrições para essa
              turma
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              O número de vagas para essa turma é limitado e,
              assim que atingirmos o limite, as inscrições serão
              encerradas. Além disso, as vagas para essa turma
              também serão limitada pelo tempo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel15'}
          onChange={handleChange('panel15')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel15a-content"
            id="panel15a-header"
          >
            <Typography textAlign="left">
              É melhor usar a Plataforma de Treinos ou contratar
              um personal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Ter um personal trainer tem vantagens e
              desvantagens em comparação com a nossa plataforma
              de treinos, principalmente se você for iniciante
              sem experiência na musculação. Algumas vantagens de
              ter um personal são: correção em tempo real dos
              movimentos, ajuda para não perder o intervalo entre
              os exercícios, possibilidade de criar um treino
              personalizado e intensidade extra durante o treino.
              Algumas desvantagens de ter um personal são: menos
              flexibilidade de horário para treinar, dificuldade
              em encontrar um bom profissional com horário
              compatível e preço mais elevado.
            </Typography>
            <Typography>
              A nossa plataforma tem a vantagem de ter um preço
              mais acessível e maior flexibilidade para realizar
              as sessões, mas algumas desvantagens são: possível
              atraso na correção e cobrança de exercícios, o que
              exige mais disciplina do praticante
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel16'}
          onChange={handleChange('panel16')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel16a-content"
            id="panel16a-header"
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
          expanded={expanded === 'panel17'}
          onChange={handleChange('panel17')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel17a-content"
            id="panel17a-header"
          >
            <Typography textAlign="left">
              Ainda tem dúvidas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Envie um e-mail para
              suporte@plataformadetreinos.com.br e minha equipe
              ficará feliz em te ajudar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ marginTop: '20px' }}>
          <a href="https://pag.ae/7Y-U92iVs">
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
                <GroupAddIcon sx={{ marginTop: '-3px' }} />
              }
            >
              Quero me inscrever
            </Button>{' '}
          </a>
        </Box>
      </Box>
      <Divider
        data-aos="fade-up"
        data-aos-once="true"
        sx={{
          bgcolor: 'clearLine.main',
        }}
      />
      <Box
        className="footer"
        sx={{ padding: '0 5%' }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Box mt="10px">
          <Text
            fontSize="70%"
            sx={{ color: 'clearComment.main' }}
          >
            Assim como qualquer exercício físico, ao praticar os
            treinos propostos pela nossa plataforma de treinos,
            você assume alguns riscos para sua saúde e segurança.
            Isso é especialmente verdadeiro se você não seguir
            todas as recomendações. Por isso, antes de começar,
            leia todo o material fornecido e consulte o seu
            médico para verificar se está apto para a prática de
            atividade física e qual nível de intensidade é
            adequado para você{' '}
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
              Prof. Carlos Augusto
            </Caption>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
