import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const HistoricoDePeso = ({ dadosDaAvaliacao }) => {
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
        paddingTop: '20px',
      }}
    >
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Menor peso na fase adulta:{' '}
          </Box>
          {dadosDaAvaliacao.menorPesoAdulto} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Maior peso na fase adulta:{' '}
          </Box>
          {dadosDaAvaliacao.maiorPesoAdulto} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso aproximado de 3 meses atrás:{' '}
          </Box>
          {dadosDaAvaliacao.peso3Meses} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso aproximado de 6 meses atrás:{' '}
          </Box>
          {dadosDaAvaliacao.peso6Meses} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso aproximado de 1 ano atrás:{' '}
          </Box>
          {dadosDaAvaliacao.peso1Ano} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso aproximado de 5 anos atrás:{' '}
          </Box>
          {dadosDaAvaliacao.peso5Anos} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso aproximado de 10 anos atrás:{' '}
          </Box>
          {dadosDaAvaliacao.peso10Anos} kg
        </Typography>
      </Grid>
      {dadosDaAvaliacao.pesoPretendido ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Peso pretendido:{' '}
            </Box>
            {dadosDaAvaliacao.pesoPretendido} kg
          </Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};
export default HistoricoDePeso;
