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

const AnalisePostural = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Analíse Postural</Title>
      <Grid container sx={{ width: '90%', paddingLeft: '05%' }}>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Você possui algum desvio postural diagnosticado?{' '}
            </Box>
            {dadosDaAvaliacao.desvioPostural &&
            dadosDaAvaliacao.desvioPostural !== '' &&
            dadosDaAvaliacao.desvioPostural !== 'hide' &&
            dadosDaAvaliacao.desvioPostural !== null
              ? dadosDaAvaliacao.desvioPostural
              : 'Sem desvios posturais informados'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AnalisePostural;
