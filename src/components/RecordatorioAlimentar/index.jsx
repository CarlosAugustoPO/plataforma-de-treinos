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

const RecordatorioAlimentar = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      {dadosDaAvaliacao.consumoAlimentarDiario &&
      dadosDaAvaliacao.habitosFinaisDeSemana ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph>Recordatório Alimentar</Title>
          <Grid
            container
            sx={{ width: '90%', paddingLeft: '5%' }}
          >
            {dadosDaAvaliacao.consumoAlimentarDiario &&
            dadosDaAvaliacao.consumoAlimentarDiario !== '' &&
            dadosDaAvaliacao.consumoAlimentarDiario !== 'hide' &&
            dadosDaAvaliacao.consumoAlimentarDiario !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Descreva o seu consumo alimentar diário:{' '}
                  </Box>
                  {dadosDaAvaliacao.consumoAlimentarDiario}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.habitosFinaisDeSemana &&
            dadosDaAvaliacao.habitosFinaisDeSemana !== '' &&
            dadosDaAvaliacao.habitosFinaisDeSemana !== 'hide' &&
            dadosDaAvaliacao.habitosFinaisDeSemana !== null ? (
              <Grid mt={2} item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    O que muda no final de semana?{' '}
                  </Box>
                  {dadosDaAvaliacao.habitosFinaisDeSemana}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default RecordatorioAlimentar;
