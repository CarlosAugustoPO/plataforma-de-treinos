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
    nome: 'Ana Maria de Andrade',
    idade: 48,
    altura: 1.58,
    celular: '+55 13 99177-3971',
    email: 'ana-andrade15@hotmail.com',
    dataDaAvaliação: '29/04/2023',
    dataDeNascimento: '18/08/1975',
    genero: 'feminino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Flanco, Barriga e Braços',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: 'Provas curtas',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: 'Não treina',
    motivoDeParadaDaUltimaVez: 'Monotonia',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: 'Nenhuma',
    quantidadeDeTreinosPorSemanaPretendido: '2 vezes',
    horarioDeTreinoMusculacao: 'hide',
    horarioDesejadoDeTreinoMusculacao: '21h00',
    musculosPreferidosDeTreinoMusculacao: 'hide',
    exerciciosComDificuldades: 'hide',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '72 horas atrás',
    ultimoTreinoDescricao: 'PPL - Empurra',
    ultimaRefeicao: 'Arroz, feijão e carne',
    tempoUltimaRefeicao: '3 horas antes de avaliação',
    horaDeDormir: '00:00',
    horaDeAcordar: '05:00',
    qualidadeDoSono: 'Regular',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Fibromialgia e Síndrome do Pânico',
    tomaMedicamento: 'Lexotan e pregabalina',
    usaEsteroides: 'Não',
    frequenciaAlcool: 'Raramente',
    frequenciaFumo: 'Diária',
    lesaoPassada: 'hide',
    limitacaoFisica: 'hide',
    amamentando: '',
    cirurgiaPassada: 'Lipoaspiração e Abdominoplastia',
    tempoCirurgiaPassada: '10 anos atrás',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 57,
    maiorPesoAdulto: 70,
    peso3Meses: '',
    peso6Meses: 63,
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 60,
    pesoAtual: 68.6,
    porcentagemDeGorduraBia: 37.1,
    massaMuscularBia: 27.8,
    idadeCorporal: 55,
    gorduraVisceral: 8,
    tmb: 1378,
    circunferenciaDePunho: 16,
    circunferenciaDeAbdomen: 90,
    circunferenciaDePescoco: 35,
    circunferenciaDeCintura: 86,
    circunferenciaDeQuadril: 103,
    circunferenciaDePanturrilha: 36,
    circunferenciaBracoRelaxado: 31,
    circunferenciaBracoContraido: 33,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 26,
    circunferenciaCoxa: 53,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaAxilarMedia: 14,
    dobraCutaneaPeitoral: 17,
    dobraCutaneaAbdominal: 17,
    dobraCutaneaTricipital: 27.5,
    dobraCutaneaSubescapular: 35.5,
    dobraCutaneaSuprailiaca: 23,
    dobraCutaneaCoxa: 43,
    dobraCutaneaPanturrilha: 14,
    planejaRefeicoes: 'Não',
    preparaRefeicoes: 'Sim',
    numeroRefeicoes: '5',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: 'Bolacha e bolinho de chocolate/milho',
    restricaoAlimentar: 'Nenhuma',
    velocidadeMastigar: '',
    usaSuplementos: 'Não',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais: '',
  };
  const dadosDaAvaliacaoAnterior = {};
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
