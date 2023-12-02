import * as React from 'react';
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
import Title from 'src/components/Title/index';
import Image from 'next/image';
import Text from 'src/components/Text/index';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

//Hooks

const githubAvatarUrl =
  'https://avatars.githubusercontent.com/CarlosAugustoPO';

export default function IndexUnauthTemplate() {
  const [formIsDirty, setFormIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailExistsError, setEmailExistsError] =
    useState(undefined);
  const [lastFieldError, setLastFieldError] =
    useState(undefined);

  useLeavePageConfirmation(formIsDirty);

  const {
    register,
    clearErrors,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }

  const onSubmit = async (data) => {
    // setLoading(true);
    setFormIsDirty(false);
    // Create a Checkout Session.
    alert(data.clientName + data.clientEmail);
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
            Avalição Física Online
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
                variant="body1"
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
                Informe seus dados
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
