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
    nome: 'Andressa Paiva de Oliveira',
    idade: 42,
    altura: 1.68,
    email: 'andressa.paiva@uol.com.br',
    dataDaAvaliação: '06/05/2023',
    dataDeNascimento: '26/05/1980',
    genero: 'feminino',
    objetivoEstetico: 'Definição',
    pontosFracosEsteticos: 'Barriga e dobra axilar',
    pretendeCorrer: 'Não',
    objetivosComCorrida: '',
    pretendeMelhorarFlexibilidade: 'Sim',
    objetivosComFlexibilidade: 'Saúde',
    comoPossoTeAjudar: '',
    haQuantoTempoTreinaMusculacao: 'Há mais de 1 ano',
    motivoDeParadaDaUltimaVez: 'Desânimo',
    tempoDeParadaDaUltimaVez: '',
    quantidadeDeTreinosPorSemana: '5 vezes',
    horarioDeTreinoMusculacao: '05h30',
    horarioDesejadoDeTreinoMusculacao: '05h30',
    musculosPreferidosDeTreinoMusculacao: 'Pernas e Peitoral',
    exerciciosComDificuldades: 'Afundo/Avanço',
    tempoExerciciosAerobios: 'Sem aeróbios',
    horarioExerciciosAerobios: '',
    horarioPretendidoExerciciosAerobios: '',
    freqExerciciosAerobios: '',
    tempoExerciciosAlongamento: 'Não alonga',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: 'Há mais de 24 horas',
    ultimoTreinoDescricao:
      'Treino de musculação com ênfase em membros superiores',
    ultimaRefeicao: 'Ceia - Uva e Caqui',
    tempoUltimaRefeicao: 'há 8 horas',
    horaDeDormir: '23:00',
    horaDeAcordar: '05:14',
    qualidadeDoSono: 'Ótima',
    rotinaDiariaDetalhes: '',
    huorDiario: 'Pacífico',
    estrategiasContraEstresse: 'Ficar sozinha',
    estrategiasDeLazer: '',
    rotinaDeTrabalho: 'Sedentária',
    meioDeTransporteParaTrabalho: '',
    problemasDeSaude: 'Hipotiroidismo',
    tomaMedicamento: 'Puran T4 (75mg)',
    esteroidesAnabolicos: 'Não',
    frequenciaAlcool: 'sim, socialmente',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Não',
    limitacaoFisica: 'Dor na lombar exporádica durante o dia',
    amamentando: 'Amamentou 9 anos atrás',
    cirurgiaPassada:
      'Laqueadura, 3 anos atrás. Cesária, 9 anos atrás',
    tempoCirurgiaPassada: 'Há 3 anos',
    fcRepouso: '75 bpm',
    paRepouso: '120x90 mmHg',
    spO2: '95%',
    temperaturaExtremidades: 'Quente',
    temperaturaCorporal: '',
    menorPesoAdulto: 65,
    maiorPesoAdulto: 110,
    peso3Meses: 91.5,
    peso6Meses: 90,
    peso1Ano: 88,
    peso5Anos: 80,
    peso10Anos: 75,
    pesoPretendido: 72,
    pesoAtual: 92.5,
    circunferenciaDePunho: 18.5,
    circunferenciaDeAbdomen: 105,
    circunferenciaDePescoco: 38.5,
    circunferenciaDeCintura: 95,
    circunferenciaDeQuadril: 117.5,
    circunferenciaDePanturrilha: 41,
    circunferenciaBracoRelaxado: 34.5,
    circunferenciaBracoContraido: 35.5,
    circunferenciaTorax: 96,
    circunferenciaAntebraco: 26,
    circunferenciaCoxa: 63,
    circunferenciaTornozelo: 24,
    dobraCutaneaPeitoral: 12,
    dobraCutaneaAbdominal: 31,
    dobraCutaneaTricipital: 25,
    dobraCutaneaSubescapular: 27,
    dobraCutaneaSuprailiaca: 31,
    dobraCutaneaCoxa: 40,
    dobraCutaneaPanturrilha: 30,
    porcentagemDeGorduraBia: 47.9,
    massaMuscularBia: 22.8,
    idadeCorporal: 60,
    gorduraVisceral: 9,
    planejaRefeicoes: 'Sim, sempre',
    preparaRefeicoes: 'Sim, as vezes a mãe',
    numeroRefeicoes: 3,
    quantidadeAgua: 8,
    horarioFome: 'pós treino',
    alimentoBeliscar: 'doces',
    alimentosFrequentes: 'Arroz e feijão',
    restricaoAlimentar: 'camarão',
    velocidadeMastigar: '',
    usaSuplementos: 'Alcachofra, Mega Ulton',
    consumoAlimentarDiario:
      '- Café da manhã: Café com leite em pó (molico) com açucar demerara, média sem miolo ou pão integral. \n- Almoço: 1 prato de arroz integral, feijão, frango - Lanche da tarde: 1 fruta.\n- Jantar: 1 danone, uma fruta ou um pão integral. Obs: Ás vezes toma chá de pessêgo',
    habitosFinaisDeSemana:
      'Costuma fazer uma refeição fora da rotina, geralmente pizza',
    desvioPostural: 'Não possui',
    informacoesAdicionais:
      'Faz drenagem 2 vezes na semana, faz um treino em casa diariamente, de segunda a segunda. Não fará apenas quando estiver com dor.',
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
  const densidadeCorporal =
    1.112 -
    0.00043499 * somaDobras +
    0.00000055 * Math.pow(somaDobras, 2) -
    0.0001284 * dadosDaAvaliacaoAtual.idade;
  const pollock7dobras = (4.95 / densidadeCorporal - 4.5) * 100;
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

      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Recordatório Alimentar</Title>
      <RecordatorioAlimentar
        dadosDaAvaliacao={dadosDaAvaliacaoAtual}
      />

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
