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
    <>
      {' '}
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Resumo Antropométrico</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.altura &&
        dadosDaAvaliacao.altura !== '' &&
        dadosDaAvaliacao.altura !== 'hide' &&
        dadosDaAvaliacao.altura !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Altura:{' '}
              </Box>
              {dadosDaAvaliacao.altura} m
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pesoAtual &&
        dadosDaAvaliacao.pesoAtual !== '' &&
        dadosDaAvaliacao.pesoAtual !== 'hide' &&
        dadosDaAvaliacao.pesoAtual !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso Atual:{' '}
              </Box>
              {dadosDaAvaliacao.pesoAtual} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.pesoAtual &&
        dadosDaAvaliacao.altura &&
        dadosDaAvaliacao.pesoAtual !== '' &&
        dadosDaAvaliacao.altura !== '' &&
        dadosDaAvaliacao.pesoAtual !== 'hide' &&
        dadosDaAvaliacao.altura !== 'hide' &&
        dadosDaAvaliacao.pesoAtual !== null &&
        dadosDaAvaliacao.altura !== null ? (
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
        ) : null}

        {dadosDaAvaliacao.pesoAtual &&
        dadosDaAvaliacao.altura &&
        dadosDaAvaliacao.pesoAtual !== '' &&
        dadosDaAvaliacao.pesoAtual !== 'hide' &&
        dadosDaAvaliacao.altura !== '' &&
        dadosDaAvaliacao.altura !== 'hide' &&
        dadosDaAvaliacao.pesoAtual !== null &&
        dadosDaAvaliacao.altura !== null ? (
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
        ) : null}
      </Grid>
    </>
  );
};

export default ResumoAntropometrico;
