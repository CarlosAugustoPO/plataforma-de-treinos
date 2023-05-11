import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const InformacoesPreAvaliacao = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

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
            Há quanto tempo foi o último Treino:{' '}
          </Box>
          {dadosDaAvaliacao.ultimoTreino}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            O que treinou no ultimo treino:{' '}
          </Box>
          {dadosDaAvaliacao.ultimoTreinoDescricao}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Última Refeição:{' '}
          </Box>
          {dadosDaAvaliacao.ultimaRefeicao}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Há quanto tempo foi a última Refeição:{' '}
          </Box>
          {dadosDaAvaliacao.tempoUltimaRefeicao}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InformacoesPreAvaliacao;
