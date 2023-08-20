import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const AnalisePostural = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Grid container sx={{ width: '90%', paddingLeft: '05%' }}>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Você possui algum desvio postural diagnosticado?{' '}
          </Box>
          {dadosDaAvaliacao.desvioPostural
            ? dadosDaAvaliacao.desvioPostural
            : 'Sem desvios posturais informados'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AnalisePostural;
