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
    nome: 'David Soares Silva',
    idade: 41,
    altura: 1.78,
    email: 'davisoarescdm@gmail.com',
    dataDaAvaliação: '06/05/2023',
    dataDeNascimento: '03/10/1981',
    genero: 'masculino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Antebraço e panturrilha',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: 'Saúde',
    pretendeMelhorarFlexibilidade: 'Sim',
    objetivosComFlexibilidade: 'Saúde',
    comoPossoTeAjudar: '',
    haQuantoTempoTreinaMusculacao: 'Há 3 meses',
    motivoDeParadaDaUltimaVez: 'Incompatibilidade com trabalho',
    tempoDeParadaDaUltimaVez: '',
    quantidadeDeTreinosPorSemana: '4 vezes',
    horarioDeTreinoMusculacao: '04h00',
    horarioDesejadoDeTreinoMusculacao: '04h00',
    musculosPreferidosDeTreinoMusculacao: '',
    exerciciosComDificuldades: 'Pesos livres',
    tempoExerciciosAerobios: 'Indefinido',
    horarioExerciciosAerobios: 'Horário do treino',
    horarioPretendidoExerciciosAerobios: 'Horário do treino',
    freqExerciciosAerobios: 'Indefinido',
    tempoExerciciosAlongamento: '',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '12 horas antes',
    ultimoTreinoDescricao:
      'Treino de musculação com ênfase em membros inferiores',
    ultimaRefeicao: 'Gelatina',
    tempoUltimaRefeicao: 'há 3 horas',
    horaDeDormir: 'Sem padrão por causa do trabalho',
    horaDeAcordar: 'Sem padrão por causa do trabalho',
    qualidadeDoSono: 'Ruim',
    rotinaDiariaDetalhes: '',
    huorDiario: 'Ansioso',
    estrategiasContraEstresse: 'Beliscar',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: 'Sedentária',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Sem problema de saúde',
    tomaMedicamento: 'Não toma medicamentos',
    esteroidesAnabolicos: 'Não usa esteróides',
    frequenciaAlcool: 'Não bebe',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Não',
    limitacaoFisica: 'Sem limitações',
    amamentando: '',
    cirurgiaPassada: 'Ginecomastia e hérnia inguinal',
    tempoCirurgiaPassada: 'Há + de 6 anos',
    fcRepouso: '75 bpm',
    paRepouso: '140x70 mmHg',
    spO2: '98%',
    temperaturaExtremidades: '',
    temperaturaCorporal: '',
    menorPesoAdulto: 88,
    maiorPesoAdulto: 101.3,
    peso3Meses: 97,
    peso6Meses: 97,
    peso1Ano: 94,
    peso5Anos: 92,
    peso10Anos: 90,
    pesoPretendido: 72,
    pesoAtual: 101.3,
    circunferenciaDePunho: 18,
    circunferenciaDeAbdomen: 113,
    circunferenciaDePescoco: 41,
    circunferenciaDeCintura: 104,
    circunferenciaDeQuadril: 116,
    circunferenciaDePanturrilha: 40,
    circunferenciaBracoRelaxado: 39,
    circunferenciaBracoContraido: 42,
    circunferenciaTorax: 113,
    circunferenciaAntebraco: 32,
    circunferenciaCoxa: 61,
    circunferenciaTornozelo: 24,
    dobraCutaneaPeitoral: 12,
    dobraCutaneaAbdominal: 38,
    dobraCutaneaTricipital: 11,
    dobraCutaneaSubescapular: 22,
    dobraCutaneaSuprailiaca: 23,
    dobraCutaneaCoxa: 17,
    dobraCutaneaPanturrilha: 15,
    porcentagemDeGorduraBia: 32.2,
    massaMuscularBia: 31.5,
    idadeCorporal: 69,
    gorduraVisceral: 15,
    planejaRefeicoes: 'Sim, sempre',
    preparaRefeicoes: 'Sim',
    numeroRefeicoes: 7,
    quantidadeAgua: 15,
    horarioFome: 'Almoço',
    alimentoBeliscar: 'Doces (chocolate, sobremesas, bolos)',
    alimentosFrequentes: 'Arroz, feijão, carne ou peixe',
    restricaoAlimentar: 'Nenhuma',
    velocidadeMastigar: '',
    usaSuplementos: 'Creatina, Whey Proterin e cafeína',
    consumoAlimentarDiario: '',
    habitosFinaisDeSemana:
      'Não muda os hábitos alimentares finais de semana',
    desvioPostural: 'Não possui',
    informacoesAdicionais:
      'Trabalha embarcado durante uma semana',
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

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobras =
    peitoral +
    abdomen +
    triceps +
    subescapular +
    suprailiaca +
    coxa +
    panturrilha;

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

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Pré Antropometria</Title>
      <InformacoesPreAvaliacao
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Sobre a Rotina</Title>
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

      {dadosDaAvaliacaoAtual.RecordatorioAlimentar ? (
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
