import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const DobrasCutaneas = ({ dadosDaAvaliacao }) => {
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
              Dobra cutânea peitoral:{' '}
            </Box>
            {peitoral} mm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea de abdomem:{' '}
            </Box>
            {abdomen} mm
          </Typography>
        </Grid>
        <Grid>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea de tríceps:{' '}
            </Box>
            {triceps} mm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea subescapular:{' '}
            </Box>
            {subescapular} mm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea supra-ilíaca:{' '}
            </Box>
            {suprailiaca} mm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea de coxa:{' '}
            </Box>
            {coxa} mm
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Dobra cutânea de panturrilha:{' '}
            </Box>
            {panturrilha} mm
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DobrasCutaneas;
