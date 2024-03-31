import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

const InformacoesSobreOTreino = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      {' '}
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Sobre o Treino</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.haQuantoTempoTreinaMusculacao &&
        dadosDaAvaliacao.haQuantoTempoTreinaMusculacao !== '' &&
        dadosDaAvaliacao.haQuantoTempoTreinaMusculacao !==
          'hide' &&
        dadosDaAvaliacao.haQuantoTempoTreinaMusculacao !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Há quanto tempo você treina musculação?{' '}
              </Box>
              {dadosDaAvaliacao.haQuantoTempoTreinaMusculacao}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.motivoDeParadaDaUltimaVez &&
        dadosDaAvaliacao.motivoDeParadaDaUltimaVez !== '' &&
        dadosDaAvaliacao.motivoDeParadaDaUltimaVez !== 'hide' &&
        dadosDaAvaliacao.motivoDeParadaDaUltimaVez !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                O que te fez parar da última vez?{' '}
              </Box>
              {dadosDaAvaliacao.motivoDeParadaDaUltimaVez}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.tempoDeParadaDaUltimaVez &&
        dadosDaAvaliacao.tempoDeParadaDaUltimaVez !== '' &&
        dadosDaAvaliacao.tempoDeParadaDaUltimaVez !== 'hide' &&
        dadosDaAvaliacao.tempoDeParadaDaUltimaVez !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Por quanto tempo ficou parado da última vez?{' '}
              </Box>
              {dadosDaAvaliacao.tempoDeParadaDaUltimaVez}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.quantidadeDeTreinosPorSemana &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemana !== '' &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemana !==
          'hide' &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemana !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quantas vezes por semana você treina musculação?{' '}
              </Box>
              {dadosDaAvaliacao.quantidadeDeTreinosPorSemana}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido !==
          '' &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido !==
          'hide' &&
        dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quantas vezes por semana você pretende treinar
                musculação?{' '}
              </Box>
              {
                dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido
              }
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioDeTreinoMusculacao &&
        dadosDaAvaliacao.horarioDeTreinoMusculacao !== '' &&
        dadosDaAvaliacao.horarioDeTreinoMusculacao !== 'hide' &&
        dadosDaAvaliacao.horarioDeTreinoMusculacao !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você treina musculação?{' '}
              </Box>
              {dadosDaAvaliacao.horarioDeTreinoMusculacao}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao &&
        dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao !==
          '' &&
        dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao !==
          'hide' &&
        dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você pretende treinar musculação?{' '}
              </Box>
              {
                dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao
              }
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao &&
        dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao !==
          '' &&
        dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao !==
          'hide' &&
        dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quais músculos você mais gosta de treinar na
                musculação?{' '}
              </Box>
              {
                dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao
              }
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.exerciciosComDificuldades &&
        dadosDaAvaliacao.exerciciosComDificuldades !== '' &&
        dadosDaAvaliacao.exerciciosComDificuldades !== 'hide' &&
        dadosDaAvaliacao.exerciciosComDificuldades !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quais exercícios você tem mais dificuldade de
                fazer?{' '}
              </Box>
              {dadosDaAvaliacao.exerciciosComDificuldades}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.tempoExerciciosAerobios &&
        dadosDaAvaliacao.tempoExerciciosAerobios !== '' &&
        dadosDaAvaliacao.tempoExerciciosAerobios !== 'hide' &&
        dadosDaAvaliacao.tempoExerciciosAerobios !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Por quanto tempo você prática exercícios
                aeróbios?{' '}
              </Box>
              {dadosDaAvaliacao.tempoExerciciosAerobios}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioExerciciosAerobios &&
        dadosDaAvaliacao.horarioExerciciosAerobios !== '' &&
        dadosDaAvaliacao.horarioExerciciosAerobios !== 'hide' &&
        dadosDaAvaliacao.horarioExerciciosAerobios !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você pratica exercícios aeróbios?{' '}
              </Box>
              {dadosDaAvaliacao.horarioExerciciosAerobios}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioPretendidoExerciciosAerobios &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAerobios !==
          '' &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAerobios !==
          'hide' &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAerobios !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você pretende praticar exercícios
                aeróbios?{' '}
              </Box>
              {
                dadosDaAvaliacao.horarioPretendidoExerciciosAerobios
              }
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.freqExerciciosAerobios &&
        dadosDaAvaliacao.freqExerciciosAerobios !== '' &&
        dadosDaAvaliacao.freqExerciciosAerobios !== 'hide' &&
        dadosDaAvaliacao.freqExerciciosAerobios !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quantas vezes por semana você pratica exercícios
                aeróbios?{' '}
              </Box>
              {dadosDaAvaliacao.freqExerciciosAerobios}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.tempoExerciciosAlongamento &&
        dadosDaAvaliacao.tempoExerciciosAlongamento !== '' &&
        dadosDaAvaliacao.tempoExerciciosAlongamento !== 'hide' &&
        dadosDaAvaliacao.tempoExerciciosAlongamento !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Há quanto tempo você pratica exercícios de
                alongamento?{' '}
              </Box>
              {dadosDaAvaliacao.tempoExerciciosAlongamento}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioExerciciosAlongamento &&
        dadosDaAvaliacao.horarioExerciciosAlongamento !== '' &&
        dadosDaAvaliacao.horarioExerciciosAlongamento !==
          'hide' &&
        dadosDaAvaliacao.horarioExerciciosAlongamento !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você pratica exercícios de
                alongamento?{' '}
              </Box>
              {dadosDaAvaliacao.horarioExerciciosAlongamento}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento !==
          '' &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento !==
          'hide' &&
        dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Em qual horário você pretende praticar exercícios
                de alongamento?{' '}
              </Box>
              {
                dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento
              }
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};
export default InformacoesSobreOTreino;
