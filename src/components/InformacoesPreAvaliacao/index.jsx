import React from 'react';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';
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
    <div>
      {dadosDaAvaliacao.ultimoTreino ||
      dadosDaAvaliacao.ultimoTreino ||
      dadosDaAvaliacao.ultimaRefeicao ||
      dadosDaAvaliacao.tempoUltimaRefeicao ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph>Informações Pré Antropometria</Title>
          <Grid
            container
            sx={{
              width: '90%',
              paddingLeft: '05%',
            }}
          >
            {dadosDaAvaliacao.ultimoTreino ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Há quanto tempo foi o último Treino:{' '}
                  </Box>
                  {dadosDaAvaliacao.ultimoTreino}
                </Typography>
              </Grid>
            ) : null}
            {dadosDaAvaliacao.ultimoTreinoDescricao ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    O que treinou no ultimo treino:{' '}
                  </Box>
                  {dadosDaAvaliacao.ultimoTreinoDescricao}
                </Typography>
              </Grid>
            ) : null}
            {dadosDaAvaliacao.ultimaRefeicao ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Última Refeição:{' '}
                  </Box>
                  {dadosDaAvaliacao.ultimaRefeicao}
                </Typography>
              </Grid>
            ) : null}
            {dadosDaAvaliacao.tempoUltimaRefeicao ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Há quanto tempo foi a última Refeição:{' '}
                  </Box>
                  {dadosDaAvaliacao.tempoUltimaRefeicao}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </>
      ) : null}
    </div>
  );
};

export default InformacoesPreAvaliacao;
