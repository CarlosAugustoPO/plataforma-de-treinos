import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const ResumoAntropometrico = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const calcularIMC = (altura, peso) => {
    return (peso / (altura * altura)).toFixed(2);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc < 25) {
      return 'Normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

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
            Altura:{' '}
          </Box>
          {dadosDaAvaliacao.altura} m
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Peso Atual:{' '}
          </Box>
          {dadosDaAvaliacao.pesoAtual} kg
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            IMC:{' '}
          </Box>
          {calcularIMC(
            dadosDaAvaliacao.altura,
            dadosDaAvaliacao.pesoAtual,
          )}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            IMC Classificação:{' '}
          </Box>
          {classificarIMC(
            calcularIMC(
              dadosDaAvaliacao.altura,
              dadosDaAvaliacao.pesoAtual,
            ),
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResumoAntropometrico;
