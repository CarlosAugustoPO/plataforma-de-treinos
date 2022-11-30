import Divider from '@mui/material/Divider';
import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import SendButton from 'src/components/Form/SendButton/index';
import EmailField from 'src/components/Form/EmailField/index';
import ModalPoliticasDeDados from 'src/components/Modals/PoliticasDeDados/index';
import ModalTermosPreUser from 'src/components/Modals/TermosPreUser/index';
import Form from 'src/components/Form/index';
import Grid from '@mui/material/Grid';
//My components
import Title from 'src/components/Title/index';
import Text from 'src/components/Text/index';
import MyCard from 'src/components/MyCard/index';
//Mui Components
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import TimelineIcon from '@mui/icons-material/Timeline';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import Logo from 'src/components/Logo/index';
import FotoAntesEDepoisGuto from 'src/components/FotoAntesEDepoisGuto/index';
import FotoGraficoDesempenho from 'src/components/FotoGraficoDesempenho/index';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Hooks

export default function IndexUnauthTemplate() {
  const [modalTermos, setModalTermos] = useState(false);
  const [modalPoliticas, setModalPoliticas] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastFieldError, setLastFieldError] = useState<
    undefined | string
  >(undefined);
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }


  return (
    <MyCard >
      <ModalTermosPreUser
        isOpen={modalTermos}
        setOpen={setModalTermos}
      />
      <ModalPoliticasDeDados
        isOpen={modalPoliticas}
        setOpen={setModalPoliticas}
      />
      <div>
        <FitnessCenterIcon
          color="info"
          sx={{ color: 'mainIcon.main', fontSize: 60 }}
        />
        <DirectionsRunIcon
          color="warning"
          sx={{ fontSize: 60 }}
        />
        <TimelineIcon color="success" sx={{ fontSize: 60 }} />
      </div>
      <Grid style={{ width: '90%' }}>
        <Title paragraph>
          Treinos específicos e individualizados para
          praticantes de exercícios físicos, iniciantes ou
          avançados, que não querem perder tempo, buscam entrar
          em forma, melhorar a saúde e conquistar melhores
          resultados.
        </Title>
      </Grid>
      <Grid item xs={12}>
        <SendButton
          enviar="Ver pacotes"
          enviando="Registrando..."
          submitting={submitting}
          onClick={handleErrors}
          customIcon="send"
        />
      </Grid>
      <Grid style={{ width: '90%' }} mb={2}>
        <Grid item>
          <Grid style={{ width: '100%', textAlign: 'center' }}>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '2%',
                marginBottom: '4%',
              }}
            />
            <Title paragraph>
              Sobre a Plataforma de Treinos
            </Title>
            <Text align='left' paragraph>
              A Plataforma de Treinos é um programa de prescrição
              de Exercícios Físicos individualizados, que leva em
              consideração suas características físicas e tem o
              foco em proporcionar as melhores prescrições de
              exercícios físicos possíveis para você.
            </Text>
            <Text align='left' paragraph>
              Ao direcionar o foco dos exercícios para o seu
              objetivo e ao adaptá-los a sua realidade os treinos
              podem ser encaixados em qualquer rotina, ficam mais
              curtos que os treinos convencionais e quando embasados pela ciência ainda 
              promovem resultados superiores aos treinos que
              duram horas.
            </Text>
            <FotoGraficoDesempenho />
            <div
              style={{
                marginBottom: '4%',
                lineHeight: '10px',
              }}
            >
              <Caption fontSize="70%">
                Legenda: Grafico de barras com representação da
                diferença na progressão dos resultados entre
                treinos padrões e individualizados no decorrer do
                tempo.
              </Caption>
            </div>
            <Text align='left' paragraph>
              Eu espero que fique claro que a Plataforma de
              Treinos não é uma receita milagrosa, ou video aula
              com treinos padrões. Aqui cada aluno recebe um
              plano de exercícios individualizado de acordo com
              as suas necessidades, com bases científicas, montado por profissionais
              qualificados, com o foco em proporcionar uma evolução
              constante.
            </Text>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '4%',
                marginBottom: '4%',
                lineHeight: '10px',
              }}
            />
            <Title paragraph>Porque utilizar a Plataforma de Treinos?</Title>
            <Text align='left' paragraph>
            Os exercícios físicos são umas das melhores ferramentas para trazer benefícios ao corpo, entretanto iniciar a prática não é tão simples assim. Quais exercícios utilizar, a duração dos intervalos, as metodologias a serem utilizadas e diversas outras variáveis que compõe o treinamento devem ser controladas para que o treino seja eficiente, além disso essa composição de treino deve levar em consideração as individualidades de cada um e devem ser frequentemente atualizadas conforme o individuo evolui, tudo isso para que o corpo não se acostume com os estímulos e continue a responder com mudanças que vão de acordo com o objetivo.
            </Text>
            <Text align='left' paragraph>
            Dar conta de montar uma rotina eficiente e segura é uma tarefa que demanda bastante tempo, estudo, disciplina e organização. Além disso muitas vezes o professor da academia não tem condições logísticas para dar o suporte necessário, fazer as avaliações físicas e realizar as trocas de treinos com uma frequência adequada.
            </Text>
            <Text align='left' paragraph>
            Com a Plataforma de Treinos você saberá o que deve fazer e como fazer para atingir o seu objetivo de forma otimizada, seja treinando em uma academia ou em casa, sem perder tempo com exercícios e estratégias que não funcionam.
            </Text>

            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '4%',
                marginBottom: '4%',
                lineHeight: '10px',
              }}
            />

            <Title paragraph>Sobre o Treinador</Title>
            <Text align='left' paragraph>
              A Plataforma é administrada pelo Treinador Carlos
              Augusto, graduado em Educação Física pela
              Universidade Santa Cecília (2012), especialista em
              Treinamento Desportivo e Treinamento Personalizado
              pela Universidade Santa Cecília (2014),
              especialista em Condicionamento Físico Aplicado à
              Prevenção Cardiológica Primária e Secundária pela
              Faculdade de Medicina da USP e Mestre em Ciências
              da Saúde pela Universidade Federal de São Paulo.
            </Text>
            <FotoAntesEDepoisGuto />
            <div
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
            </div>
            <Text align='left' paragraph>
              Com um conhecimento embasado em pesquisas
              aprofundadas na literatura científica atual, a
              missão do Treinador Carlos Augusto é utilizar a
              Plataforma de Treinos para descomplicar o acesso
              aos benefícios dos exercícios físicos e entregar ao
              máximo de pessoas, treinos simples, objetivos, que
              realmente funcionam e trazem os resultados
              esperados.
            </Text>
          </Grid>
        </Grid>
        <SendButton
          enviar="Quero começar agora"
          enviando="Registrando..."
          submitting={submitting}
          onClick={handleErrors}
          customIcon="send"
        />
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginTop: '4%',
            marginBottom: '0%',
          }}
        />
      </Grid>

      <Title paragraph>Perguntas e Respostas Frequentes</Title>
      <div>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Qualquer pessoa que queira se beneficiar dos
              exercícios físicos podem ser alunos da Plataforma
              de Treinos. Todos os exercícios podem ser adaptados
              para qualquer realidade, porém é necessário que um
              médico tenha lhe dado o aval para prática de
              atividades físicas. Portanto, para sua segurança,
              antes de iniciar qualquer rotina de atividade
              física, faça um checkup médico.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Como o programa é individualizado e o intuito é dar
              o aporte necessário a todos os alunos sem deixá-los
              na mão, é necessário diminuir a quantidade de
              pessoas por turma para aumentar a qualidade e
              eficácia do serviço e fazer o melhor para cada um.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              A Plataforma de Treinos não é só para quem quer
              emagrecer. Pessoas que querem hipertrofia muscular,
              ou até mesmo manter o físico que já tem e apenas
              melhorar parâmetros de saúde, também são bem-vindas
              e conseguirão ótimos resultados.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Não, existem exercícios que podem ser feitos em
              qualquer lugar e todos trazem benefícios.
              Entretanto, devo deixar claro que quanto melhor a
              infra estrutura e os aparelhos que você tiver a sua
              disposição, melhor será o seu resultado. Se você
              quiser, é possível treinar apenas com o peso do seu
              corpo, mas se você tiver um elástico à sua
              disposição, o treino já pode ser potencializado.
              Isso da liberdade para você treinar onde quiser, e
              como quiser, é só deixar bem claro seu objetivo e
              entender suas limitações.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Até a presente turma, a Plataforma de Treinos dura
              8 semanas. Com uma avaliação física pré
              participação, uma avaliação física na quarta semana
              para fazer possíveis adaptações e a avaliação final
              na oitava semana para ver a eficácia do programa.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Uma avaliação física inicial é enviada antes da
              prescrição dos treinos. Com base nas respostas
              dessa avaliação toda a prescrição é feita e
              enviada, porém, no decorrer dos dias, conforme os
              exercícios são executados eles podem ser adaptados
              de acordo com o relato de necessidade desde que o
              treino ainda esteja na validade.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="paneAF-content"
            id="paneAF-header"
          >
            <Typography textAlign="left">
              Como funciona a avaliação física?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              A avaliação física é enviada automaticamente
              mediante ao pagamento e deve ser preenchida com
              todas as informações para que o treino seja
              prescrito de forma otimizada. Essa avaliação é
              reenviada periodicamente durante e ao final do 
              programa para avaliar os resultados, realizar a
              progressão e os ajustes necessários.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Após a aprovação da compra você receberá
              gradativamente o material do programa por e-mail.
              Todo conteúdo é 100% online e você pode acessá-lo
              de qualquer dispositivo (computador, smart TV,
              celular, tablet) com acesso ao e-mail. Além de ter
              acesso a uma área de usuário com uma maior
              interatividade com o professor onde você pode ver o
              seu progresso.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Não, não é necessário tomar remédios. Quanto a
              dieta, caso ainda não tenha um nutricionista, na
              área de usuário tem um App de alimentação para que
              você consiga resultados mais rápidos. Apesar de não
              ser obrigatório, se você combinar os treinos com
              uma alimentação balanceada os resultados serão
              ainda melhores.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography textAlign="left">
              O programa é indicado para qual idade?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              Pessoas de todas as idades podem usar a Plataforma
              de Treinos. Temos clientes dos 15 aos 52 anos que
              obtiveram resultados incríveis com o programa. É
              recomendável que você converse com o seu médico
              antes de iniciar os treinos para que você esteja
              com o melhor amparo clínico possível. E caso seja
              menor de idade, é necessário o consentimento dos
              pais.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <Typography textAlign="left">
              Quem pode se beneficiar da Plataforma?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography>
              O foco principal da Plataforma são pessoas
              saudáveis que querem entrar ou se manter em forma
              aumentando a massa muscular ou perdendo gordura,
              pessoas que não tem muito tempo para ficar na
              academia, pessoas que buscam treinos mais
              individualizados e específicos do que os montados nas
              academias, pessoas que não trocam frequentemente de
              treino, pessoas que já treinam mas não vêem
              resultados e pessoas que querem treinar em casa ou
              condomínios.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <Typography textAlign="left">
              Quem tem algum tipo de limitação pode utilizar a Plataforma de Treinos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              Independente da limitação, antes da prática é
              recomendado que você converse com o seu médico e
              cheque o estado atual de sua saúde. Caso esteja
              apto para realizar a musculação, você estará apto
              para realizar o nosso programa.
            </Typography>
            <Typography>
              Os exercícios de musculação possuem baixo impacto e
              são completamente adaptáveis o que facilita a
              prática para aqueles que apresentam problemas de
              saúde, porém estão aptos a treinar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              É aconselhável que quem use a Plataforma já tenha
              alguma afinidade com exercícios. Os treinos vem com
              o exemplo de cada movimento em vídeo, porém a
              dificuldade de uma correção em tempo real dificulta
              a correção ideal. Entretanto, caso você ainda assim
              queira iniciar na Plataforma com pouca ou sem
              nenhuma experiência, você pode enviar suas dúvidas
              e os vídeos com a execução do movimento para que
              possamos sugerir as adaptações e correções
              necessárias para garantir a sua segurança.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              Diferente da maioria dos produtos do mercado, a
              Plataforma não tem uma transformação específica e
              cada cliente pode ter um objetivo diferente. Uns
              querem emagrecer, outros hipertrofiar, outros
              querem correr 10km, outros querem apenas cuidar da
              saúde. Porém, todos os objetivos convergem em um,
              aumentar a eficácia dos exercícios físicos, e esse
              só não é alcançável para aquele que desistir do
              programa ou por alguma dificuldade pessoal não
              consegue implementar a rotina proposta e nem fazer
              as adaptações sugeridas. Entretanto, vale ressaltar
              que cada corpo apresenta uma velocidade de evolução
              que além de levar em conta o empenho, leva em
              considerações fatores genéticos.
            </Typography>
            <Typography>
              Eu espero que fique claro que não estou oferecendo
              para você uma receita milagrosa, ou video-aulas com
              treinos padrões! A Plataforma é um programa de treinos individualizados que
              dependem do seu esforço para dar resultados.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              Essa turma será limitada pelo número de vagas, ao
              atingir as vagas limites, as inscrições serão
              encerradas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              O personal tem vantagens e desvantagens perante a
              Plataforma de Treinos. O personal vai corrigir seus
              movimentos em tempo real e te ajudar a não perder o
              intervalo entre os exercícios, assim como também
              pode montar um treino individualizado e extrair
              mais intensidade durante o treino. As desvantagens
              do personal ficam em relação a liberdade de horário
              para treinar, a dificuldade de achar um bom
              profissional com agenda compatível e o preço
              acessível.
            </Typography>
            <Typography>
              A Plataforma tem a vantagem de ter um menor preço e
              uma maior flexibilidade para executar suas sessões,
              as desvantagens ficam na latência da correção e na
              cobrança dos exercícios. Isso exige uma disciplina
              maior do praticante.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
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
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              Atualmente os horários para as aulas de personal
              estão lotados. Entretanto, pode abrir vagas
              mediante a desistência. Caso tenha interesse entre
              em contato através do e-mail
              prof.carlos.aug@gmail.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel16a-content"
            id="panel16a-header"
          >
            <Typography textAlign="left">
              Ainda tem dúvidas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider
              sx={{
                bgcolor: 'clearLine.main',
                marginTop: '-3%',
                marginBottom: '3%',
              }}
            />
            <Typography paragraph>
              Envie um e-mail para
              suporte@plataformadetreinos.com.br e minha equipe
              ficará feliz em te ajudar.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <SendButton
          sx={{ marginTop: '3%' }}
          enviar="Quero começar agora"
          enviando="Registrando..."
          submitting={submitting}
          onClick={handleErrors}
          customIcon="send"
        />
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginTop: '3%',
            marginBottom: '1%',
          }}
        />
      </div>
      <Caption fontSize="70%" maxWidth="90%">
        Como qualquer exercício físico, você assume riscos para
        sua saúde e segurança ao praticar os treinos propostos
        pela Plataforma de Treinos, principalmente se você não
        seguir todas as recomendações, por isso antes de iniciar
        a prática leia todo o material recebido. Além disso você
        deve consultar o seu médico e ver se você está apto para
        praticar atividade física e em qual nível.
      </Caption>
      <Caption fontSize="70%" maxWidth="90%">
      © 2022 Plataforma de Treinos. Todos os direito reservados.
      </Caption>
      <Caption fontSize="70%" maxWidth="90%" sx={{marginTop: "-2%"}}>
      Design By: Prof. Carlos Augusto
      </Caption>
    </MyCard>
  );
}
