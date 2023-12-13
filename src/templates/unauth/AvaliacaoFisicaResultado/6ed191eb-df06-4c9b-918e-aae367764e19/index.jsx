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
    nome: 'Thais Castro',
    idade: 39,
    altura: 1.55,
    email: 'thaiscastro116@gmail.com',
    dataDaAvaliação: '10/12/2023',
    dataDeNascimento: '16/09/1984',
    genero: 'feminino',
    objetivoEstetico: 'Emagrecimento',
    pontosFracosEsteticos:
      'Aumenta da circunferência de cintura/abdomên e diminuição da qualidade de membros inferiores',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: 'Voltar a correr provas de 5 e 10km',
    pretendeMelhorarFlexibilidade: 'Não',
    objetivosComFlexibilidade: 'hide',
    comoPossoTeAjudar: 'hide',
    haQuantoTempoTreinaMusculacao: 'Tá sem treinar',
    motivoDeParadaDaUltimaVez: 'Tratamento para gestação',
    tempoDeParadaDaUltimaVez: 'hide',
    quantidadeDeTreinosPorSemana: 'Nenhuma',
    quantidadeDeTreinosPorSemanaPretendido: '4 vezes',
    horarioDeTreinoMusculacao: '',
    horarioDesejadoDeTreinoMusculacao:
      'As vezes de manhã, as vezes de noite',
    musculosPreferidosDeTreinoMusculacao: '',
    exerciciosComDificuldades: '',
    tempoExerciciosAerobios: '',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '',
    ultimoTreinoDescricao: '',
    ultimaRefeicao: 'Pão com manteiga e café preto',
    tempoUltimaRefeicao: '2 horas atrás',
    horaDeDormir: '00:30',
    horaDeAcordar: '06:30',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Hipotireoidismo',
    tomaMedicamento: 'Levoid',
    usaEsteroides: 'Não',
    frequenciaAlcool: '1x/Semana',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'hide',
    limitacaoFisica: 'Não',
    amamentando: 'Sim',
    cirurgiaPassada: 'Cesariana',
    tempoCirurgiaPassada: 'Há 10 meses',
    fcRepouso: 'hide',
    paRepouso: 'hide',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 50,
    maiorPesoAdulto: 60,
    peso3Meses: '',
    peso6Meses: 60,
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 53,
    pesoAtual: 53,
    circunferenciaDePunho: 14,
    circunferenciaDeAbdomen: 90.5,
    circunferenciaDePescoco: 31,
    circunferenciaDeCintura: 74,
    circunferenciaDeQuadril: 105.5,
    circunferenciaDePanturrilha: 35,
    circunferenciaBracoRelaxado: 29,
    circunferenciaBracoContraido: 30,
    circunferenciaTorax: 'hide',
    circunferenciaAntebraco: 22.5,
    circunferenciaCoxa: 54.5,
    circunferenciaTornozelo: 'hide',
    dobraCutaneaPeitoral: 19,
    dobraCutaneaAbdominal: 23,
    dobraCutaneaTricipital: 22,
    dobraCutaneaSubescapular: 17,
    dobraCutaneaSuprailiaca: 14,
    dobraCutaneaCoxa: 34,
    dobraCutaneaPanturrilha: 17,
    dobraCutaneaAxilarMedia: 9,
    porcentagemDeGorduraBia: 40.4,
    massaMuscularBia: 22.5,
    idadeCorporal: 43,
    gorduraVisceral: 6,
    tmb: 1261,
    planejaRefeicoes: '',
    preparaRefeicoes: 'Mãe que prepara',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: 'Arroz, Feijão e Carne',
    restricaoAlimentar: 'Não',
    velocidadeMastigar: '',
    usaSuplementos: 'Não',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana: '',
    desvioPostural: '',
    informacoesAdicionais: '',
  };

  const peitoral = dadosDaAvaliacaoAtual.dobraCutaneaPeitoral;
  const abdomen = dadosDaAvaliacaoAtual.dobraCutaneaAbdominal;
  const triceps = dadosDaAvaliacaoAtual.dobraCutaneaTricipital;
  const subescapular =
    dadosDaAvaliacaoAtual.dobraCutaneaSubescapular;
  const suprailiaca =
    dadosDaAvaliacaoAtual.dobraCutaneaSuprailiaca;
  const coxa = dadosDaAvaliacaoAtual.dobraCutaneaCoxa;
  const panturrilha =
    dadosDaAvaliacaoAtual.dobraCutaneaPanturrilha;
  const axilarMedia =
    dadosDaAvaliacaoAtual.dobraCutaneaAxilarMedia;

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobras =
    peitoral +
    abdomen +
    triceps +
    subescapular +
    suprailiaca +
    coxa +
    (axilarMedia ? axilarMedia : panturrilha);

  const calcularDensidadeCorporal = (dadosDaAvaliacaoAtual) => {
    var genero = dadosDaAvaliacaoAtual.genero;

    if (genero === 'masculino') {
      const densidadeCorporal =
        1.112 -
        0.00043499 * somaDobras +
        0.00000055 * Math.pow(somaDobras, 2) -
        0.0002882 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporal;
    } else if (genero === 'feminino') {
      const densidadeCorporal =
        1.097 -
        0.00046971 * somaDobras +
        0.00000056 * Math.pow(somaDobras, 2) -
        0.00012828 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporal;
    } else {
      const densidadeCorporal =
        1.097 -
        0.00046971 * somaDobras +
        0.00000056 * Math.pow(somaDobras, 2) -
        0.00012828 * dadosDaAvaliacaoAtual.idade;
      return densidadeCorporal;
    }
  };

  const pollock7dobras =
    (4.95 / calcularDensidadeCorporal(dadosDaAvaliacaoAtual) -
      4.5) *
    100;
  // Cálculo de Gordura em KG Pollock 7 Dobras
  const pesoGordoAtual =
    (pollock7dobras / 100) * dadosDaAvaliacaoAtual.pesoAtual;
  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagroAtual =
    dadosDaAvaliacaoAtual.pesoAtual - pesoGordoAtual;

  const calcularIMC = (altura, peso) => {
    return (peso / (altura * altura)).toFixed(1);
  };

  const imcAtual = calcularIMC(
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
      pollock7dobras: pollock7dobras.toFixed(1),
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
