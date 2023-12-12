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

const HistoricoDePeso = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Histórico de Peso</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
          paddingTop: '20px',
        }}
      >
        {dadosDaAvaliacao.menorPesoAdulto &&
        dadosDaAvaliacao.menorPesoAdulto !== '' &&
        dadosDaAvaliacao.menorPesoAdulto !== 'hide' &&
        dadosDaAvaliacao.menorPesoAdulto !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Menor peso na fase adulta:{' '}
              </Box>
              {dadosDaAvaliacao.menorPesoAdulto} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.maiorPesoAdulto &&
        dadosDaAvaliacao.maiorPesoAdulto !== '' &&
        dadosDaAvaliacao.maiorPesoAdulto !== 'hide' &&
        dadosDaAvaliacao.maiorPesoAdulto !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Maior peso na fase adulta:{' '}
              </Box>
              {dadosDaAvaliacao.maiorPesoAdulto} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.peso3Meses &&
        dadosDaAvaliacao.peso3Meses !== '' &&
        dadosDaAvaliacao.peso3Meses !== 'hide' &&
        dadosDaAvaliacao.peso3Meses !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso aproximado de 3 meses atrás:{' '}
              </Box>
              {dadosDaAvaliacao.peso3Meses} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.peso6Meses &&
        dadosDaAvaliacao.peso6Meses !== '' &&
        dadosDaAvaliacao.peso6Meses !== 'hide' &&
        dadosDaAvaliacao.peso6Meses !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso aproximado de 6 meses atrás:{' '}
              </Box>
              {dadosDaAvaliacao.peso6Meses} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.peso1Ano &&
        dadosDaAvaliacao.peso1Ano !== '' &&
        dadosDaAvaliacao.peso1Ano !== 'hide' &&
        dadosDaAvaliacao.peso1Ano !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso aproximado de 1 ano atrás:{' '}
              </Box>
              {dadosDaAvaliacao.peso1Ano} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.peso5Anos &&
        dadosDaAvaliacao.peso5Anos !== '' &&
        dadosDaAvaliacao.peso5Anos !== 'hide' &&
        dadosDaAvaliacao.peso5Anos !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso aproximado de 5 anos atrás:{' '}
              </Box>
              {dadosDaAvaliacao.peso5Anos} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.peso10Anos &&
        dadosDaAvaliacao.peso10Anos !== '' &&
        dadosDaAvaliacao.peso10Anos !== 'hide' &&
        dadosDaAvaliacao.peso10Anos !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso aproximado de 10 anos atrás:{' '}
              </Box>
              {dadosDaAvaliacao.peso10Anos} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pesoPretendido &&
        dadosDaAvaliacao.pesoPretendido !== '' &&
        dadosDaAvaliacao.pesoPretendido !== 'hide' &&
        dadosDaAvaliacao.pesoPretendido !== null ? (
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
    </>
  );
};
export default HistoricoDePeso;
