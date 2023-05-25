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
    nome: 'Renato Soares Vicente',
    idade: 49,
    altura: 1.73,
    email: 'dr.renatosoaresvicente@gmail.com',
    telefone: '13991490226',
    dataDaAvaliação: '22/05/2023',
    dataDeNascimento: '12/12/1973',
    genero: 'masculino',
    objetivoEstetico: 'Hipertrofia',
    pontosFracosEsteticos: 'Abdome, Coxa',
    pretendeCorrer: 'Não',
    objetivosComCorrida: 'Estético',
    pretendeMelhorarFlexibilidade: 'Sim',
    objetivosComFlexibilidade: 'Melhorar execução de exercícios',
    comoPossoTeAjudar: '',
    haQuantoTempoTreinaMusculacao: 'Há mais de 1 ano',
    motivoDeParadaDaUltimaVez:
      'Problema na coluna e dor e crise depressiva',
    tempoDeParadaDaUltimaVez: 'de 2018 a 2021',
    quantidadeDeTreinosPorSemana: '6-7 vezes',
    horarioDeTreinoMusculacao: '10h30',
    horarioDesejadoDeTreinoMusculacao: '12h00',
    musculosPreferidosDeTreinoMusculacao: 'Peito, Ombro',
    exerciciosComDificuldades: 'Agachamento, Remada e qualquer outro exercício que coloque sobrecarga na coluna',
    tempoExerciciosAerobios: '20min',
    horarioExerciciosAerobios: 'Horário do treino de musculação junto com pernas',
    horarioPretendidoExerciciosAerobios:
      'Horário do treino de musculação',
    freqExerciciosAerobios: '2x por semana',
    tempoExerciciosAlongamento: 'não prática',
    horarioExerciciosAlongamento: '',
    horarioPretendidoExerciciosAlongamento: '',
    ultimoTreino: '2 dias antes',
    ultimoTreinoDescricao:
      'Treino de musculação com ênfase em membros inferiores',
    ultimaRefeicao: 'Banana',
    tempoUltimaRefeicao: 'há 30 minutos',
    horaDeDormir: '23:30',
    horaDeAcordar: '06:30',
    qualidadeDoSono: 'Ótima com zolpidem,  porém mente muito ativa vai tentar trocar por melatonina',
    rotinaDiariaDetalhes:
      'Acorda, come, atende pacientes, faz um lanche de manhã. para perto do alomço para fazer um treino, almoça, volta a atender, faz um lanche, segunda e quanta faz pilates, pretende fazer krav maga terça e quinta, janta, estuda e dorme',
    humorDiario: 'Ansiedade',
    estrategiasContraEstresse:
      'Ocupação',
    estrategiasDeLazer: 'Sem nada',
    tabalhaCom$: 'Dentista',
    rotinaDeTrabalho: 'Sedentária',
    meioDeTransporteParaTrabalho: 'Carro',
    problemasDeSaude: 'Colesterol',
    tomaMedicamento: 'rusovas 10mg, dorflex quase diariamente',
    usaEsteroides: 'Primobolan (tem + 20 unidades), propionato de testosterona, Clomifeno 60MG, Gel de testosterona, desde de agosto',
    frequenciaAlcool: 'As vezes no final de semana, bem pouco',
    frequenciaFumo: 'Não fuma',
    lesaoPassada: 'Lombar e Toraxica em 2021',
    limitacaoFisica:
      'Cervical as vezes sente dor',
    amamentando: '',
    cirurgiaPassada: 'colocou uma tela',
    tempoCirurgiaPassada: '2013',
    fcRepouso: '61 bpm',
    paRepouso: '120/70',
    spO2: '98',
    temperaturaExtremidades: 'Quente',
    temperaturaCorporal: '',
    menorPesoAdulto: 72,
    maiorPesoAdulto: 79,
    peso3Meses: 75,
    peso6Meses: 75,
    peso1Ano: 75,
    peso5Anos: 75,
    peso10Anos: 75,
    pesoPretendido: 61,
    pesoAtual: 75.1,
    circunferenciaDePunho: 16.5,
    circunferenciaDeAbdomen: 87,
    circunferenciaDePescoco: 38,
    circunferenciaDeCintura: 84,
    circunferenciaDeQuadril: 98,
    circunferenciaDePanturrilha: 36,
    circunferenciaBracoRelaxado: 34.5,
    circunferenciaBracoContraido: 37,
    circunferenciaTorax: 101,
    circunferenciaAntebraco: 29,
    circunferenciaCoxa: 54,
    circunferenciaTornozelo: 22,
    dobraCutaneaPeitoral: 8,
    dobraCutaneaAbdominal: 20,
    dobraCutaneaTricipital: 4,
    dobraCutaneaSubescapular: 14,
    dobraCutaneaSuprailiaca: 8,
    dobraCutaneaCoxa: 14,
    dobraCutaneaPanturrilha: 15,
    dobraAxilarMedia: 5,
    porcentagemDeGorduraBia: '18.3%',
    massaMuscularBia: 38.6,
    idadeCorporal: '46',
    gorduraVisceral: '9',
    planejaRefeicoes: 'Não',
    preparaRefeicoes: 'A mãe quem prepara',
    numeroRefeicoes: 5,
    quantidadeAgua: 8,
    horarioFome: 'Almoço',
    alimentoBeliscar: 'Está bastante controlado',
    alimentosFrequentes: 'Arroz, feijão e carne',
    restricaoAlimentar: 'Nenhuma',
    velocidadeMastigar: 'Devagar',
    usaSuplementos: 'Whey Protein Concentrado, Creatina, DHEA,  Lisina, Vit C, Arginina, Ferro Q, Aswagandha, Zinco Q, Gama Oryzanol, Magnésio Q',
    consumoAlimentarDiario:
    'Café da manhã: Pão com margarina e café com leite. Lanche da Manhã: Ovo cozido ou barrinha de proteina ou iogurte com granola, Almoço: Arroz, feijão e frango. Lanche da tarde: 4 fatias de pão integral, frango com creme de ricotta, banana e whey. Jantar: Arroz, feijão e carne.',
    habitosFinaisDeSemana: 'Pula o lanche da manhã e o lanche da tarde e da uma abusada no final do dia',
    desvioPostural:
      '',
    informacoesAdicionais:
      '',
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
