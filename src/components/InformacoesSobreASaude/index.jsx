import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

const InformacoesSobreASaude = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Sobre a Saúde</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.problemasDeSaude &&
        dadosDaAvaliacao.problemasDeSaude !== '' &&
        dadosDaAvaliacao.problemasDeSaude !== 'hide' &&
        dadosDaAvaliacao.problemasDeSaude !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>
                Algum problema de saúde diagnosticado:
              </strong>{' '}
              {dadosDaAvaliacao.problemasDeSaude
                ? dadosDaAvaliacao.problemasDeSaude
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.tomaMedicamento &&
        dadosDaAvaliacao.tomaMedicamento !== '' &&
        dadosDaAvaliacao.tomaMedicamento !== 'hide' &&
        dadosDaAvaliacao.tomaMedicamento !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Medicamentos:</strong>{' '}
              {dadosDaAvaliacao.tomaMedicamento
                ? dadosDaAvaliacao.tomaMedicamento
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.usaEsteroides &&
        dadosDaAvaliacao.usaEsteroides !== '' &&
        dadosDaAvaliacao.usaEsteroides !== 'hide' &&
        dadosDaAvaliacao.usaEsteroides !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Uso de esteróides anabólicos:</strong>{' '}
              {dadosDaAvaliacao.usaEsteroides
                ? dadosDaAvaliacao.usaEsteroides
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.frequenciaFumo &&
        dadosDaAvaliacao.frequenciaFumo !== '' &&
        dadosDaAvaliacao.frequenciaFumo !== 'hide' &&
        dadosDaAvaliacao.frequenciaFumo !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Você fuma? Com qual frequência?</strong>{' '}
              {dadosDaAvaliacao.frequenciaFumo}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.frequenciaAlcool &&
        dadosDaAvaliacao.frequenciaAlcool !== '' &&
        dadosDaAvaliacao.frequenciaAlcool !== 'hide' &&
        dadosDaAvaliacao.frequenciaAlcool !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>
                Você bebe alcool? Com qual frequência?
              </strong>{' '}
              {dadosDaAvaliacao.frequenciaAlcool}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.teveLesao &&
        dadosDaAvaliacao.teveLesao !== '' &&
        dadosDaAvaliacao.teveLesao !== 'hide' &&
        dadosDaAvaliacao.teveLesao !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Lesões no passado:</strong>{' '}
              {dadosDaAvaliacao.teveLesao ? 'Sim' : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.limitacaoFisica &&
        dadosDaAvaliacao.limitacaoFisica !== '' &&
        dadosDaAvaliacao.limitacaoFisica !== 'hide' &&
        dadosDaAvaliacao.limitacaoFisica !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Limitações físicas:</strong>{' '}
              {dadosDaAvaliacao.limitacaoFisica
                ? dadosDaAvaliacao.limitacaoFisica
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.amamentando &&
        dadosDaAvaliacao.amamentando !== '' &&
        dadosDaAvaliacao.amamentando !== 'hide' &&
        dadosDaAvaliacao.amamentando !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Amamentação:</strong>{' '}
              {dadosDaAvaliacao.amamentando
                ? dadosDaAvaliacao.amamentando
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.cirurgiaPassada &&
        dadosDaAvaliacao.cirurgiaPassada !== '' &&
        dadosDaAvaliacao.cirurgiaPassada !== 'hide' &&
        dadosDaAvaliacao.cirurgiaPassada !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Cirurgia:</strong>{' '}
              {dadosDaAvaliacao.cirurgiaPassada
                ? `${dadosDaAvaliacao.cirurgiaPassada}`
                : 'Não'}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.fcRepouso &&
        dadosDaAvaliacao.fcRepouso !== '' &&
        dadosDaAvaliacao.fcRepouso !== 'hide' &&
        dadosDaAvaliacao.fcRepouso !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>FC de repouso:</strong>{' '}
              {dadosDaAvaliacao.fcRepouso}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.paRepouso &&
        dadosDaAvaliacao.paRepouso !== '' &&
        dadosDaAvaliacao.paRepouso !== 'hide' &&
        dadosDaAvaliacao.paRepouso !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>PA de repouso:</strong>{' '}
              {dadosDaAvaliacao.paRepouso}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dadosDaAvaliacao &&
        dadosDaAvaliacao.dadosDaAvaliacao !== '' &&
        dadosDaAvaliacao.dadosDaAvaliacao !== 'hide' &&
        dadosDaAvaliacao.dadosDaAvaliacao !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>SPO2:</strong> {dadosDaAvaliacao.spO2}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.temperaturaCorporal &&
        dadosDaAvaliacao.temperaturaCorporal !== '' &&
        dadosDaAvaliacao.temperaturaCorporal !== 'hide' &&
        dadosDaAvaliacao.temperaturaCorporal !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Temperatura corporal:</strong>{' '}
              {dadosDaAvaliacao.temperaturaCorporal}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.temperaturaExtremidades &&
        dadosDaAvaliacao.temperaturaExtremidades !== '' &&
        dadosDaAvaliacao.temperaturaExtremidades !== 'hide' &&
        dadosDaAvaliacao.temperaturaExtremidades !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <strong>Temperatura das extremidades:</strong>{' '}
              {dadosDaAvaliacao.temperaturaExtremidades}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default InformacoesSobreASaude;
