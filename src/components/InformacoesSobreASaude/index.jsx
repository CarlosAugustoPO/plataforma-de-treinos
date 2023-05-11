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
          {dadosDaAvaliacao.problemaDeSaude ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Medicamentos:</strong>{' '}
          {dadosDaAvaliacao.tomaMedicamento ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Uso de esteróides anabólicos:</strong>{' '}
          {dadosDaAvaliacao.usaEsteroides ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Fumo e álcool:</strong>{' '}
          {dadosDaAvaliacao.fumaOuBebeAlcool
            ? `${dadosDaAvaliacao.frequenciaFumo} cigarros por dia, ${dadosDaAvaliacao.frequenciaAlcool} vezes por semana`
            : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Lesões no passado:</strong>{' '}
          {dadosDaAvaliacao.teveLesao ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Limitações físicas:</strong>{' '}
          {dadosDaAvaliacao.limitacaoFisica ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Amamentação:</strong>{' '}
          {dadosDaAvaliacao.amamentando ? 'Sim' : 'Não'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Cirurgia:</strong>{' '}
          {dadosDaAvaliacao.passouPorCirurgia
            ? `Sim, há ${dadosDaAvaliacao.tempoCirurgia} meses`
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
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <strong>Temperatura das extremidades:</strong>{' '}
          {dadosDaAvaliacao.temperaturaExtremidades}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InformacoesSobreASaude;
