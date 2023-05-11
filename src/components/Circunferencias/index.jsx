import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const Circunferencias = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const calcularRCQ = (cintura, quadril) => {
    return (cintura / quadril).toFixed(2);
  };

  function calcularRiscoRCQ(dadosDaAvaliacao) {
    var genero = dadosDaAvaliacao.genero;
    var cintura = dadosDaAvaliacao.circunferenciaDeCintura;
    var quadril = dadosDaAvaliacao.circunferenciaDeQuadril;

    var rcq = cintura / quadril;

    if (genero === 'masculino' && rcq >= 0.9) {
      return 'Risco aumentado';
    } else if (genero === 'feminino' && rcq >= 0.85) {
      return 'Risco aumentado';
    } else {
      return 'Risco normal';
    }
  }

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
            Circunferência de Punho:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDePunho} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Abdômen:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDeAbdomen} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Pescoço:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDePescoco} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Cintura:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDeCintura} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Quadril:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDeQuadril} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Panturrilha:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaDePanturrilha} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Braço relaxado:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaBracoRelaxado} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Braço contraído:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaBracoContraido} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de Tórax:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaTorax} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de antebraço:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaAntebraco} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de coxa:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaCoxa} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Circunferência de tornozelo:{' '}
          </Box>
          {dadosDaAvaliacao.circunferenciaTornozelo} cm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            RCQ:{' '}
          </Box>
          {calcularRCQ(
            dadosDaAvaliacao.circunferenciaDeCintura,
            dadosDaAvaliacao.circunferenciaDeQuadril,
          )}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Classificação RCQ OMS:{' '}
          </Box>
          {calcularRiscoRCQ(dadosDaAvaliacao)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Circunferencias;
