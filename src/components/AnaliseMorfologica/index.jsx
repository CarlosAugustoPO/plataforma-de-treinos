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
  const axilarMedia = dadosDaAvaliacao.dobraCutaneaAxilarMedia;

  // Cálculo de Gordura em % Pollock 7 Dobras
  const somaDobras =
    peitoral +
    abdomen +
    triceps +
    subescapular +
    suprailiaca +
    coxa +
    (axilarMedia ? axilarMedia : panturrilha);

  const calcularDensidadeCorporal = (dadosDaAvaliacao) => {
    var genero = dadosDaAvaliacao.genero;

    if (genero === 'masculino') {
      const densidadeCorporal =
        1.112 -
        0.00043499 * somaDobras +
        0.00000055 * Math.pow(somaDobras, 2) -
        0.0002882 * dadosDaAvaliacao.idade;
      return densidadeCorporal;
    } else if (genero === 'feminino') {
      const densidadeCorporal =
        1.097 -
        0.00046971 * somaDobras +
        0.00000056 * Math.pow(somaDobras, 2) -
        0.00012828 * dadosDaAvaliacao.idade;
      return densidadeCorporal;
    } else {
      const densidadeCorporal =
        1.097 -
        0.00046971 * somaDobras +
        0.00000056 * Math.pow(somaDobras, 2) -
        0.00012828 * dadosDaAvaliacao.idade;
      return densidadeCorporal;
    }
  };

  const porcentagemDeGordura =
    (4.95 / calcularDensidadeCorporal(dadosDaAvaliacao) - 4.5) *
    100;

  // Cálculo de Gordura em KG Pollock 7 Dobras
  const pesoGordo =
    (porcentagemDeGordura / 100) * dadosDaAvaliacao.pesoAtual;

  // Cálculo de Massa Magra em KG Pollock 7 Dobras
  const pesoMagro = dadosDaAvaliacao.pesoAtual - pesoGordo;

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Analíse Morfológica</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.dobraCutaneaPeitoral &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== '' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== null &&
        dadosDaAvaliacao.dobraCutaneaAbdominal &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== '' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== null &&
        dadosDaAvaliacao.dobraCutaneaTricipital &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== '' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== null &&
        dadosDaAvaliacao.dobraCutaneaSubescapular &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== '' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== null &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== '' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== null &&
        dadosDaAvaliacao.dobraCutaneaCoxa &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== '' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Percentual de gordura (Pollock 7 dobras):{' '}
              </Box>
              {porcentagemDeGordura.toFixed(1)}%
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaPeitoral &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== '' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== null &&
        dadosDaAvaliacao.dobraCutaneaAbdominal &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== '' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== null &&
        dadosDaAvaliacao.dobraCutaneaTricipital &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== '' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== null &&
        dadosDaAvaliacao.dobraCutaneaSubescapular &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== '' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== null &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== '' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== null &&
        dadosDaAvaliacao.dobraCutaneaCoxa &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== '' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso gordo (Pollock 7 dobras):{' '}
              </Box>
              {pesoGordo.toFixed(1)} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaPeitoral &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== '' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaPeitoral !== null &&
        dadosDaAvaliacao.dobraCutaneaAbdominal &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== '' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== null &&
        dadosDaAvaliacao.dobraCutaneaTricipital &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== '' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== null &&
        dadosDaAvaliacao.dobraCutaneaSubescapular &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== '' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== null &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== '' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== null &&
        dadosDaAvaliacao.dobraCutaneaCoxa &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== '' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Peso magro (Pollock 7 dobras):{' '}
              </Box>
              {pesoMagro.toFixed(1)} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.porcentagemDeGorduraBia &&
        dadosDaAvaliacao.porcentagemDeGorduraBia !== '' &&
        dadosDaAvaliacao.porcentagemDeGorduraBia !== 'hide' &&
        dadosDaAvaliacao.porcentagemDeGorduraBia !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Percentual de gordura bioimpedância:{' '}
              </Box>
              {dadosDaAvaliacao.porcentagemDeGorduraBia}%
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.massaMuscularBia &&
        dadosDaAvaliacao.massaMuscularBia !== '' &&
        dadosDaAvaliacao.massaMuscularBia !== 'hide' &&
        dadosDaAvaliacao.massaMuscularBia !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Percentual de massa muscular bioimpedância:{' '}
              </Box>
              {dadosDaAvaliacao.massaMuscularBia}%
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.gorduraVisceral &&
        dadosDaAvaliacao.gorduraVisceral !== '' &&
        dadosDaAvaliacao.gorduraVisceral !== 'hide' &&
        dadosDaAvaliacao.gorduraVisceral !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Gordura visceral:{' '}
              </Box>
              {dadosDaAvaliacao.gorduraVisceral} kg
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.idadeCorporal &&
        dadosDaAvaliacao.idadeCorporal !== '' &&
        dadosDaAvaliacao.idadeCorporal !== 'hide' &&
        dadosDaAvaliacao.idadeCorporal !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Idade corporal:{' '}
              </Box>
              {dadosDaAvaliacao.idadeCorporal} Anos
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.tmb &&
        dadosDaAvaliacao.tmb !== '' &&
        dadosDaAvaliacao.tmb !== 'hide' &&
        dadosDaAvaliacao.tmb !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Taxa metabólica basal:{' '}
              </Box>
              {dadosDaAvaliacao.tmb} kcal
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default AnaliseMorfologica;
