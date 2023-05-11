import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const RecordatorioAlimentar = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Grid container sx={{ width: '90%', paddingLeft: '5%' }}>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Descreva o seu consumo alimentar diário:{' '}
          </Box>
          {dadosDaAvaliacao.consumoAlimentarDiario}
        </Typography>
      </Grid>
      <Grid mt={2} item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            O que muda no final de semana?{' '}
          </Box>
          {dadosDaAvaliacao.habitosFinaisDeSemana}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RecordatorioAlimentar;
