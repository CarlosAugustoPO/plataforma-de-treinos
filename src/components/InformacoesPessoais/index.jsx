import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

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
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph>Informações Pessoais</Title>
      <Grid
        container
        sx={{
          width: '90%',
          paddingLeft: '05%',
        }}
      >
        {dadosDaAvaliacao.nome &&
        dadosDaAvaliacao.nome !== '' &&
        dadosDaAvaliacao.nome !== 'hide' &&
        dadosDaAvaliacao.nome !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Nome:{' '}
              </Box>
              {dadosDaAvaliacao.nome}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.email &&
        dadosDaAvaliacao.email !== '' &&
        dadosDaAvaliacao.email !== 'hide' &&
        dadosDaAvaliacao.email !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                E-mail:{' '}
              </Box>
              {dadosDaAvaliacao.email}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.genero &&
        dadosDaAvaliacao.genero !== '' &&
        dadosDaAvaliacao.genero !== 'hide' &&
        dadosDaAvaliacao.genero !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Gênero:{' '}
              </Box>
              {dadosDaAvaliacao.genero}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.dataDeNascimento &&
        dadosDaAvaliacao.dataDeNascimento !== '' &&
        dadosDaAvaliacao.dataDeNascimento !== 'hide' &&
        dadosDaAvaliacao.dataDeNascimento !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Data de Nascimento:{' '}
              </Box>
              {dadosDaAvaliacao.dataDeNascimento}
            </Typography>
          </Grid>
        ) : null}

        {dadosDaAvaliacao.idade &&
        dadosDaAvaliacao.idade !== '' &&
        dadosDaAvaliacao.idade !== 'hide' &&
        dadosDaAvaliacao.idade !== null ? (
          <Grid item xs={12} sm={12}>
            <Typography align={isSmallScreen ? 'left' : 'left'}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                Idade:{' '}
              </Box>
              {dadosDaAvaliacao.idade} anos
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default InformacoesPessoais;
