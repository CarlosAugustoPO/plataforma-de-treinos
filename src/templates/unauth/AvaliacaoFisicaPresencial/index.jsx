import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import FirstNameField from 'src/components/Form/FirstNameField';
import { useLeavePageConfirmation } from 'src/components/useLeavePageConfirmation';
import EmailFieldWithConfirm from 'src/components/Form/EmailFieldWithConfirm';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Button } from '@mui/material';
import { Box, TextField } from '@mui/material';
import Caption from 'src/components/Caption/index';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Title from 'src/components/Title/index';
import Image from 'next/image';
import Text from 'src/components/Text/index';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { differenceInYears, format, parse } from 'date-fns';

//Hooks

const githubAvatarUrl =
  'https://avatars.githubusercontent.com/CarlosAugustoPO';

export default function IndexUnauthTemplate() {
  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  const [formIsDirty, setFormIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailExistsError, setEmailExistsError] =
    useState(undefined);
  const [lastFieldError, setLastFieldError] =
    useState(undefined);

  useLeavePageConfirmation(formIsDirty);

  const {
    register,
    watch,
    clearErrors,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const dataDeNascimento = watch('dataDeNascimento'); // Obtém o valor do campo de data de nascimento
  const selectedPretendeCorrer = watch('pretendeCorrer'); // Obtém o valor do campo de data de nascimento
  const selectedPretendeMelhorarFlexibilidade = watch(
    'pretendeMelhorarFlexibilidade',
  ); // Obtém o valor do campo de data de nascimento

  const calcularIdade = (dataDeNascimento) => {
    if (dataDeNascimento) {
      const idade = differenceInYears(
        new Date(),
        new Date(dataDeNascimento),
      );
      return idade;
    }
    return '';
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    if (selectedPretendeCorrer !== 'sim') {
      setValue('objetivosComCorrida', 'hide');
      clearErrors('objetivosComCorrida');
      setValue('jaTemTreinoDeCorrida', 'hide');
      clearErrors('jaTemTreinoDeCorrida');
    } else {
      setValue('objetivosComCorrida', '');
      setValue('jaTemTreinoDeCorrida', '');
    }
  }, [selectedPretendeCorrer, clearErrors, setValue]);

  useEffect(() => {
    if (selectedPretendeMelhorarFlexibilidade !== 'sim') {
      setValue('objetivosComFlexibilidade', 'hide');
      clearErrors('objetivosComFlexibilidade');
    } else {
      setValue('objetivosComFlexibilidade', '');
    }
  }, [
    selectedPretendeMelhorarFlexibilidade,
    clearErrors,
    setValue,
  ]);

  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }

  const onSubmit = async (data) => {
    // setLoading(true);
    setFormIsDirty(false);

    data.dataDeNascimento = format(
      parse(data.dataDeNascimento, 'yyyy-MM-dd', new Date()),
      'dd/MM/yyyy',
    );

    // Create a Checkout Session.
    alert(
      'clientName:' +
        data.clientName +
        ' ' +
        'clientEmail:' +
        data.clientEmail +
        ' ' +
        'dataDeNascimento:' +
        data.dataDeNascimento +
        ' ' +
        'idade:' +
        data.idade +
        ' ' +
        'genero:' +
        data.genero +
        ' ' +
        'objetivoEstetico:' +
        data.objetivoEstetico +
        ' ' +
        'pontosFracosEsticos:' +
        data.pontosFracosEsticos +
        ' ' +
        'objetivosExtrasMusculacao:' +
        data.objetivosExtrasMusculacao +
        ' ' +
        'pretendeCorrer:' +
        data.pretendeCorrer +
        ' ' +
        'objetivosComCorrida:' +
        data.objetivosComCorrida +
        ' ' +
        'jaTemTreinoDeCorrida:' +
        data.jaTemTreinoDeCorrida +
        ' ' +
        'pretendeMelhorarFlexibilidade:' +
        data.pretendeMelhorarFlexibilidade +
        ' ' +
        'objetivosComFlexibilidade:' +
        data.objetivosComFlexibilidade +
        ' ' +
        'comoPossoTeAjudar:' +
        data.comoPossoTeAjudar +
        ' ' +
        'haQuantoTempoTreinaMusculacao:' +
        data.haQuantoTempoTreinaMusculacao +
        ' ' +
        'quantidadeDeTreinosPorSemana:' +
        data.quantidadeDeTreinosPorSemana +
        ' ' +
        'quantidadeDeTreinosPorSemanaPretendido:' +
        data.quantidadeDeTreinosPorSemanaPretendido +
        ' ' +
        'plusInfo:' +
        data.plusInfo +
        ' ',
    );
    // try {
    //   const response = await fetch('/api/submit-form', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //
    //   if (!response.ok) {
    //     throw new Error('Something went wrong');
    //   }
    //
    //   setLoading(false);
    //   alert('Form submitted successfully!');
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    //   alert('Error submitting form');
    // }
  };

  return (
    <Box
      className="container"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Box
        className="heroBanner"
        data-aos="fade-down"
        data-aos-once="true"
        sx={{
          padding: '5%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20px',
            right: '-110px',
            opacity: '0.15',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <Image
            data-aos="fade-left"
            data-aos-once="true"
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={400}
            height={400}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <div
          data-aos="fade-right"
          style={{
            maxWidth: '960px',
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto 0 auto',
          }}
        >
          <Avatar
            alt="Minha Foto de Perfil"
            src={githubAvatarUrl}
            style={{ marginRight: '5px' }}
            sx={{ width: 56, height: 56 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <Text variant="body1">Prof. Me. Carlos Augusto</Text>
            <Text variant="caption" sx={{ marginTop: '-5px' }}>
              CREF: 099.681-G/SP
            </Text>
          </div>
        </div>
        <Box
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          <Title
            align="left"
            mt={2}
            paragraph
            data-aos="fade-right"
          >
            Avalição Física Presencial
          </Title>

          <Box
            sx={{
              display: 'flex',
              maxWidth: '700px',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              margin: 'auto',
              alignItems: 'center',
            }}
          >
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: 'flex',
                maxWidth: '700px',
                width: '100%',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Title
                align="center"
                alignSelf="center"
                sx={{
                  selfAlign: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 740px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Informações Pessoais
              </Title>
              <FirstNameField
                id="clientName"
                mt="2.5%"
                mb="0%"
                width="95%"
                label="Nome"
                autoFocus={true}
                required={true}
                variant="outlined"
                errors={errors.clientName?.type}
                clearErrors={clearErrors}
                setLastFieldError={setLastFieldError}
                lastFieldError={lastFieldError}
                register={register}
                placeholder="Por favor, insira seu nome"
              />
              <EmailFieldWithConfirm
                id1="clientEmail"
                id2="confirmEmail"
                label1="E-mail"
                label2="Confirme seu e-mail"
                placeholder1="Por favor, insira seu e-mail"
                placeholder2="Por favor, confirme seu e-mail"
                emailErrors={errors.clientEmail?.type}
                confirmEmailErrors={errors.confirmEmail?.type}
                getValues={getValues}
                clearErrors={clearErrors}
                setLastFieldError={setLastFieldError}
                lastFieldError={lastFieldError}
                emailExistsError={emailExistsError}
                setEmailExistsError={setEmailExistsError}
                register={register}
                mt="2.5%"
                mb="0%"
                width="95%"
                autoFocus={false}
                required={true}
                variant="outlined"
              />
              <TextField
                id="dataDeNascimento"
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Insira sua data de nascimento"
                label="Data de Nascimento"
                type="date"
                autoFocus={false}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                error={
                  errors.dataDeNascimento?.type ? true : false
                }
                required={true}
                {...register('dataDeNascimento', {
                  required: true,
                })}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.dataDeNascimento?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo data de nascimento é obrigatório
                  </Text>
                )}
              </Grid>
              {dataDeNascimento && (
                <TextField
                  id="idade"
                  value={calcularIdade(dataDeNascimento)}
                  sx={{
                    width: '95%',
                    m: '3% 2.5% 0 2.5%',
                  }}
                  label="Idade"
                  autoFocus={false}
                  variant="outlined"
                  error={errors.idade?.type ? true : false}
                  {...register('idade', {
                    required: true,
                  })}
                />
              )}
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.idade?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo idade é obrigatório
                  </Text>
                )}
              </Grid>{' '}
              <TextField
                id="genero"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Insira seu genero"
                label="Gênero"
                select
                autoFocus={false}
                variant="outlined"
                error={errors.genero?.type ? true : false}
                required={true}
                {...register('genero', {
                  required: true,
                })}
              >
                <MenuItem value={'masculino'}>
                  Masculino
                </MenuItem>
                <MenuItem value={'Feminino'}>Feminino</MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.genero?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo gênero é obrigatório
                  </Text>
                )}
              </Grid>
              <Title
                align="center"
                alignSelf="center"
                sx={{
                  selfAlign: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 740px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Objetivos e Espectativas
              </Title>
              <TextField
                id="objetivoEstetico"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Informe sua prioridade estética"
                label="Qual seu objetivo/prioridade estética"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.objetivoEstetico?.type ? true : false
                }
                required={true}
                {...register('objetivoEstetico', {
                  required: true,
                })}
              >
                <MenuItem value={'emagrecimento'}>
                  Diminuir gordura
                </MenuItem>
                <MenuItem value={'hipertrofia'}>
                  Aumentar massa muscular
                </MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.objetivoEstetico?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo objetivo estético é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="pontosFracosEsticos"
                multiline
                rows={4}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Ex: Flancos, coxa retida..."
                label="Quais seu pontos fracos em relação a estética?"
                autoFocus={false}
                variant="outlined"
                error={
                  errors.pontosFracosEsticos?.type ? true : false
                }
                required={true}
                {...register('pontosFracosEsticos', {
                  required: true,
                })}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.pontosFracosEsticos?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo pontos fracos é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="objetivosExtrasMusculacao"
                multiline
                rows={4}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Ex: Fortalecer joelho, específico para algum esporte..."
                label="Qual seu objetivo, além da estética, com a musculação?"
                autoFocus={false}
                variant="outlined"
                error={
                  errors.objetivosExtrasMusculacao?.type
                    ? true
                    : false
                }
                required={true}
                {...register('objetivosExtrasMusculacao', {
                  required: true,
                })}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.objetivosExtrasMusculacao?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo objetivos extras com a musculação é
                    obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="pretendeCorrer"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Você pretende correr?"
                label="Você pretende correr?"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.pretendeCorrer?.type ? true : false
                }
                required={true}
                {...register('pretendeCorrer', {
                  required: true,
                })}
              >
                <MenuItem value={'sim'}>Sim</MenuItem>
                <MenuItem value={'nao'}>Não</MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.pretendeCorrer?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo pretende correr é obrigatório
                  </Text>
                )}
              </Grid>
              {selectedPretendeCorrer === 'sim' && (
                <TextField
                  id="objetivosComCorrida"
                  multiline
                  rows={4}
                  sx={{
                    width: '95%',
                    m: '3% 2.5% 0 2.5%',
                    textAlign: 'left',
                  }}
                  placeholder="Ex: correr 5km"
                  label="Quais seus objetivos com a corrida?"
                  autoFocus={false}
                  variant="outlined"
                  error={
                    errors.objetivosComCorrida?.type
                      ? true
                      : false
                  }
                  required={true}
                  {...register('objetivosComCorrida', {
                    required: true,
                  })}
                />
              )}
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.objetivosComCorrida?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo objetivos com a corrida é obrigatório
                  </Text>
                )}
              </Grid>
              {selectedPretendeCorrer === 'sim' && (
                <TextField
                  id="jaTemTreinoDeCorrida"
                  onChange={handleChange}
                  sx={{
                    width: '95%',
                    m: '3% 2.5% 0 2.5%',
                    textAlign: 'left',
                  }}
                  label="Você já tem seu treino de corrida?"
                  select
                  autoFocus={false}
                  variant="outlined"
                  error={
                    errors.jaTemTreinoDeCorrida?.type
                      ? true
                      : false
                  }
                  required={true}
                  {...register('jaTemTreinoDeCorrida', {
                    required: true,
                  })}
                >
                  <MenuItem value={'não'}>Ainda não</MenuItem>
                  <MenuItem value={'sim'}>Já tenho</MenuItem>
                  <MenuItem value={'contratarei'}>
                    Vou contratar uma consultoria
                  </MenuItem>
                </TextField>
              )}
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.jaTemTreinoDeCorrida?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo sobre o treino de corrida é
                    obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="pretendeMelhorarFlexibilidade"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Você pretende correr?"
                label="Você pretende melhorar a flexibilidade?"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.pretendeMelhorarFlexibilidade?.type
                    ? true
                    : false
                }
                required={true}
                {...register('pretendeMelhorarFlexibilidade', {
                  required: true,
                })}
              >
                <MenuItem value={'sim'}>Sim</MenuItem>
                <MenuItem value={'nao'}>Não</MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.pretendeMelhorarFlexibilidade?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo pretende melhorar flexibilidade é
                    obrigatório
                  </Text>
                )}
              </Grid>
              {selectedPretendeMelhorarFlexibilidade ===
                'sim' && (
                <TextField
                  id="objetivosComFlexibilidade"
                  multiline
                  rows={4}
                  sx={{
                    width: '95%',
                    m: '3% 2.5% 0 2.5%',
                    textAlign: 'left',
                  }}
                  placeholder="Ex: correr 5km"
                  label="Quais seus objetivos com a flexibilidade?"
                  autoFocus={false}
                  variant="outlined"
                  error={
                    errors.objetivosComFlexibilidade?.type
                      ? true
                      : false
                  }
                  required={true}
                  {...register('objetivosComFlexibilidade', {
                    required: true,
                  })}
                />
              )}
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.objetivosComFlexibilidade?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo objetivos com a flexibilidade é
                    obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="comoPossoTeAjudar"
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Como você acredita que a consultoria mais pode te ajudar?"
                label="Espectativas sobre a consultoria"
                variant="outlined"
                multiline
                rows={4}
                {...register('comoPossoTeAjudar')}
              />
              <Title
                align="center"
                alignSelf="center"
                sx={{
                  selfAlign: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 740px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Informações Sobre o Treino
              </Title>
              <TextField
                id="haQuantoTempoTreinaMusculacao"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Informe a quanto tempo treina musculação"
                label="Tempo de treino de musculação"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.haQuantoTempoTreinaMusculacao?.type
                    ? true
                    : false
                }
                required={true}
                {...register('haQuantoTempoTreinaMusculacao', {
                  required: true,
                })}
              >
                <MenuItem value={'aindaNaoTreina'}>
                  Ainda não treina
                </MenuItem>
                <MenuItem value={'menosDe1Mes'}>
                  Menos de 1 mês
                </MenuItem>
                <MenuItem value={'de1a3meses'}>
                  De 1 a 3 meses
                </MenuItem>
                <MenuItem value={'de3a6meses'}>
                  De 3 a 6 meses
                </MenuItem>
                <MenuItem value={'de6a12meses'}>
                  De 6 meses a 1 ano
                </MenuItem>
                <MenuItem value={'maisDe1ano'}>
                  Mais de 1 ano
                </MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.haQuantoTempoTreinaMusculacao?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo tempo de treino de musculação é
                    obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="quantidadeDeTreinosPorSemana"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Informe sua frequência semanal"
                label="Quantas vezes por semanas você treina musculação"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.quantidadeDeTreinosPorSemana?.type
                    ? true
                    : false
                }
                required={true}
                {...register('quantidadeDeTreinosPorSemana', {
                  required: true,
                })}
              >
                <MenuItem value={'aindaNaoTreina'}>
                  Ainda não treina
                </MenuItem>
                <MenuItem value={'1VezPorSemana'}>
                  1 vez por semana
                </MenuItem>
                <MenuItem value={'2VezesPorSemana'}>
                  2 vezes por semana
                </MenuItem>
                <MenuItem value={'3VezesPorSemana'}>
                  3 vezes por semana
                </MenuItem>
                <MenuItem value={'4VezesPorSemana'}>
                  4 vezes por semana
                </MenuItem>
                <MenuItem value={'5VezesPorSemana'}>
                  5 vezes por semana
                </MenuItem>
                <MenuItem value={'6VezesPorSemana'}>
                  6 vezes por semana
                </MenuItem>
                <MenuItem value={'7VezesPorSemana'}>
                  7 vezes por semana
                </MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.quantidadeDeTreinosPorSemana?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo frequência semanal de treino de
                    musculação é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="quantidadeDeTreinosPorSemanaPretendido"
                onChange={handleChange}
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                  textAlign: 'left',
                }}
                placeholder="Informe sua frequência semanal pretendida"
                label="Pretende treinar musculação quantas x por semana?"
                select
                autoFocus={false}
                variant="outlined"
                error={
                  errors.quantidadeDeTreinosPorSemanaPretendido
                    ?.type
                    ? true
                    : false
                }
                required={true}
                {...register(
                  'quantidadeDeTreinosPorSemanaPretendido',
                  {
                    required: true,
                  },
                )}
              >
                <MenuItem value={'1VezPorSemana'}>
                  1 vez por semana
                </MenuItem>
                <MenuItem value={'2VezesPorSemana'}>
                  2 vezes por semana
                </MenuItem>
                <MenuItem value={'3VezesPorSemana'}>
                  3 vezes por semana
                </MenuItem>
                <MenuItem value={'4VezesPorSemana'}>
                  4 vezes por semana
                </MenuItem>
                <MenuItem value={'5VezesPorSemana'}>
                  5 vezes por semana
                </MenuItem>
                <MenuItem value={'6VezesPorSemana'}>
                  6 vezes por semana
                </MenuItem>
                <MenuItem value={'7VezesPorSemana'}>
                  7 vezes por semana
                </MenuItem>
              </TextField>
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.quantidadeDeTreinosPorSemanaPretendido
                  ?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo frequência semanal de treino de
                    musculação pretendida é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="horarioDeTreinoMusculacao"
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Insira o horário que tem ido treinar"
                required={true}
                label="Que horas você treina atualmente?"
                variant="outlined"
                error={
                  errors.horarioDeTreinoMusculacao?.type
                    ? true
                    : false
                }
                {...register('horarioDeTreinoMusculacao', {
                  required: true,
                  pattern: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                })}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.horarioDeTreinoMusculacao?.type ===
                  'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo horario de treino de musculação atual
                    é obrigatório
                  </Text>
                )}
                {errors.horarioDeTreinoMusculacao?.type ===
                  'pattern' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    Digite uma hora válida no formato HH:mm.
                    Ex(08:00)
                  </Text>
                )}
              </Grid>
              <TextField
                id="horarioDesejadoDeTreinoMusculacao"
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Insira o horário que quer ir treinar"
                required={true}
                label="Que horas você pretende treinar?"
                variant="outlined"
                error={
                  errors.horarioDesejadoDeTreinoMusculacao?.type
                    ? true
                    : false
                }
                {...register(
                  'horarioDesejadoDeTreinoMusculacao',
                  {
                    required: true,
                    pattern:
                      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                  },
                )}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.horarioDesejadoDeTreinoMusculacao
                  ?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo horario desejado de treino de
                    musculação é obrigatório
                  </Text>
                )}
                {errors.horarioDesejadoDeTreinoMusculacao
                  ?.type === 'pattern' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    Digite uma hora válida no formato HH:mm.
                    Ex(08:00)
                  </Text>
                )}
              </Grid>
              <TextField
                id="duracaoAtualTreinoMusculacao"
                type="number"
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                }}
                label="Quantos minutos dura seu treino de musculação"
                required={true}
                placeholder="ex: 90"
                autoFocus={false}
                variant="outlined"
                error={
                  errors.duracaoAtualTreinoMusculacao?.type
                    ? true
                    : false
                }
                {...register('duracaoAtualTreinoMusculacao', {
                  required: true,
                })}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.idade?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo duração atual do treino de musculação
                    é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="duracaoPretendidaTreinoMusculacao"
                type="number"
                sx={{
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                }}
                label="Quantos minutos você gostaria que durasse seu treino de musculação"
                required={true}
                placeholder="ex: 90"
                autoFocus={false}
                variant="outlined"
                error={
                  errors.duracaoAtualTreinoMusculacao?.type
                    ? true
                    : false
                }
                {...register(
                  'duracaoPretendidaTreinoMusculacao',
                  {
                    required: true,
                  },
                )}
              />
              <Grid
                item
                xs={12}
                sx={{
                  width: `${'95%'}`,
                  m: `0% 2.5% '0%' 2.5%`,
                }}
              >
                {errors.duracaoPretendidaTreinoMusculacao
                  ?.type === 'required' && (
                  <Text
                    color="error"
                    fontSize="80%"
                    align="left"
                    variant="subtitle2"
                  >
                    O campo duração pretendida do treino de
                    musculação é obrigatório
                  </Text>
                )}
              </Grid>
              <TextField
                id="plusInfo"
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Por favor, compartilhe algo que irá ajudar-me no preparo para nosso encontro"
                label="Informações Adicionais"
                variant="outlined"
                multiline
                rows={4}
                {...register('plusInfo')}
              />
              <Box
                mt={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '95%',
                  m: '3% 2.5% 0 2.5%',
                }}
              >
                <Button
                  type="submit"
                  startIcon={<EventAvailableIcon />}
                  disabled={loading}
                  variant="outlined"
                  color="success"
                  onClick={handleErrors}
                >
                  Enviar Avaliação
                </Button>
              </Box>
            </form>
          </Box>
        </Box>

        <Box
          className="footer"
          sx={{ padding: '0 5%', mb: 4, mt: 4 }}
        >
          <Box mt="10px">
            <Text
              fontSize="70%"
              sx={{ color: 'clearComment.main' }}
            >
              Importante: A prática de atividade física envolve
              riscos para a saúde e segurança. Certifique-se de
              ler todas as orientações fornecidas e consultar seu
              médico antes de começar qualquer programa de
              avaliação física ou exercício físico. Siga as
              recomendações do seu avaliador físico e informe-o
              imediatamente se sentir algum desconforto ou dor
              durante a avaliação.
            </Text>
          </Box>
          <Box mt="10px">
            <Text fontSize="70%" sx={{ color: 'primary.main' }}>
              © 2023 Plataforma de Treinos.{' '}
            </Text>
            <Box>
              <Text
                fontSize="70%"
                sx={{ color: 'clearComment.main' }}
              >
                Todos os direito reservados.
              </Text>
            </Box>
          </Box>
          <Box mb="10px">
            <Text fontSize="70%" sx={{ color: 'success.main' }}>
              Design By:{' '}
              <Caption
                sx={{
                  fontSize: '95%',
                  color: 'clearComment.main',
                }}
              >
                Carlos Augusto
              </Caption>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
