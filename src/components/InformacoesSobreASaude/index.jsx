import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
} from '@mui/material';

const InformacoesSobreASaude = ({ dadosDaAvaliacao }) => {
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
          <strong>Algum problema de saúde diagnosticado:</strong>{' '}
          {dadosDaAvaliacao.problemasDeSaude
            ? dadosDaAvaliacao.problemasDeSaude
            : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Medicamentos:</strong>{' '}
          {dadosDaAvaliacao.tomaMedicamento
            ? dadosDaAvaliacao.tomaMedicamento
            : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Uso de esteróides anabólicos:</strong>{' '}
          {dadosDaAvaliacao.usaEsteroides
            ? dadosDaAvaliacao.usaEsteroides
            : 'Não'}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.frequenciaFumo ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Você fuma? Com qual frequência?</strong>{' '}
            {dadosDaAvaliacao.frequenciaFumo}
          </Typography>
        </Grid>
      ) : null}
      {dadosDaAvaliacao.frequenciaAlcool ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>
              Você bebe alcool? Com qual frequência?
            </strong>{' '}
            {dadosDaAvaliacao.frequenciaAlcool}
          </Typography>
        </Grid>
      ) : null}

      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Lesões no passado:</strong>{' '}
          {dadosDaAvaliacao.teveLesao ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Limitações físicas:</strong>{' '}
          {dadosDaAvaliacao.limitacaoFisica
            ? dadosDaAvaliacao.limitacaoFisica
            : 'Não'}
        </Typography>
      </Grid>
      {dadosDaAvaliacao.amamentando ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Amamentação:</strong>{' '}
            {dadosDaAvaliacao.amamentando
              ? dadosDaAvaliacao.amamentando
              : 'Não'}
          </Typography>
        </Grid>
      ) : null}

      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Cirurgia:</strong>{' '}
          {dadosDaAvaliacao.cirurgiaPassada
            ? `${dadosDaAvaliacao.cirurgiaPassada}`
            : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>FC de repouso:</strong>{' '}
          {dadosDaAvaliacao.fcRepouso}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>PA de repouso:</strong>{' '}
          {dadosDaAvaliacao.paRepouso}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>SPO2:</strong> {dadosDaAvaliacao.spO2}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.temperaturaCorporal ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Temperatura corporal:</strong>{' '}
            {dadosDaAvaliacao.temperaturaCorporal}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.temperaturaExtremidades ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <strong>Temperatura das extremidades:</strong>{' '}
            {dadosDaAvaliacao.temperaturaExtremidades}
          </Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default InformacoesSobreASaude;
