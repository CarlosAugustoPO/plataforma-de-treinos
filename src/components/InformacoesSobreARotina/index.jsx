import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
} from '@mui/material';

const InformacoesSobreARotina = ({ dadosDaAvaliacao }) => {
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
          <strong>Que horas dorme:</strong>{' '}
          {dadosDaAvaliacao.horaDeDormir}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Que horas acorda:</strong>{' '}
          {dadosDaAvaliacao.horaDeAcordar}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>
            Como considera a qualidade do seu sono:
          </strong>{' '}
          {dadosDaAvaliacao.qualidadeDoSono}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.rotinaDiariaDetalhes ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Como é a sua rotina diária?</strong>{' '}
            {dadosDaAvaliacao.rotinaDiariaDetalhes}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.humorDiario ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Como é seu humor ao longo do dia:</strong>{' '}
            {dadosDaAvaliacao.humorDiario}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>
            O que costuma fazer nos momentos de humor abalado?
          </strong>{' '}
          {dadosDaAvaliacao.estrategiasContraEstresse}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.estrategiasDeLazer ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>
              Como costuma fazer nos momentos de lazer?
            </strong>{' '}
            {dadosDaAvaliacao.estrategiasDeLazer}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Como é sua rotina de trabalho?</strong>{' '}
          {dadosDaAvaliacao.rotinaDeTrabalho}
        </Typography>
      </Grid>
      {dadosDaAvaliacao.estrategiasDeLazer ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Como costuma ir para o trabalho?</strong>{' '}
            {dadosDaAvaliacao.meioDeTransporteParaTrabalho}
          </Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default InformacoesSobreARotina;
