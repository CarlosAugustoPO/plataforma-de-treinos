import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const InformacoesNutricionais = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Grid container sx={{ width: '90%', paddingLeft: '05%' }}>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Você planeja as refeições que faz ou come o que tem?
            Com qual frequência?{' '}
          </Box>
          {dadosDaAvaliacao.planejaRefeicoes}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Você quem prepara suas refeições?{' '}
          </Box>
          {dadosDaAvaliacao.preparaRefeicoes}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Número de refeições diárias:{' '}
          </Box>
          {dadosDaAvaliacao.numeroRefeicoes} refeições por dia
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Quantos copos de água você ingere por dia?{' '}
          </Box>
          {dadosDaAvaliacao.quantidadeAgua} copos por dia
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Em qual horário você sente mais fome?{' '}
          </Box>
          {dadosDaAvaliacao.horarioFome}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Quando tem vontade de beliscar, come qual alimento?{' '}
          </Box>
          {dadosDaAvaliacao.alimentoBeliscar}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Quais são os alimentos que você mais consome durante
            o dia?{' '}
          </Box>
          {dadosDaAvaliacao.alimentosFrequentes}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Você possui alguma restrição, alergia ou intolerância
            alimentar?{' '}
          </Box>
          {dadosDaAvaliacao.restricaoAlimentar}
        </Typography>
      </Grid>
      {dadosDaAvaliacao.velocidadeMastigar ? (
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Você costuma comer rápido ou devagar?{' '}
            </Box>
            {dadosDaAvaliacao.velocidadeMastigar}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={12}>
        <Typography align={isSmallScreen ? 'left' : 'left'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            Você toma algum suplemento alimentar?{' '}
          </Box>
          {dadosDaAvaliacao.usaSuplementos}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InformacoesNutricionais;
