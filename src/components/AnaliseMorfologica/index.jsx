import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const AnaliseMorfologica = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const peitoral = dadosDaAvaliacao.dobraCutaneaPeitoral;
  const abdomen = dadosDaAvaliacao.dobraCutaneaAbdominal;
  const triceps = dadosDaAvaliacao.dobraCutaneaTricipital;
  const subescapular = dadosDaAvaliacao.dobraCutaneaSubescapular;
  const suprailiaca = dadosDaAvaliacao.dobraCutaneaSuprailiaca;
  const coxa = dadosDaAvaliacao.dobraCutaneaCoxa;
  const panturrilha = dadosDaAvaliacao.dobraCutaneaPanturrilha;

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobras =
    peitoral +
    abdomen +
    triceps +
    subescapular +
    suprailiaca +
    coxa +
    panturrilha;
  const densidadeCorporal =
    1.112 -
    0.00043499 * somaDobras +
    0.00000055 * Math.pow(somaDobras, 2) -
    0.0001284 * dadosDaAvaliacao.idade;
  const porcentagemDeGordura =
    (4.95 / densidadeCorporal - 4.5) * 100;

  // Cálculo de Gordura em KG Pollock 7 Dobras
  const pesoGordo =
    (porcentagemDeGordura / 100) * dadosDaAvaliacao.pesoAtual;

  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagro = dadosDaAvaliacao.pesoAtual - pesoGordo;

  return (
    <>
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
              Percentual de gordura (Pollock 7 dobras):{' '}
            </Box>
            {porcentagemDeGordura.toFixed(1)}%
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Peso gordo:{' '}
            </Box>
            {pesoGordo.toFixed(1)} kg
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Peso magro:{' '}
            </Box>
            {pesoMagro.toFixed(1)} kg
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Percentual de gordura bioimpedância:{' '}
            </Box>
            {dadosDaAvaliacao.porcentagemDeGorduraBia}%
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Percential de massa muscular bioimpedância:{' '}
            </Box>
            {dadosDaAvaliacao.massaMuscularBia}%
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Gordura visceral:{' '}
            </Box>
            {dadosDaAvaliacao.gorduraVisceral} kg
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Idade corporal:{' '}
            </Box>
            {dadosDaAvaliacao.idadeCorporal} Anos
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AnaliseMorfologica;