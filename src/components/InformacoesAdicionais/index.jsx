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

const InformacoesAdicionais = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Adicionais</Title>
      <Grid container sx={{ width: '90%', paddingLeft: '05%' }}>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Informações Adicionais:{' '}
            </Box>
            {dadosDaAvaliacao.informacoesAdicionais &&
            dadosDaAvaliacao.informacoesAdicionais !== '' &&
            dadosDaAvaliacao.informacoesAdicionais !== 'hide' &&
            dadosDaAvaliacao.informacoesAdicionais !== null
              ? dadosDaAvaliacao.informacoesAdicionais
              : 'Sem informações adicionais'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InformacoesAdicionais;
