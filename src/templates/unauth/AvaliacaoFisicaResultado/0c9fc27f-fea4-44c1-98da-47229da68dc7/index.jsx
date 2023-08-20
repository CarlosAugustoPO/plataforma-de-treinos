import React from 'react';
import GraficoPesoCorporal from 'src/components/GraficoPesoCorporal';
import GraficoPollock7Dobras from 'src/components/GraficoPollock7Dobras';
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
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';
import Box from '@mui/material/Box';

function ResultadoAvaliacaoFisica() {
  const dadosDaAvaliacaoAtual = {
    nome: 'Denis Wilson Santos',
    idade: 43,
    altura: 1.63,
    email: 'deniswilsonsantos@gmail.com',
    dataDaAvaliação: '13/07/2023',
    dataDeNascimento: '07/10/1979',
    genero: 'masculino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Barriga',
    pretendeCorrer: '',
    objetivosComCorrida: '',
    pretendeMelhorarFlexibilidade: '',
    objetivosComFlexibilidade: '',
    comoPossoTeAjudar: '',
    haQuantoTempoTreinaMusculacao: '20 dias',
    motivoDeParadaDaUltimaVez: '',
    tempoDeParadaDaUltimaVez: '',
    quantidadeDeTreinosPorSemana: '6 vezes',
    quantidadeDeTreinosPorSemanaPretendido: '6 vezes',
    horarioDeTreinoMusculacao: '04h00',
    horarioDesejadoDeTreinoMusculacao: '04h00',
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
    ultimaRefeicao: '',
    tempoUltimaRefeicao: '',
    horaDeDormir: '',
    horaDeAcordar: '',
    qualidadeDoSono: '',
    rotinaDiariaDetalhes: '',
    humorDiario: '',
    estrategiasContraEstresse: '',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: '',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: '',
    tomaMedicamento: 'Não toma medicamentos',
    usaEsteroides: 'Não, mas pretende começar',
    frequenciaAlcool: 'Socialmente',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Tornozelo',
    limitacaoFisica:
      'Dores no joelho (suspeita de baixa flexibilidade)',
    amamentando: '',
    cirurgiaPassada: 'Hérnia umbilical e femural',
    tempoCirurgiaPassada: '',
    fcRepouso: '',
    paRepouso: '',
    spO2: '',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 46,
    maiorPesoAdulto: 63,
    peso3Meses: '',
    peso6Meses: '',
    peso1Ano: '',
    peso5Anos: '',
    peso10Anos: '',
    pesoPretendido: 61,
    pesoAtual: 61.7,
    circunferenciaDePunho: 15,
    circunferenciaDeAbdomen: 81,
    circunferenciaDePescoco: 31.5,
    circunferenciaDeCintura: 71,
    circunferenciaDeQuadril: 106,
    circunferenciaDePanturrilha: 35,
    dobraCutaneaAxilarMedia: 5,
    circunferenciaBracoRelaxado: 28,
    circunferenciaBracoContraido: 30,
    circunferenciaTorax: 91,
    circunferenciaAntebraco: 22.5,
    circunferenciaCoxa: 57,
    circunferenciaTornozelo: 20,
    dobraCutaneaPeitoral: 16,
    dobraCutaneaAbdominal: 16,
    dobraCutaneaTricipital: 14,
    dobraCutaneaSubescapular: 13,
    dobraCutaneaSuprailiaca: 14,
    dobraCutaneaCoxa: 32,
    dobraCutaneaPanturrilha: 15,
    porcentagemDeGorduraBia: '',
    massaMuscularBia: 27.3,
    idadeCorporal: '',
    gorduraVisceral: '',
    planejaRefeicoes: '',
    preparaRefeicoes: '',
    numeroRefeicoes: '',
    quantidadeAgua: '',
    horarioFome: '',
    alimentoBeliscar: '',
    alimentosFrequentes: '',
    restricaoAlimentar: 'Leite',
    velocidadeMastigar: '',
    usaSuplementos: 'Creatina e Whey Protein',
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
  const pesoGordo =
    (pollock7dobras / 100) * dadosDaAvaliacaoAtual.pesoAtual;
  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagro = dadosDaAvaliacaoAtual.pesoAtual - pesoGordo;

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
      pesoMagro: pesoMagro.toFixed(1),
      pesoGordo: pesoGordo.toFixed(1),
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

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Pessoais</Title>
      <InformacoesPessoais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph mt={2}>
        Resumo da Avaliação Física
      </Title>
      <TabelaResumoAF dadosDoGrafico={dadosDoGrafico} />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Objetivos e Expectativas</Title>
      <ObjetivosExpectativas
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Sobre o Treino</Title>
      <InformacoesSobreOTreino
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesPreAvaliacao
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <InformacoesSobreARotina
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Sobre a Saúde</Title>
      <InformacoesSobreASaude
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Histórico de Peso</Title>
      <HistoricoDePeso
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Resumo Antropométrico</Title>
      <ResumoAntropometrico
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Circunferências</Title>
      <Circunferencias
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Dobras Cutâneas</Title>
      <DobrasCutaneas dadosDaAvaliacao={dadosDaAvaliacaoAtual} />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Analíse Morfológica</Title>
      <AnaliseMorfologica
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Nutricionais</Title>
      <InformacoesNutricionais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      {dadosDaAvaliacaoAtual.consumoAlimentarDiario ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph>Recordatório Alimentar</Title>
          <RecordatorioAlimentar
            dadosDaAvaliacao={dadosDaAvaliacaoAtual}
          />
        </>
      ) : null}

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Analíse Postural</Title>
      <AnalisePostural
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Adicionais</Title>
      <InformacoesAdicionais
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph mt={2}>
        Gráfico de Peso Corporal
      </Title>
      <GraficoPesoCorporal dadosDoGrafico={dadosDoGrafico} />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph mt={2}>
        Gráfico do Pollock 7 Dobras
      </Title>
      <GraficoPollock7Dobras dadosDoGrafico={dadosDoGrafico} />
    </Box>
  );
}

export default ResultadoAvaliacaoFisica;
