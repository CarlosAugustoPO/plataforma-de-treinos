import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const ObjetivosExpectativas = ({ dadosDaAvaliacao }) => {
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
            Objetivo estético atual:{' '}
          </Box>
          {dadosDaAvaliacao.objetivoEstetico}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Pontos fracos estéticos:{' '}
          </Box>
          {dadosDaAvaliacao.pontosFracosEsteticos}
        </Typography>
      </Grid>

      {dadosDaAvaliacao.pretendeCorrer ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Você pretende correr?{' '}
            </Box>
            {dadosDaAvaliacao.pretendeCorrer}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.objetivosComCorrida ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Quais seus objetivos com a corrida?{' '}
            </Box>
            {dadosDaAvaliacao.objetivosComCorrida}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.pretendeMelhorarFlexibilidade ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Você pretende melhorar a flexibilidade?{' '}
            </Box>
            {dadosDaAvaliacao.pretendeMelhorarFlexibilidade}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.objetivosComFlexibilidade ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Quais seus objetivos com a flexibilidade?{' '}
            </Box>
            {dadosDaAvaliacao.objetivosComFlexibilidade}
          </Typography>
        </Grid>
      ) : null}

      {dadosDaAvaliacao.comoPossoTeAjudar ? (
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
  );
};

export default ObjetivosExpectativas;
