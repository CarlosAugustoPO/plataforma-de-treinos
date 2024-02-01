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
  const dadosDaAvaliacaoAnterior = {
    nome: 'Adma Vieira',
    idade: 41,
    altura: 1.65,
    email: 'vieira.adma@gmail.com',
    dataDaAvaliação: '13/01/2024',
    dataDeNascimento: '23/10/1982',
    genero: 'feminino',
    objetivoEstetico: 'Emagrecimento',
    pontosFracosEsteticos: 'Celulite',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: '5km',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '1 mês',
    motivoDeParadaDaUltimaVez:
      'Dificuldades com a rotina e gerenciamento de tempo',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: '3 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '6 vezes',
    horarioDeTreinoMusculacao: '05h00',
    horarioDesejadoDeTreinoMusculacao: '22h00 ou 10h00',
    musculosPreferidosDeTreinoMusculacao: 'Membros inferiores',
    exerciciosComDificuldades: 'Membros superiores',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '24 horas antes da avaliação',
    ultimoTreinoDescricao: 'Canoagem',
    ultimaRefeicao: 'X-salada + suco de maracujá',
    tempoUltimaRefeicao: '40 minutos antes da avaliação',
    horaDeDormir: '00:00',
    horaDeAcordar: '06:30',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: 'sedentária',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Hipovitaminose',
    tomaMedicamento: 'Reconter',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'Não ingere bebidas alcoólicas',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'hide',
    limitacaoFisica: 'Sem limitações',
    amamentando: '',
    cirurgiaPassada: 'Retirada de mioma há 4 anos atrás',
    tempoCirurgiaPassada: '4 anos atrás',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 72,
    maiorPesoAdulto: 90,
    peso3Meses: 74,
    peso6Meses: '',
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 72,
    pesoAtual: 87.4,
    circunferenciaDePunho: 16.5,
    circunferenciaDeAbdomen: 106,
    circunferenciaDePescoco: 34,
    circunferenciaDeCintura: 90,
    circunferenciaDeQuadril: 120,
    circunferenciaDePanturrilha: 41.5,
    circunferenciaBracoRelaxado: 33,
    circunferenciaBracoContraido: 34,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 25.5,
    circunferenciaCoxa: 62,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 31,
    dobraCutaneaPeitoral: 16,
    dobraCutaneaAbdominal: 31,
    dobraCutaneaTricipital: 32,
    dobraCutaneaSubescapular: 33,
    dobraCutaneaSuprailiaca: 33,
    dobraCutaneaCoxa: 57,
    dobraCutaneaPanturrilha: 29,
    porcentagemDeGorduraBia: 47.5,
    massaMuscularBia: 22.7,
    idadeCorporal: 59,
    gorduraVisceral: 9,
    tmb: 1563,
    planejaRefeicoes: '',
    preparaRefeicoes: '',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: '',
    restricaoAlimentar: '',
    velocidadeMastigar: '',
    usaSuplementos: 'Creatina, Glutamina, Complexo Vitamínico',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais:
      'Além da musculação pratica canogaem, krav maga e pilates',
  };
  const dadosDaAvaliacaoAtual = {
    nome: 'Adma Vieira',
    idade: 41,
    altura: 1.65,
    email: 'vieira.adma@gmail.com',
    dataDaAvaliação: '28/01/2024',
    dataDeNascimento: '23/10/1982',
    genero: 'feminino',
    objetivoEstetico: 'Emagrecimento',
    pontosFracosEsteticos: 'Celulite',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: '5km',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '1 mês',
    motivoDeParadaDaUltimaVez:
      'Dificuldades com a rotina e gerenciamento de tempo',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: '6 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '6 vezes',
    horarioDeTreinoMusculacao: '05h00',
    horarioDesejadoDeTreinoMusculacao: '22h00 ou 10h00',
    musculosPreferidosDeTreinoMusculacao: 'Membros inferiores',
    exerciciosComDificuldades: 'Membros superiores',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '48 horas antes da avaliação',
    ultimoTreinoDescricao: 'Membros superiores',
    ultimaRefeicao: 'Salada, carne de panela e quibe assado',
    tempoUltimaRefeicao: '120 minutos antes da avaliação',
    horaDeDormir: '00:00',
    horaDeAcordar: '07:30',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: 'sedentária',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Hipovitaminose',
    tomaMedicamento: 'Reconter',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'Não ingere bebidas alcoólicas',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'hide',
    limitacaoFisica: 'Sem limitações',
    amamentando: '',
    cirurgiaPassada: 'Retirada de mioma há 4 anos atrás',
    tempoCirurgiaPassada: '4 anos atrás',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 72,
    maiorPesoAdulto: 90,
    peso3Meses: 74,
    peso6Meses: '',
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 72,
    pesoAtual: 84.9,
    circunferenciaDePunho: 16.5,
    circunferenciaDeAbdomen: 106,
    circunferenciaDePescoco: 33,
    circunferenciaDeCintura: 88.5,
    circunferenciaDeQuadril: 117,
    circunferenciaDePanturrilha: 41.5,
    circunferenciaBracoRelaxado: 32.5,
    circunferenciaBracoContraido: 33,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 25,
    circunferenciaCoxa: 64,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 28,
    dobraCutaneaPeitoral: 16,
    dobraCutaneaAbdominal: 30,
    dobraCutaneaTricipital: 28,
    dobraCutaneaSubescapular: 28,
    dobraCutaneaSuprailiaca: 30,
    dobraCutaneaCoxa: 55,
    dobraCutaneaPanturrilha: 28,
    porcentagemDeGorduraBia: 47,
    massaMuscularBia: 22.8,
    idadeCorporal: 58,
    gorduraVisceral: 9,
    tmb: 1554,
    planejaRefeicoes: '',
    preparaRefeicoes: '',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: '',
    restricaoAlimentar: '',
    velocidadeMastigar: '',
    usaSuplementos: 'Creatina, Glutamina, Complexo Vitamínico',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais:
      'Além da musculação pratica canogaem, krav maga e pilates',
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
