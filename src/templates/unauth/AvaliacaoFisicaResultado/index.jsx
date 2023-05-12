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
    nome: 'Carlos',
    idade: 33,
    altura: 1.74,
    email: 'prof.carlos.aug@gmail.com',
    dataDaAvaliação: '07/05/2023',
    dataDeNascimento: '07/11/1989',
    genero: 'masculino',
    objetivoEstetico: 'Perder peso',
    pontosFracosEsteticos: 'Barriga e braços flácidos',
    pretendeCorrer: 'Sim',
    objetivosComCorrida: 'Melhorar meu condicionamento físico',
    pretendeMelhorarFlexibilidade: 'Sim',
    objetivosComFlexibilidade: 'Aliviar dores nas costas',
    comoPossoTeAjudar:
      'Espero que a consultoria me ajude a criar um plano de treino e nutrição para alcançar meus objetivos.',
    haQuantoTempoTreinaMusculacao: '3 anos',
    motivoDeParadaDaUltimaVez: 'Lesão no joelho',
    tempoDeParadaDaUltimaVez: '4 meses',
    quantidadeDeTreinosPorSemana: '4 vezes',
    horarioDeTreinoMusculacao: '19h',
    horarioDesejadoDeTreinoMusculacao: '6h',
    musculosPreferidosDeTreinoMusculacao: 'Pernas e glúteos',
    exerciciosComDificuldades: 'Supino reto',
    exerciciosDificeis: 'Stiff e agachamento livre',
    tempoExerciciosAerobios: '1 ano',
    horarioExerciciosAerobios: '7h',
    horarioPretendidoExerciciosAerobios: '20h',
    freqExerciciosAerobios: '3 vezes por semana',
    tempoExerciciosAlongamento: 'Há cerca de 6 meses',
    horarioExerciciosAlongamento: 'Às 7h da manhã',
    horarioPretendidoExerciciosAlongamento: 'Às 18h da tarde',
    ultimoTreino: 'Ontem',
    ultimoTreinoDescricao:
      'Treino de musculação com ênfase em membros inferiores',
    ultimaRefeicao: 'Café da manhã',
    tempoUltimaRefeicao: '2 horas',
    horaDeDormir: '23:00',
    horaDeAcordar: '07:00',
    qualidadeDoSono: 'Boa',
    rotinaDiariaDetalhes:
      'Acordo, tomo café da manhã, trabalho, almoço, trabalho, janto, vejo TV, durmo',
    humorDiario: 'Normal',
    estrategiasContraEstresse:
      'Pratico atividades físicas, leio, medito',
    estrategiasDeLazer: 'Assisto filmes, leio, ouço música',
    rotinaDeTrabalho:
      'Trabalho das 09:00 às 18:00, de segunda a sexta-feira',
    meioDeTransporteParaTrabalho: 'Carro',
    problemaDeSaude: 'Não',
    medicamento: 'Sim, para pressão alta',
    esteroidesAnabolicos: 'Não',
    fumaBebidasAlcoolicas: 'Não',
    frequenciaAlcool: '-',
    lesaoPassada: 'Não',
    limitacaoFisica: 'Não',
    amamentando: 'Não',
    cirurgiaPassada: 'Não',
    tempoCirurgiaPassada: '-',
    fcRepouso: '60 bpm',
    paRepouso: '120x80 mmHg',
    spO2: '98%',
    temperaturaExtremidades: '36,5°C',
    temperaturaCorporal: '36,8°C',
    menorPesoAdulto: 60,
    maiorPesoAdulto: 80,
    peso3Meses: 75,
    peso6Meses: 70,
    peso1Ano: 65,
    peso5Anos: 70,
    peso10Anos: 60,
    pesoPretendido: 72,
    altura: 1.75,
    pesoAtual: 70,
    circunferenciaDePunho: 20,
    circunferenciaDeAbdomen: 80,
    circunferenciaDePescoco: 35,
    circunferenciaDeCintura: 60,
    circunferenciaDeQuadril: 90,
    circunferenciaDePanturrilha: 40,
    circunferenciaBracoRelaxado: 25,
    circunferenciaBracoContraido: 30,
    circunferenciaTorax: 85,
    circunferenciaAntebraco: 20,
    circunferenciaCoxa: 50,
    circunferenciaTornozelo: 23,
    dobraCutaneaPeitoral: 12,
    dobraCutaneaAbdominal: 20,
    dobraCutaneaTricipital: 25,
    dobraCutaneaSubescapular: 18,
    dobraCutaneaSuprailiaca: 22,
    dobraCutaneaCoxa: 30,
    dobraCutaneaPanturrilha: 15,
    porcentagemDeGorduraBia: 15,
    massaMuscularBia: 55,
    idadeCorporal: 27,
    gorduraVisceral: 4,
    planejaRefeicoes: 'Sim, na maioria da vezes',
    preparaRefeicoes: 'As vezes a mãe',
    numeroRefeicoes: 6,
    quantidadeAgua: 6,
    horarioFome: 'jantar',
    alimentoBeliscar: 'biscoito',
    alimentosFrequentes: 'Leite',
    restricaoAlimentar: 'camarão',
    velocidadeMastigar: 'devagar',
    usaSuplementos: 'não',
    consumoAlimentarDiario:
      '- Café da manhã: 2 fatias de pão integral com queijo branco, 1 xícara de chá de hortelã, 1 banana.\n- Lanche da manhã: 1 maçã, 5 castanhas do Pará.\n- Almoço: 1 prato de arroz integral, 1 concha de feijão, 1 filé de frango grelhado, salada de alface e tomate.\n- Lanche da tarde: 1 pote de iogurte natural com frutas vermelhas.\n- Jantar: 1 prato de sopa de legumes, 1 fatia de pão integral com patê de berinjela.\n- Ceia: 1 xícara de chá de camomila.',
    habitosFinaisDeSemana:
      'Costumo fazer uma refeição fora de casa, geralmente pizza, no sábado à noite. No domingo, costumo tomar café da manhã mais tarde e comer um lanche da tarde caprichado, como um pão de queijo com café com leite.',
    desvioPostural: 'escoliose',
    informacoesAdicionais:
      'Quero ficar que nem o ronnie coleman',
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
    100; // Cálculo de Gordura em KG Pollock 7 Dobras

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
