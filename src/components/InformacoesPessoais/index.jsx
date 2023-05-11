import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';

const InformacoesPessoais = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const githubAvatarUrl =
    'https://avatars.githubusercontent.com/CarlosAugustoPO';
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      {/* <Avatar
        alt="Minha Foto de Perfil"
        src={githubAvatarUrl}
        style={{ margin: 'auto' }}
        sx={{ width: 84, height: 84 }}
      />*/}
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
              Nome:{' '}
            </Box>
            {dadosDaAvaliacao.nome}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              E-mail:{' '}
            </Box>
            {dadosDaAvaliacao.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Gênero:{' '}
            </Box>
            {dadosDaAvaliacao.genero}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Data de Nascimento:{' '}
            </Box>
            {dadosDaAvaliacao.dataDeNascimento}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography align={isSmallScreen ? 'left' : 'left'}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Idade:{' '}
            </Box>
            {dadosDaAvaliacao.idade} anos
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InformacoesPessoais;
