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
  const axilarMedia = dadosDaAvaliacao.dobraCutaneaAxilarMedia;

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Dobras Cutâneas</Title>
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
        dadosDaAvaliacao.dobraCutaneaPeitoral !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea peitoral:{' '}
              </Box>
              {peitoral} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaAbdominal &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== '' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaAbdominal !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea de abdomem:{' '}
              </Box>
              {abdomen} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaTricipital &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== '' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaTricipital !== null ? (
          <Grid>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea de tríceps:{' '}
              </Box>
              {triceps} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaSubescapular &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== '' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSubescapular !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea subescapular:{' '}
              </Box>
              {subescapular} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaSuprailiaca &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== '' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaSuprailiaca !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea supra-ilíaca:{' '}
              </Box>
              {suprailiaca} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaCoxa &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== '' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaCoxa !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea de coxa:{' '}
              </Box>
              {coxa} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaAxilarMedia &&
        dadosDaAvaliacao.dobraCutaneaAxilarMedia !== '' &&
        dadosDaAvaliacao.dobraCutaneaAxilarMedia !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaAxilarMedia !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea axilar medía:{' '}
              </Box>
              {axilarMedia} mm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dobraCutaneaPanturrilha &&
        dadosDaAvaliacao.dobraCutaneaPanturrilha !== '' &&
        dadosDaAvaliacao.dobraCutaneaPanturrilha !== 'hide' &&
        dadosDaAvaliacao.dobraCutaneaPanturrilha !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Dobra cutânea de panturrilha:{' '}
              </Box>
              {panturrilha} mm
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default DobrasCutaneas;
