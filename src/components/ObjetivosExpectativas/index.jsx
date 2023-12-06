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

const ObjetivosExpectativas = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Objetivos e Expectativas</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.objetivoEstetico &&
        dadosDaAvaliacao.objetivoEstetico !== '' &&
        dadosDaAvaliacao.objetivoEstetico !== 'hide' &&
        dadosDaAvaliacao.objetivoEstetico !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Objetivo estético atual:{' '}
              </Box>
              {dadosDaAvaliacao.objetivoEstetico}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pontosFracosEsteticos &&
        dadosDaAvaliacao.pontosFracosEsteticos !== '' &&
        dadosDaAvaliacao.pontosFracosEsteticos !== 'hide' &&
        dadosDaAvaliacao.pontosFracosEsteticos !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Pontos fracos estéticos:{' '}
              </Box>
              {dadosDaAvaliacao.pontosFracosEsteticos}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pretendeCorrer &&
        dadosDaAvaliacao.pretendeCorrer !== '' &&
        dadosDaAvaliacao.pretendeCorrer !== 'hide' &&
        dadosDaAvaliacao.pretendeCorrer !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Você pretende correr?{' '}
              </Box>
              {dadosDaAvaliacao.pretendeCorrer}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.objetivosComCorrida &&
        dadosDaAvaliacao.objetivosComCorrida !== '' &&
        dadosDaAvaliacao.objetivosComCorrida !== 'hide' &&
        dadosDaAvaliacao.objetivosComCorrida !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quais seus objetivos com a corrida?{' '}
              </Box>
              {dadosDaAvaliacao.objetivosComCorrida}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pretendeMelhorarFlexibilidade &&
        dadosDaAvaliacao.pretendeMelhorarFlexibilidade !== '' &&
        dadosDaAvaliacao.pretendeMelhorarFlexibilidade !==
          'hide' &&
        dadosDaAvaliacao.pretendeMelhorarFlexibilidade !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Você pretende melhorar a flexibilidade?{' '}
              </Box>
              {dadosDaAvaliacao.pretendeMelhorarFlexibilidade}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.objetivosComFlexibilidade &&
        dadosDaAvaliacao.objetivosComFlexibilidade !== '' &&
        dadosDaAvaliacao.objetivosComFlexibilidade !== 'hide' &&
        dadosDaAvaliacao.objetivosComFlexibilidade !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Quais seus objetivos com a flexibilidade?{' '}
              </Box>
              {dadosDaAvaliacao.objetivosComFlexibilidade}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.comoPossoTeAjudar &&
        dadosDaAvaliacao.comoPossoTeAjudar !== '' &&
        dadosDaAvaliacao.comoPossoTeAjudar !== 'hide' &&
        dadosDaAvaliacao.comoPossoTeAjudar !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Como você acha que essa avaliação física e a
                consultoria podem te ajudar?
              </Box>
              {dadosDaAvaliacao.comoPossoTeAjudar}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default ObjetivosExpectativas;
