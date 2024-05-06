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
    nome: 'Andressa Cipriano dos Santos',
    idade: 26,
    altura: 1.53,
    celular: '+55 13 98199-1679',
    email: 'cipriano.a@hotmail.com',
    dataDaAvaliação: '27/04/2023',
    dataDeNascimento: '02/01/1998',
    genero: 'feminino',
    objetivoEstetico: 'Hipertrofia',
    pontosFracosEsteticos:
      'Dificuldade em ganhar pernas, omrbos e bíceps',
    pretendeCorrer: 'Não',
    objetivosComCorrida: 'hide',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '~2 anos',
    motivoDeParadaDaUltimaVez:
      'Preguiça e quebra de ritmo de frequência',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: '5 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '5 vezes',
    horarioDeTreinoMusculacao: '20h00',
    horarioDesejadoDeTreinoMusculacao: '20h00',
    musculosPreferidosDeTreinoMusculacao: 'Costas',
    exerciciosComDificuldades: 'Francês na corda,',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '16 horas atrás',
    ultimoTreinoDescricao: 'posterior de gluteo',
    ultimaRefeicao: 'Arroz carne e batata palha e banana',
    tempoUltimaRefeicao: '3 horas antes de avaliação',
    horaDeDormir: '01:00',
    horaDeAcordar: '05:00',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Não possui',
    tomaMedicamento: 'Não',
    usaEsteroides: 'Não',
    frequenciaAlcool: '1x/a cada 2 semanas',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'hide',
    limitacaoFisica: 'Dores lombar',
    amamentando: '',
    cirurgiaPassada: '',
    tempoCirurgiaPassada: '',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 42,
    maiorPesoAdulto: 52,
    peso3Meses: '',
    peso6Meses: '',
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 55,
    pesoAtual: 54.4,
    porcentagemDeGorduraBia: 32.8,
    massaMuscularBia: 28.3,
    idadeCorporal: 34,
    gorduraVisceral: 4,
    tmb: 1197,
    circunferenciaDePunho: 15,
    circunferenciaDeAbdomen: 74.5,
    circunferenciaDePescoco: 32,
    circunferenciaDeCintura: 69,
    circunferenciaDeQuadril: 100,
    circunferenciaDePanturrilha: 35,
    circunferenciaBracoRelaxado: 25.5,
    circunferenciaBracoContraido: 27,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 22.5,
    circunferenciaCoxa: 54,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 5,
    dobraCutaneaPeitoral: 5.5,
    dobraCutaneaAbdominal: 6,
    dobraCutaneaTricipital: 11,
    dobraCutaneaSubescapular: 12,
    dobraCutaneaSuprailiaca: 7.5,
    dobraCutaneaCoxa: 33,
    dobraCutaneaPanturrilha: 14.5,
    planejaRefeicoes: '',
    preparaRefeicoes: '',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: 'Arroz, Feijão e Carne',
    restricaoAlimentar: 'Lactose',
    velocidadeMastigar: '',
    usaSuplementos: 'Albumina, complexo vitaminico e creatina',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais: '',
  };

  const dadosDaAvaliacaoAnterior = {
    nome: 'Andressa Cipriano dos Santos',
    idade: 25,
    altura: 1.53,
    celular: '+55 13 98199-1679',
    email: 'cipriano.a@hotmail.com',
    dataDaAvaliação: '10/12/2023',
    dataDeNascimento: '02/01/1998',
    genero: 'feminino',
    objetivoEstetico: 'Hipertrofia',
    pontosFracosEsteticos:
      'Dificuldade em ganhar pernas, omrbos e bíceps',
    pretendeCorrer: 'Não',
    objetivosComCorrida: 'hide',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '~2 anos',
    motivoDeParadaDaUltimaVez:
      'Preguiça e quebra de ritmo de frequência',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: '3 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '5 vezes',
    horarioDeTreinoMusculacao: '19h00',
    horarioDesejadoDeTreinoMusculacao: '19h00',
    musculosPreferidosDeTreinoMusculacao: 'Costas',
    exerciciosComDificuldades: '',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '48 horas atrás',
    ultimoTreinoDescricao: 'Peito, Tríceps e Ombro',
    ultimaRefeicao: 'Bolo de laranja',
    tempoUltimaRefeicao: '2 horas atrás',
    horaDeDormir: '00:00',
    horaDeAcordar: '07:00',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Não possui',
    tomaMedicamento: 'Não',
    usaEsteroides: 'Não',
    frequenciaAlcool: '1x/Semana',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'hide',
    limitacaoFisica: 'Dores lombar',
    amamentando: '',
    cirurgiaPassada: '',
    tempoCirurgiaPassada: '',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 42,
    maiorPesoAdulto: 52,
    peso3Meses: '',
    peso6Meses: '',
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 55,
    pesoAtual: 53,
    circunferenciaDePunho: 15,
    circunferenciaDeAbdomen: 72.4,
    circunferenciaDePescoco: 32,
    circunferenciaDeCintura: 65,
    circunferenciaDeQuadril: 95.5,
    circunferenciaDePanturrilha: 34.5,
    circunferenciaBracoRelaxado: 24,
    circunferenciaBracoContraido: 25.5,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 22,
    circunferenciaCoxa: 52,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 5,
    dobraCutaneaPeitoral: 5,
    dobraCutaneaAbdominal: 9,
    dobraCutaneaTricipital: 12,
    dobraCutaneaSubescapular: 12,
    dobraCutaneaSuprailiaca: 6,
    dobraCutaneaCoxa: 25,
    dobraCutaneaPanturrilha: 14,
    porcentagemDeGorduraBia: 31.4,
    massaMuscularBia: 28.8,
    idadeCorporal: 31,
    gorduraVisceral: 4,
    tmb: 1184,
    planejaRefeicoes: '',
    preparaRefeicoes: '',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: 'Arroz, Feijão e Carne',
    restricaoAlimentar: 'Lactose',
    velocidadeMastigar: '',
    usaSuplementos: 'Creatina',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais: '',
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
      data: dadosDaAvaliacaoAnterior.dataDaAvaliação,
      peso: dadosDaAvaliacaoAnterior.pesoAtual,
      idade: dadosDaAvaliacaoAnterior.idade,
      imc: imcAnterior,
      pollock7dobras: pollock7dobrasAnterior.toFixed(1),
      pesoMagro: pesoMagroAnterior.toFixed(1),
      pesoGordo: pesoGordoAnterior.toFixed(1),
      massaMuscularBia:
        dadosDaAvaliacaoAnterior.massaMuscularBia,
      porcentagemDeGorduraBia:
        dadosDaAvaliacaoAnterior.porcentagemDeGorduraBia,
      gorduraVisceral: dadosDaAvaliacaoAnterior.gorduraVisceral,
      idadeCorporal: dadosDaAvaliacaoAnterior.idadeCorporal,
      circunferenciaDePunho:
        dadosDaAvaliacaoAnterior.circunferenciaDePunho,
      circunferenciaDeAbdomen:
        dadosDaAvaliacaoAnterior.circunferenciaDeAbdomen,
      circunferenciaDePescoco:
        dadosDaAvaliacaoAnterior.circunferenciaDePescoco,
      circunferenciaDeCintura:
        dadosDaAvaliacaoAnterior.circunferenciaDeCintura,
      circunferenciaDeQuadril:
        dadosDaAvaliacaoAnterior.circunferenciaDeQuadril,
      circunferenciaDePanturrilha:
        dadosDaAvaliacaoAnterior.circunferenciaDePanturrilha,
      circunferenciaBracoRelaxado:
        dadosDaAvaliacaoAnterior.circunferenciaBracoRelaxado,
      circunferenciaBracoContraido:
        dadosDaAvaliacaoAnterior.circunferenciaBracoContraido,
      circunferenciaTorax:
        dadosDaAvaliacaoAnterior.circunferenciaTorax,
      circunferenciaAntebraco:
        dadosDaAvaliacaoAnterior.circunferenciaAntebraco,
      circunferenciaCoxa:
        dadosDaAvaliacaoAnterior.circunferenciaCoxa,
      circunferenciaTornozelo:
        dadosDaAvaliacaoAnterior.circunferenciaTornozelo,
      rcq: rcqAnterior,
      dobraCutaneaAxilarMedia:
        dadosDaAvaliacaoAnterior.dobraCutaneaAxilarMedia,
      dobraCutaneaPeitoral:
        dadosDaAvaliacaoAnterior.dobraCutaneaPeitoral,
      dobraCutaneaAbdominal:
        dadosDaAvaliacaoAnterior.dobraCutaneaAbdominal,
      dobraCutaneaTricipital:
        dadosDaAvaliacaoAnterior.dobraCutaneaTricipital,
      dobraCutaneaSubescapular:
        dadosDaAvaliacaoAnterior.dobraCutaneaSubescapular,
      dobraCutaneaSuprailiaca:
        dadosDaAvaliacaoAnterior.dobraCutaneaSuprailiaca,
      dobraCutaneaCoxa:
        dadosDaAvaliacaoAnterior.dobraCutaneaCoxa,
      dobraCutaneaPanturrilha:
        dadosDaAvaliacaoAnterior.dobraCutaneaPanturrilha,
      fcRepouso: dadosDaAvaliacaoAnterior.fcRepouso,
      paRepouso: dadosDaAvaliacaoAnterior.paRepouso,
    },
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
