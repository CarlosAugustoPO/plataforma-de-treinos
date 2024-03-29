import React from 'react';
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

const InformacoesSobreARotina = ({ dadosDaAvaliacao }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      {dadosDaAvaliacao.horaDeDormir ||
      dadosDaAvaliacao.horaDeAcordar ||
      dadosDaAvaliacao.qualidadeDoSono ||
      dadosDaAvaliacao.humorDiario ||
      dadosDaAvaliacao.estrategiasContraEstresse ||
      dadosDaAvaliacao.estrategiasDeLazer ||
      dadosDaAvaliacao.rotinaDeTrabalho ||
      dadosDaAvaliacao.meioDeTransporteParaTrabalho ||
      dadosDaAvaliacao.rotinaDiariaDetalhes ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph>Informações Sobre a Rotina</Title>
          <Grid
            container
            sx={{
              width: '90%',
              paddingLeft: '05%',
            }}
          >
            {dadosDaAvaliacao.horaDeDormir &&
            dadosDaAvaliacao.horaDeDormir !== '' &&
            dadosDaAvaliacao.horaDeDormir !== 'hide' &&
            dadosDaAvaliacao.horaDeDormir !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>Que horas dorme:</strong>{' '}
                  {dadosDaAvaliacao.horaDeDormir}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.horaDeAcordar &&
            dadosDaAvaliacao.horaDeAcordar !== '' &&
            dadosDaAvaliacao.horaDeAcordar !== 'hide' &&
            dadosDaAvaliacao.horaDeAcordar !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>Que horas acorda:</strong>{' '}
                  {dadosDaAvaliacao.horaDeAcordar}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.qualidadeDoSono &&
            dadosDaAvaliacao.qualidadeDoSono !== '' &&
            dadosDaAvaliacao.qualidadeDoSono !== 'hide' &&
            dadosDaAvaliacao.qualidadeDoSono !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>
                    Como considera a qualidade do seu sono:
                  </strong>{' '}
                  {dadosDaAvaliacao.qualidadeDoSono}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.rotinaDiariaDetalhes &&
            dadosDaAvaliacao.rotinaDiariaDetalhes !== '' &&
            dadosDaAvaliacao.rotinaDiariaDetalhes !== 'hide' &&
            dadosDaAvaliacao.rotinaDiariaDetalhes !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>Como é a sua rotina diária?</strong>{' '}
                  {dadosDaAvaliacao.rotinaDiariaDetalhes}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.humorDiario &&
            dadosDaAvaliacao.humorDiario !== '' &&
            dadosDaAvaliacao.humorDiario !== 'hide' &&
            dadosDaAvaliacao.humorDiario !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>
                    Como é seu humor ao longo do dia:
                  </strong>{' '}
                  {dadosDaAvaliacao.humorDiario}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.estrategiasContraEstresse &&
            dadosDaAvaliacao.estrategiasContraEstresse !== '' &&
            dadosDaAvaliacao.estrategiasContraEstresse !==
              'hide' &&
            dadosDaAvaliacao.estrategiasContraEstresse !==
              null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>
                    O que costuma fazer nos momentos de humor
                    abalado?
                  </strong>{' '}
                  {dadosDaAvaliacao.estrategiasContraEstresse}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.estrategiasDeLazer &&
            dadosDaAvaliacao.estrategiasDeLazer !== '' &&
            dadosDaAvaliacao.estrategiasDeLazer !== 'hide' &&
            dadosDaAvaliacao.estrategiasDeLazer !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>
                    Como costuma fazer nos momentos de lazer?
                  </strong>{' '}
                  {dadosDaAvaliacao.estrategiasDeLazer}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.rotinaDeTrabalho &&
            dadosDaAvaliacao.rotinaDeTrabalho !== '' &&
            dadosDaAvaliacao.rotinaDeTrabalho !== 'hide' &&
            dadosDaAvaliacao.rotinaDeTrabalho !== null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>Como é sua rotina de trabalho?</strong>{' '}
                  {dadosDaAvaliacao.rotinaDeTrabalho}
                </Typography>
              </Grid>
            ) : null}

            {dadosDaAvaliacao.meioDeTransporteParaTrabalho &&
            dadosDaAvaliacao.meioDeTransporteParaTrabalho !==
              '' &&
            dadosDaAvaliacao.meioDeTransporteParaTrabalho !==
              'hide' &&
            dadosDaAvaliacao.meioDeTransporteParaTrabalho !==
              null ? (
              <Grid item xs={12} sm={12}>
                <Typography
                  align={isSmallScreen ? 'left' : 'left'}
                >
                  <strong>
                    Como costuma ir para o trabalho?
                  </strong>{' '}
                  {dadosDaAvaliacao.meioDeTransporteParaTrabalho}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default InformacoesSobreARotina;
