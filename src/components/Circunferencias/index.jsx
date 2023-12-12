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
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Circunferências</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.circunferenciaDePunho &&
        dadosDaAvaliacao.circunferenciaDePunho !== '' &&
        dadosDaAvaliacao.circunferenciaDePunho !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDePunho !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Punho:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDePunho} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDeAbdomen &&
        dadosDaAvaliacao.circunferenciaDeAbdomen !== '' &&
        dadosDaAvaliacao.circunferenciaDeAbdomen !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeAbdomen !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Abdômen:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDeAbdomen} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDePescoco &&
        dadosDaAvaliacao.circunferenciaDePescoco !== '' &&
        dadosDaAvaliacao.circunferenciaDePescoco !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDePescoco !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Pescoço:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDePescoco} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDeCintura &&
        dadosDaAvaliacao.circunferenciaDeCintura !== '' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Cintura:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDeCintura} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDeCintura &&
        dadosDaAvaliacao.circunferenciaDeCintura !== '' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Quadril:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDeQuadril} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDePanturrilha &&
        dadosDaAvaliacao.circunferenciaDePanturrilha !== '' &&
        dadosDaAvaliacao.circunferenciaDePanturrilha !==
          'hide' &&
        dadosDaAvaliacao.circunferenciaDePanturrilha !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Panturrilha:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaDePanturrilha} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaBracoRelaxado &&
        dadosDaAvaliacao.circunferenciaBracoRelaxado !== '' &&
        dadosDaAvaliacao.circunferenciaBracoRelaxado !==
          'hide' &&
        dadosDaAvaliacao.circunferenciaBracoRelaxado !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Braço relaxado:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaBracoRelaxado} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaBracoContraido &&
        dadosDaAvaliacao.circunferenciaBracoContraido !== '' &&
        dadosDaAvaliacao.circunferenciaBracoContraido !==
          'hide' &&
        dadosDaAvaliacao.circunferenciaBracoContraido !==
          null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Braço contraído:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaBracoContraido} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaTorax &&
        dadosDaAvaliacao.circunferenciaTorax !== '' &&
        dadosDaAvaliacao.circunferenciaTorax !== 'hide' &&
        dadosDaAvaliacao.circunferenciaTorax !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de Tórax:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaTorax} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaAntebraco &&
        dadosDaAvaliacao.circunferenciaAntebraco !== '' &&
        dadosDaAvaliacao.circunferenciaAntebraco !== 'hide' &&
        dadosDaAvaliacao.circunferenciaAntebraco !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de antebraço:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaAntebraco} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaCoxa &&
        dadosDaAvaliacao.circunferenciaCoxa !== '' &&
        dadosDaAvaliacao.circunferenciaCoxa !== 'hide' &&
        dadosDaAvaliacao.circunferenciaCoxa !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de coxa:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaCoxa} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaTornozelo &&
        dadosDaAvaliacao.circunferenciaTornozelo !== '' &&
        dadosDaAvaliacao.circunferenciaTornozelo !== 'hide' &&
        dadosDaAvaliacao.circunferenciaTornozelo !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Circunferência de tornozelo:{' '}
              </Box>
              {dadosDaAvaliacao.circunferenciaTornozelo} cm
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.circunferenciaDeCintura &&
        dadosDaAvaliacao.circunferenciaDeQuadril &&
        dadosDaAvaliacao.circunferenciaDeCintura !== '' &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== '' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== null &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== null ? (
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
        ) : null}

        {dadosDaAvaliacao.circunferenciaDeCintura &&
        dadosDaAvaliacao.circunferenciaDeQuadril &&
        dadosDaAvaliacao.genero &&
        dadosDaAvaliacao.circunferenciaDeCintura !== '' &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== '' &&
        dadosDaAvaliacao.genero !== '' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== 'hide' &&
        dadosDaAvaliacao.genero !== 'hide' &&
        dadosDaAvaliacao.circunferenciaDeCintura !== null &&
        dadosDaAvaliacao.genero !== null &&
        dadosDaAvaliacao.circunferenciaDeQuadril !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Classificação RCQ OMS:{' '}
              </Box>
              {calcularRiscoRCQ(dadosDaAvaliacao)}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Circunferencias;
