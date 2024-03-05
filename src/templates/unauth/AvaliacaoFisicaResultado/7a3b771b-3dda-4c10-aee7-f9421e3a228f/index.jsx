import React from 'react';
import GraficoComposicaoCorporal from 'src/components/GraficoComposicaoCorporal';
import GraficoPercentualDeGordura from 'src/components/GraficoPercentualDeGordura';
import GraficoDobrasCutaneas from 'src/components/GraficoDobrasCutaneas';
import GraficoCircunferenciasDeTronco from 'src/components/GraficoCircunferenciasDeTronco';
import GraficoCircunferenciasDeBraco from 'src/components/GraficoCircunferenciasDeBraco';
import GraficoCircunferenciasDeMMII from 'src/components/GraficoCircunferenciasDeMMII';
import GraficoPercentualDeMassaMuscular from 'src/components/GraficoPercentualDeMassaMuscular';
import DobrasCutaneas from 'src/components/DobrasCutaneas';
import TabelaResumoAF from 'src/components/TabelaResumoAF';
import InformacoesPessoais from 'src/components/InformacoesPessoais';
import InformacoesAdicionais from 'src/components/InformacoesAdicionais';
import InformacoesNutricionais from 'src/components/InformacoesNutricionais';
import InformacoesSobreOTreino from 'src/components/InformacoesSobreOTreino';
import InformacoesPreAvaliacao from 'src/components/InformacoesPreAvaliacao';
import ObjetivosExpectativas from 'src/components/ObjetivosExpectativas';
import InformacoesSobreARotina from 'src/components/InformacoesSobreARotina';
import InformacoesSobreASaude from 'src/components/InformacoesSobreASaude';
import HistoricoDePeso from 'src/components/HistoricoDePeso';
import ResumoAntropometrico from 'src/components/ResumoAntropometrico';
import Circunferencias from 'src/components/Circunferencias';
import AnaliseMorfologica from 'src/components/AnaliseMorfologica';
import RecordatorioAlimentar from 'src/components/RecordatorioAlimentar';
import AnalisePostural from 'src/components/AnalisePostural';
import Title from 'src/components/Title/index';
import Box from '@mui/material/Box';

function ResultadoAvaliacaoFisica() {
  const dadosDaAvaliacaoAtual = {
    nome: 'Beatriz Pimenta',
    idade: 19,
    altura: 1.63,
    email: 'beatrizpi20@yahoo.com.br',
    dataDaAvaliação: '03/03/2024',
    dataDeNascimento: '20/08/2004',
    genero: 'feminino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Abdômen e glúteos',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: '5km',
    pretendeMelhorarFlexibilidade: '',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '3 anos',
    motivoDeParadaDaUltimaVez: 'Preguiça',
    tempoDeParadaDaUltimaVez: '5 meses',
    quantidadeDeTreinosPorSemana: '5 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '4-5 vezes',
    horarioDeTreinoMusculacao: '22h00',
    horarioDesejadoDeTreinoMusculacao: '22h00',
    musculosPreferidosDeTreinoMusculacao: 'Costas e ombros',
    exerciciosComDificuldades:
      'Agachamentos em geral, elevação lateral',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '14h00',
    freqExerciciosAerobios: '3 vezes',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '36 horas atrás',
    ultimoTreinoDescricao: 'Membros inferiores',
    ultimaRefeicao: '3 torradas com creme de ricota',
    tempoUltimaRefeicao: '40 minutos atrás',
    horaDeDormir: '01:00',
    horaDeAcordar: '06:50',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: 'ansioso',
    estrategiasContraEstresse: 'ouvir músicas, assistir séries',
    estrategiasDeLazer: 'cinema, comer',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Rinite, sinusite e laringite',
    tomaMedicamento:
      'Anticoncepcional injetável, furosato de mometasona',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'ocasionalmente, 1x por mês',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Fratura do dedo mínimo do pé',
    limitacaoFisica: 'Evitar colocar peso sobre a cervical',
    amamentando: '',
    cirurgiaPassada: 'sem cirurgias',
    tempoCirurgiaPassada: '',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 58,
    maiorPesoAdulto: 62,
    peso3Meses: 62,
    peso6Meses: '',
    peso1Ano: 58,
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 58,
    pesoAtual: 62.1,
    circunferenciaDePunho: 14,
    circunferenciaDeAbdomen: 84,
    circunferenciaDePescoco: 30,
    circunferenciaDeCintura: 71.5,
    circunferenciaDeQuadril: 102,
    circunferenciaDePanturrilha: 36,
    circunferenciaBracoRelaxado: 26.5,
    circunferenciaBracoContraido: 27.5,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 21,
    circunferenciaCoxa: 56.5,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 21,
    dobraCutaneaPeitoral: 10,
    dobraCutaneaAbdominal: 21,
    dobraCutaneaTricipital: 14,
    dobraCutaneaSubescapular: 10.5,
    dobraCutaneaSuprailiaca: 14.5,
    dobraCutaneaCoxa: 27.5,
    dobraCutaneaPanturrilha: 10,
    porcentagemDeGorduraBia: 34.2,
    massaMuscularBia: 28,
    idadeCorporal: 28,
    gorduraVisceral: 4,
    tmb: 1316,
    planejaRefeicoes:
      'Sim, utiliza um cardápio de cutting de meses atrás',
    preparaRefeicoes: 'Não, a mãe',
    numeroRefeicoes: '5 - 7 refeições',
    quantidadeAgua: 'quase 2l por dia',
    horarioFome: 'A noite',
    alimentoBeliscar: 'Biscoito de arroz com requeijão',
    alimentosFrequentes: 'Frango, arroz e feijão',
    restricaoAlimentar: 'Intolerância a lactose',
    velocidadeMastigar: '',
    usaSuplementos:
      'Creatina, multivitaminico, whey protein e melatonina',
    consumoAlimentarDiario:
      'Café: [3 torradas, creme de ricota, supercofe], Colação: [1 Banana], Almoço: [60g de arroz, 100g de frango, 1 concha de feijão, 24g de cenoura ralada, salada a vontade, 3 rodelas de tomate], Pre Treino: [5 magic toast com creme de ricota, ou 2 fatias de pão integral com creme de ricota ou atum, 2 folhas de alface e 12 gramas de cenour ralada], Pós treino: [1 scoop de whey com yogurt, aveia e morango], Jantar = [60g de arroz, 100g de frango, 1 concha de feijão, 24g de cenoura ralada, salada a vontade, 3 rodelas de tomate]',
    habitosFinaisDeSemana:
      'As vezes substitui a janta por uma refeiçao fora da dieta',
    desvioPostural:
      'Hipercifose, Hiperlordose e Escoliose já corrigida',
    informacoesAdicionais:
      'O foco principal é corrigir a postura com exercícios corretivos, a ultima vez que fez a atual dieta de cutting estava com 58kg e manteve, perdendo apenas medidas',
  };
  const dadosDaAvaliacaoAnterior = {
    nome: 'Beatriz Pimenta',
    idade: 19,
    altura: 1.63,
    email: 'beatrizpi20@yahoo.com.br',
    dataDaAvaliação: '03/03/2024',
    dataDeNascimento: '20/08/2004',
    genero: 'feminino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Abdômen e glúteos',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: '5km',
    pretendeMelhorarFlexibilidade: '',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '3 anos',
    motivoDeParadaDaUltimaVez: 'Preguiça',
    tempoDeParadaDaUltimaVez: '5 meses',
    quantidadeDeTreinosPorSemana: '5 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '4-5 vezes',
    horarioDeTreinoMusculacao: '22h00',
    horarioDesejadoDeTreinoMusculacao: '22h00',
    musculosPreferidosDeTreinoMusculacao: 'Costas e ombros',
    exerciciosComDificuldades:
      'Agachamentos em geral, elevação lateral',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '14h00',
    freqExerciciosAerobios: '3 vezes',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '36 horas atrás',
    ultimoTreinoDescricao: 'Membros inferiores',
    ultimaRefeicao: '3 torradas com creme de ricota',
    tempoUltimaRefeicao: '40 minutos atrás',
    horaDeDormir: '01:00',
    horaDeAcordar: '06:50',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: 'ansioso',
    estrategiasContraEstresse: 'ouvir músicas, assistir séries',
    estrategiasDeLazer: 'cinema, comer',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Rinite, sinusite e laringite',
    tomaMedicamento:
      'Anticoncepcional injetável, furosato de mometasona',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'ocasionalmente, 1x por mês',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Fratura do dedo mínimo do pé',
    limitacaoFisica: 'Evitar colocar peso sobre a cervical',
    amamentando: '',
    cirurgiaPassada: 'sem cirurgias',
    tempoCirurgiaPassada: '',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 58,
    maiorPesoAdulto: 62,
    peso3Meses: 62,
    peso6Meses: '',
    peso1Ano: 58,
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 58,
    pesoAtual: 62.1,
    circunferenciaDePunho: 14,
    circunferenciaDeAbdomen: 84,
    circunferenciaDePescoco: 30,
    circunferenciaDeCintura: 71.5,
    circunferenciaDeQuadril: 102,
    circunferenciaDePanturrilha: 36,
    circunferenciaBracoRelaxado: 26.5,
    circunferenciaBracoContraido: 27.5,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 21,
    circunferenciaCoxa: 56.5,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 21,
    dobraCutaneaPeitoral: 10,
    dobraCutaneaAbdominal: 21,
    dobraCutaneaTricipital: 14,
    dobraCutaneaSubescapular: 10.5,
    dobraCutaneaSuprailiaca: 14.5,
    dobraCutaneaCoxa: 27.5,
    dobraCutaneaPanturrilha: 10,
    porcentagemDeGorduraBia: 34.2,
    massaMuscularBia: 28,
    idadeCorporal: 28,
    gorduraVisceral: 4,
    tmb: 1316,
    planejaRefeicoes:
      'Sim, utiliza um cardápio de cutting de meses atrás',
    preparaRefeicoes: 'Não, a mãe',
    numeroRefeicoes: '5 - 7 refeições',
    quantidadeAgua: 'quase 2l por dia',
    horarioFome: 'A noite',
    alimentoBeliscar: 'Biscoito de arroz com requeijão',
    alimentosFrequentes: 'Frango, arroz e feijão',
    restricaoAlimentar: 'Intolerância a lactose',
    velocidadeMastigar: '',
    usaSuplementos:
      'Creatina, multivitaminico, whey protein e melatonina',
    consumoAlimentarDiario:
      'Café: [3 torradas, creme de ricota, supercofe], Colação: [1 Banana], Almoço: [60g de arroz, 100g de frango, 1 concha de feijão, 24g de cenoura ralada, salada a vontade, 3 rodelas de tomate], Pre Treino: [5 magic toast com creme de ricota, ou 2 fatias de pão integral com creme de ricota ou atum, 2 folhas de alface e 12 gramas de cenour ralada], Pós treino: [1 scoop de whey com yogurt, aveia e morango], Jantar = [60g de arroz, 100g de frango, 1 concha de feijão, 24g de cenoura ralada, salada a vontade, 3 rodelas de tomate]',
    habitosFinaisDeSemana:
      'As vezes substitui a janta por uma refeiçao fora da dieta',
    desvioPostural:
      'Hipercifose, Hiperlordose e Escoliose já corrigida',
    informacoesAdicionais:
      'O foco principal é corrigir a postura com exercícios corretivos, a ultima vez que fez a atual dieta de cutting estava com 58kg e manteve, perdendo apenas medidas',
  };

  const peitoralAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaPeitoral;
  const abdomenAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaAbdominal;
  const tricepsAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaTricipital;
  const subescapularAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaSubescapular;
  const suprailiacaAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaSuprailiaca;
  const coxaAnterior = dadosDaAvaliacaoAnterior.dobraCutaneaCoxa;
  const panturrilhaAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaPanturrilha;
  const axilarMediaAnterior =
    dadosDaAvaliacaoAnterior.dobraCutaneaAxilarMedia;

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobrasAnterior =
    peitoralAnterior +
    abdomenAnterior +
    tricepsAnterior +
    subescapularAnterior +
    suprailiacaAnterior +
    coxaAnterior +
    (axilarMediaAnterior
      ? axilarMediaAnterior
      : panturrilhaAnterior);

  const calcularDensidadeCorporalAnterior = (
    dadosDaAvaliacaoAnterior,
  ) => {
    var genero = dadosDaAvaliacaoAnterior.genero;

    if (genero === 'masculino') {
      const densidadeCorporalAnterior =
        1.112 -
        0.00043499 * somaDobrasAnterior +
        0.00000055 * Math.pow(somaDobrasAnterior, 2) -
        0.0002882 * dadosDaAvaliacaoAnterior.idade;
      return densidadeCorporalAnterior;
    } else if (genero === 'feminino') {
      const densidadeCorporalAnterior =
        1.097 -
        0.00046971 * somaDobrasAnterior +
        0.00000056 * Math.pow(somaDobrasAnterior, 2) -
        0.00012828 * dadosDaAvaliacaoAnterior.idade;
      return densidadeCorporalAnterior;
    } else {
      const densidadeCorporalAnterior =
        1.097 -
        0.00046971 * somaDobrasAnterior +
        0.00000056 * Math.pow(somaDobrasAnterior, 2) -
        0.00012828 * dadosDaAvaliacaoAnterior.idade;
      return densidadeCorporalAnterior;
    }
  };

  const pollock7dobrasAnterior =
    (4.95 /
      calcularDensidadeCorporalAnterior(
        dadosDaAvaliacaoAnterior,
      ) -
      4.5) *
    100;
  // Cálculo de Gordura em KG Pollock 7 Dobras
  const pesoGordoAnterior =
    (pollock7dobrasAnterior / 100) *
    dadosDaAvaliacaoAnterior.pesoAtual;
  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagroAnterior =
    dadosDaAvaliacaoAnterior.pesoAtual - pesoGordoAnterior;

  const calcularIMCAnterior = (alturaAnterior, pesoAnterior) => {
    return (
      pesoAnterior /
      (alturaAnterior * alturaAnterior)
    ).toFixed(1);
  };

  const imcAnterior = calcularIMCAnterior(
    dadosDaAvaliacaoAnterior.altura,
    dadosDaAvaliacaoAnterior.pesoAtual,
  );

  const rcqAnterior = (
    dadosDaAvaliacaoAnterior.circunferenciaDeCintura /
    dadosDaAvaliacaoAnterior.circunferenciaDeQuadril
  ).toFixed(2);

  const peitoralAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaPeitoral;
  const abdomenAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaAbdominal;
  const tricepsAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaTricipital;
  const subescapularAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaSubescapular;
  const suprailiacaAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaSuprailiaca;
  const coxaAtual = dadosDaAvaliacaoAtual.dobraCutaneaCoxa;
  const panturrilhaAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaPanturrilha;
  const axilarMediaAtual =
    dadosDaAvaliacaoAtual.dobraCutaneaAxilarMedia;

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobrasAtual =
    peitoralAtual +
    abdomenAtual +
    tricepsAtual +
    subescapularAtual +
    suprailiacaAtual +
    coxaAtual +
    (axilarMediaAtual ? axilarMediaAtual : panturrilhaAtual);

  const calcularDensidadeCorporalAtual = (
    dadosDaAvaliacaoAtual,
  ) => {
    var genero = dadosDaAvaliacaoAtual.genero;

    if (genero === 'masculino') {
      const densidadeCorporalAtual =
        1.112 -
        0.00043499 * somaDobrasAtual +
        0.00000055 * Math.pow(somaDobrasAtual, 2) -
        0.0002882 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporalAtual;
    } else if (genero === 'feminino') {
      const densidadeCorporalAtual =
        1.097 -
        0.00046971 * somaDobrasAtual +
        0.00000056 * Math.pow(somaDobrasAtual, 2) -
        0.00012828 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporalAtual;
    } else {
      const densidadeCorporalAtual =
        1.097 -
        0.00046971 * somaDobrasAtual +
        0.00000056 * Math.pow(somaDobrasAtual, 2) -
        0.00012828 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporalAtual;
    }
  };

  const pollock7dobrasAtual =
    (4.95 /
      calcularDensidadeCorporalAtual(dadosDaAvaliacaoAtual) -
      4.5) *
    100;
  // Cálculo de Gordura em KG Pollock 7 Dobras
  const pesoGordoAtual =
    (pollock7dobrasAtual / 100) *
    dadosDaAvaliacaoAtual.pesoAtual;
  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagroAtual =
    dadosDaAvaliacaoAtual.pesoAtual - pesoGordoAtual;

  const calcularIMCAtual = (alturaAtual, pesoAtual) => {
    return (pesoAtual / (alturaAtual * alturaAtual)).toFixed(1);
  };

  const imcAtual = calcularIMCAtual(
    dadosDaAvaliacaoAtual.altura,
    dadosDaAvaliacaoAtual.pesoAtual,
  );

  const rcqAtual = (
    dadosDaAvaliacaoAtual.circunferenciaDeCintura /
    dadosDaAvaliacaoAtual.circunferenciaDeQuadril
  ).toFixed(2);

  const dadosDoGrafico = [
    {
      data: dadosDaAvaliacaoAtual.dataDaAvaliação,
      peso: dadosDaAvaliacaoAtual.pesoAtual,
      idade: dadosDaAvaliacaoAtual.idade,
      imc: imcAtual,
      pollock7dobras: pollock7dobrasAtual.toFixed(1),
      pesoMagro: pesoMagroAtual.toFixed(1),
      pesoGordo: pesoGordoAtual.toFixed(1),
      massaMuscularBia: dadosDaAvaliacaoAtual.massaMuscularBia,
      porcentagemDeGorduraBia:
        dadosDaAvaliacaoAtual.porcentagemDeGorduraBia,
      gorduraVisceral: dadosDaAvaliacaoAtual.gorduraVisceral,
      idadeCorporal: dadosDaAvaliacaoAtual.idadeCorporal,
      circunferenciaDePunho:
        dadosDaAvaliacaoAtual.circunferenciaDePunho,
      circunferenciaDeAbdomen:
        dadosDaAvaliacaoAtual.circunferenciaDeAbdomen,
      circunferenciaDePescoco:
        dadosDaAvaliacaoAtual.circunferenciaDePescoco,
      circunferenciaDeCintura:
        dadosDaAvaliacaoAtual.circunferenciaDeCintura,
      circunferenciaDeQuadril:
        dadosDaAvaliacaoAtual.circunferenciaDeQuadril,
      circunferenciaDePanturrilha:
        dadosDaAvaliacaoAtual.circunferenciaDePanturrilha,
      circunferenciaBracoRelaxado:
        dadosDaAvaliacaoAtual.circunferenciaBracoRelaxado,
      circunferenciaBracoContraido:
        dadosDaAvaliacaoAtual.circunferenciaBracoContraido,
      circunferenciaTorax:
        dadosDaAvaliacaoAtual.circunferenciaTorax,
      circunferenciaAntebraco:
        dadosDaAvaliacaoAtual.circunferenciaAntebraco,
      circunferenciaCoxa:
        dadosDaAvaliacaoAtual.circunferenciaCoxa,
      circunferenciaTornozelo:
        dadosDaAvaliacaoAtual.circunferenciaTornozelo,
      rcq: rcqAtual,
      dobraCutaneaAxilarMedia:
        dadosDaAvaliacaoAtual.dobraCutaneaAxilarMedia,
      dobraCutaneaPeitoral:
        dadosDaAvaliacaoAtual.dobraCutaneaPeitoral,
      dobraCutaneaAbdominal:
        dadosDaAvaliacaoAtual.dobraCutaneaAbdominal,
      dobraCutaneaTricipital:
        dadosDaAvaliacaoAtual.dobraCutaneaTricipital,
      dobraCutaneaSubescapular:
        dadosDaAvaliacaoAtual.dobraCutaneaSubescapular,
      dobraCutaneaSuprailiaca:
        dadosDaAvaliacaoAtual.dobraCutaneaSuprailiaca,
      dobraCutaneaCoxa: dadosDaAvaliacaoAtual.dobraCutaneaCoxa,
      dobraCutaneaPanturrilha:
        dadosDaAvaliacaoAtual.dobraCutaneaPanturrilha,
      fcRepouso: dadosDaAvaliacaoAtual.fcRepouso,
      paRepouso: dadosDaAvaliacaoAtual.paRepouso,
    },
  ];
  /*adicionar mais um objeto dentro do array com
   * dadosDaUltimaAvaliacao e dadosDaPrimeiraAvaliacao*/
  return (
    <Box
      className="container"
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        marginBottom: '0',
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Title>Resultado da Avaliação Física</Title>
      <Title paragraph sx={{ color: 'success.main' }}>
        Data: {dadosDaAvaliacaoAtual.dataDaAvaliação}
      </Title>

      <InformacoesPessoais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <TabelaResumoAF dadosDoGrafico={dadosDoGrafico} />

      <ObjetivosExpectativas
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesSobreOTreino
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesPreAvaliacao
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesSobreARotina
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesSobreASaude
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <HistoricoDePeso
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <ResumoAntropometrico
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Circunferencias
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <DobrasCutaneas dadosDaAvaliacao={dadosDaAvaliacaoAtual} />

      <AnaliseMorfologica
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesNutricionais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <RecordatorioAlimentar
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <AnalisePostural
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesAdicionais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <GraficoCircunferenciasDeTronco
        dadosDoGrafico={dadosDoGrafico}
      />

      <GraficoCircunferenciasDeBraco
        dadosDoGrafico={dadosDoGrafico}
      />

      <GraficoCircunferenciasDeMMII
        dadosDoGrafico={dadosDoGrafico}
      />

      <GraficoDobrasCutaneas dadosDoGrafico={dadosDoGrafico} />

      <GraficoPercentualDeGordura
        dadosDoGrafico={dadosDoGrafico}
      />

      <GraficoPercentualDeMassaMuscular
        dadosDoGrafico={dadosDoGrafico}
      />

      <GraficoComposicaoCorporal
        dadosDoGrafico={dadosDoGrafico}
      />
    </Box>
  );
}

export default ResultadoAvaliacaoFisica;
