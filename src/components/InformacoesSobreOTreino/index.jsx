import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const InformacoesSobreOTreino = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Grid
      container
      sx={{
        width: '90%',
        paddingLeft: '05%',
      }}
    >
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Há quanto tempo você treina musculação?{' '}
          </Box>
          {dadosDaAvaliacao.haQuantoTempoTreinaMusculacao}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.motivoDeParadaDaUltimaVez ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              O que te fez parar da última vez?{' '}
            </Box>
            {dadosDaAvaliacao.motivoDeParadaDaUltimaVez}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.tempoDeParadaDaUltimaVez ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Por quanto tempo ficou parado da última vez?{' '}
            </Box>
            {dadosDaAvaliacao.tempoDeParadaDaUltimaVez}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Quantas vezes por semana você treina musculação?{' '}
          </Box>
          {dadosDaAvaliacao.quantidadeDeTreinosPorSemana}
        </Typography>
      </Grid>
      {dadosDaAvaliacao.quantidadeDeTreinosPorSemanaPretendido ? (
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
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Em qual horário você treina musculação?{' '}
          </Box>
          {dadosDaAvaliacao.horarioDeTreinoMusculacao}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Em qual horário você pretende treinar musculação?{' '}
          </Box>
          {dadosDaAvaliacao.horarioDesejadoDeTreinoMusculacao}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.musculosPreferidosDeTreinoMusculacao ? (
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

      {dadosDaAvaliacao.exerciciosComDificuldades ? (
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
      {dadosDaAvaliacao.tempoExerciciosAerobios ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Há quanto tempo você pratica exercícios aeróbios?{' '}
            </Box>
            {dadosDaAvaliacao.tempoExerciciosAerobios}
          </Typography>
        </Grid>
      ) : null}
      {dadosDaAvaliacao.horarioExerciciosAerobios ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Em qual horário você pratica exercícios aeróbios?{' '}
            </Box>
            {dadosDaAvaliacao.horarioExerciciosAerobios}
          </Typography>
        </Grid>
      ) : null}
      {dadosDaAvaliacao.horarioPretendidoExerciciosAerobios ? (
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
      {dadosDaAvaliacao.freqExerciciosAerobios ? (
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
      {dadosDaAvaliacao.tempoExerciciosAlongamento ? (
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
      {dadosDaAvaliacao.horarioExerciciosAlongamento ? (
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
      {dadosDaAvaliacao.horarioPretendidoExerciciosAlongamento ? (
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
  );
};
export default InformacoesSobreOTreino;
