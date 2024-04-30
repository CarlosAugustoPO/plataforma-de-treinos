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
    nome: 'Marcos Alonso Alves de Oliveira',
    idade: 33,
    altura: 1.83,
    email: 'tecnico.marcos@uol.com.br',
    dataDaAvaliação: '10/03/2024',
    dataDeNascimento: '22/11/1990',
    genero: 'masculino',
    objetivoEstetico: 'Emagrecimento',
    pontosFracosEsteticos: 'Gordura corporal',
    pretendeCorrer: 'Não',
    objetivosComCorrida: '',
    pretendeMelhorarFlexibilidade: 'sim',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '1 mes pós cirurgia',
    motivoDeParadaDaUltimaVez:
      'Compromissos da rotina profissional',
    tempoDeParadaDaUltimaVez: '5 anos',
    quantidadeDeTreinosPorSemana: '4 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '4 vezes',
    horarioDeTreinoMusculacao: '06h00 ou 18h00',
    horarioDesejadoDeTreinoMusculacao: '06h00 ou 18h00',
    musculosPreferidosDeTreinoMusculacao: 'Superiores',
    exerciciosComDificuldades:
      'Leg press [medo pós cirurgia bariatrica]',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '06h00 ou 18h00',
    horarioPretendidoExerciciosAerobios: '06h00 ou 18h00',
    freqExerciciosAerobios: '7 vezes',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: 'Sessão extra',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '15 horas antes da avaliação física',
    ultimoTreinoDescricao: 'Costas',
    ultimaRefeicao: 'Yogurte e meio misto quente',
    tempoUltimaRefeicao: '30 minutis',
    horaDeDormir: '10h00 ou 22h00',
    horaDeAcordar: '06h00 ou 16h00',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes:
      'Trabalho >  Academia 4x > Estudo > Dorme',
    humorDiario: 'ansioso',
    estrategiasContraEstresse: '',
    estrategiasDeLazer:
      'Tocar bateria, tocar baixo, ver séries, jogar xadrez',
    rotinaDeTrabalho:
      'Trabalho ativo com caminhadas de a 8km em 12h',
    meioDeTransporteParaTrabalho: 'Fretado',
    problemasDeSaude:
      'Varizes, apneia, ansiedade depressiva, gordura no fígado, dislipidemia e obesidade',
    tomaMedicamento: 'pantoprazol, mobali',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'Não ingere bebidas alcoólicas',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Joelho Esquerdo',
    limitacaoFisica: 'Flexibilidade',
    amamentando: '',
    cirurgiaPassada:
      'Remoção da safena de ambas as pernas, LCA Jolho E',
    tempoCirurgiaPassada: '4 anos',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 115,
    maiorPesoAdulto: 160,
    peso3Meses: 153,
    peso6Meses: 149,
    peso1Ano: 149,
    peso5Anos: '',
    peso10Anos: 115,
    pesoPretendido: 93,
    pesoAtual: 160,
    circunferenciaDePunho: 19,
    circunferenciaDeAbdomen: 131,
    circunferenciaDePescoco: 47,
    circunferenciaDeCintura: 122,
    circunferenciaDeQuadril: 126,
    circunferenciaDePanturrilha: 52,
    circunferenciaBracoRelaxado: 38,
    circunferenciaBracoContraido: 41.5,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 32.5,
    circunferenciaCoxa: 73,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 38,
    dobraCutaneaPeitoral: 40,
    dobraCutaneaAbdominal: 51,
    dobraCutaneaTricipital: 18.5,
    dobraCutaneaSubescapular: 43,
    dobraCutaneaSuprailiaca: 41.5,
    dobraCutaneaCoxa: 38,
    dobraCutaneaPanturrilha: 22.5,
    porcentagemDeGorduraBia: 41.8,
    massaMuscularBia: 29.1,
    idadeCorporal: 43,
    gorduraVisceral: 44,
    tmb: 2806,
    planejaRefeicoes: 'Sim, acompanhamento nutricional',
    preparaRefeicoes: 'cozinheira',
    numeroRefeicoes: '4 refeições',
    quantidadeAgua: '2 a 4l por dia',
    horarioFome: 'Sem fome específica',
    alimentoBeliscar: 'Sem beliscos',
    alimentosFrequentes: 'Dieta pós bariátrica mista',
    restricaoAlimentar: 'Nenhuma',
    velocidadeMastigar: '',
    usaSuplementos: 'Whey, complexo vitaminico e psyllium',
    consumoAlimentarDiario: 'dieta pós bariatrica sólida',
    habitosFinaisDeSemana: 'por hora sem refeição lixo',
    desvioPostural: 'Escoliose, pisada pronada',
    informacoesAdicionais:
      'Realizou a cirurgia bariátrica a 45 dias',
  };
  const dadosDaAvaliacaoAnterior = {
    nome: 'Marcos Alonso Alves de Oliveira',
    idade: 33,
    altura: 1.83,
    email: 'tecnico.marcos@uol.com.br',
    dataDaAvaliação: '10/03/2024',
    dataDeNascimento: '22/11/1990',
    genero: 'masculino',
    objetivoEstetico: 'Emagrecimento',
    pontosFracosEsteticos: 'Gordura corporal',
    pretendeCorrer: 'Não',
    objetivosComCorrida: '',
    pretendeMelhorarFlexibilidade: 'sim',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: '5 meses',
    motivoDeParadaDaUltimaVez:
      'Compromissos da rotina profissional',
    tempoDeParadaDaUltimaVez: '5 anos',
    quantidadeDeTreinosPorSemana: '3 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '6 vezes',
    horarioDeTreinoMusculacao: '06h00 ou 18h00',
    horarioDesejadoDeTreinoMusculacao: '06h00 ou 18h00',
    musculosPreferidosDeTreinoMusculacao: 'Superiores',
    exerciciosComDificuldades:
      'Agachamento, hack e exercícios de lombar',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '06h00 ou 18h00',
    horarioPretendidoExerciciosAerobios: '06h00 ou 18h00',
    freqExerciciosAerobios: '3 vezes',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '36 horas antes da avaliação física',
    ultimoTreinoDescricao: 'Peitoral e costas',
    ultimaRefeicao: '400ml de sopa + whey',
    tempoUltimaRefeicao: '4h antes da avaliação física',
    horaDeDormir: '10h00 ou 22h00',
    horaDeAcordar: '06h00 ou 16h00',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes:
      'Trabalho >  Academia 3x > Estudo > Dorme',
    humorDiario: 'ansioso',
    estrategiasContraEstresse: '',
    estrategiasDeLazer:
      'Tocar bateria, tocar baixo, ver séries, jogar xadrez',
    rotinaDeTrabalho:
      'Trabalho ativo com caminhadas de a 8km em 12h',
    meioDeTransporteParaTrabalho: 'Fretado',
    problemasDeSaude:
      'Varizes, apneia, ansiedade depressiva, gordura no fígado, dislipidemia e obesidade',
    tomaMedicamento: 'Diosmin SDU',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'Não ingere bebidas alcoólicas',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Joelho Esquerdo',
    limitacaoFisica: 'Flexibilidade',
    amamentando: '',
    cirurgiaPassada:
      'Remoção da safena de ambas as pernas, LCA Jolho E',
    tempoCirurgiaPassada: '4 anos',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 115,
    maiorPesoAdulto: 160,
    peso3Meses: 153,
    peso6Meses: 149,
    peso1Ano: 149,
    peso5Anos: '',
    peso10Anos: 115,
    pesoPretendido: 93,
    pesoAtual: 160,
    circunferenciaDePunho: 20,
    circunferenciaDeAbdomen: 142,
    circunferenciaDePescoco: 52,
    circunferenciaDeCintura: 135,
    circunferenciaDeQuadril: 136.6,
    circunferenciaDePanturrilha: 54,
    circunferenciaBracoRelaxado: 44,
    circunferenciaBracoContraido: 44.5,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 35.5,
    circunferenciaCoxa: 80,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 25,
    dobraCutaneaPeitoral: 30,
    dobraCutaneaAbdominal: 52,
    dobraCutaneaTricipital: 20,
    dobraCutaneaSubescapular: 59,
    dobraCutaneaSuprailiaca: 47,
    dobraCutaneaCoxa: 55,
    dobraCutaneaPanturrilha: 10,
    porcentagemDeGorduraBia: 41.8,
    massaMuscularBia: 29.1,
    idadeCorporal: 43,
    gorduraVisceral: 44,
    tmb: 2806,
    planejaRefeicoes: 'Sim, acompanhamento nutricional',
    preparaRefeicoes: 'cozinheira',
    numeroRefeicoes: '7 refeições',
    quantidadeAgua: '4 a 5l por dia',
    horarioFome: 'A noite',
    alimentoBeliscar: 'Carne',
    alimentosFrequentes: 'Dieta pré bariátrica líquida',
    restricaoAlimentar: 'Nenhuma',
    velocidadeMastigar: '',
    usaSuplementos: 'Whey',
    consumoAlimentarDiario: 'dieta líquida pré bariatrica',
    habitosFinaisDeSemana: 'por hora sem refeição lixo',
    desvioPostural: 'Escoliose, pisada pronada',
    informacoesAdicionais:
      'Vai realizar a cirurgia bariátrica em 3 dias e está fazendo uma dieta líquida',
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
