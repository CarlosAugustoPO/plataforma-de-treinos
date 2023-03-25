import * as React from 'react';
import { useForm } from 'react-hook-form';
import FirstNameField from 'src/components/Form/FirstNameField';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import EventIcon from '@mui/icons-material/Event';
import { useRef } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { format } from 'date-fns';
import { DialogActions, Button } from '@mui/material';
import { Box, TextField } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { Modal } from '@mui/material';
import dayjs from 'dayjs';
import Recommendations from 'src/components/Recommendations';
import PayInfo from 'src/components/PayInfo';
import AccompanimentButton from 'src/components/AccompanimentButton';
import getStripe from 'src/lib/utils/getStripe/index.js';
import { fetchPostJSON } from 'src/lib/utils/apiHelpers/index.js';
import Caption from 'src/components/Caption/index';
import PaymentsIcon from '@mui/icons-material/Payments';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { useState } from 'react';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Title from 'src/components/Title/index';
import Image from 'next/image';
import AngleDivisor from 'src/components/AngleDivisor/index';
import Text from 'src/components/Text/index';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
//Hooks

dayjs.locale('pt-br');
const githubAvatarUrl =
  'https://avatars.githubusercontent.com/CarlosAugustoPO';
const today = dayjs();
const lastDayOfNextMonth = today
  .add(1, 'month') //número de meses disponíveis
  .startOf('month')
  .add(1, 'month')
  .subtract(1, 'day');

const plus30days = dayjs().add(30, 'day').endOf('day');

const availability = {
  sunday: [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '00:00',
  ],
  monday: ['10:00', '11:00', '12:00', '14:00', '15:00'],
  tuesday: ['11:00', '12:00', '13:00', '15:00', '16:00'],
  wednesday: ['12:00', '13:00', '14:00', '16:00', '17:00'],
  thursday: ['13:00', '14:00', '15:00', '17:00', '18:00'],
  friday: ['14:00', '15:00', '16:00', '18:00', '19:00'],
  saturday: ['15:00', '16:00', '17:00', '19:00', '20:00'],
};

const busySlots = {
  // yyyy-MM-dd
  '2023-03-04': ['15:00', '11:30'],
  '2023-03-24': ['14:00', '18:00'],
};

const location =
  'Av. Alm. Cochrane, 187 - Embaré, Santos - SP, 11040-001';
export default function IndexUnauthTemplate() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [accompanimentName, setAccompanimentName] = useState('');
  const [accompanimentEmail, setAccompanimentEmail] =
    useState('');
  const [open, setOpen] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] =
    useState(null);
  const [buttonList, setButtonList] = useState([]);
  const [dateChoiseInvisible, setDateChoiceInvisible] =
    useState(null);
  const [showMore, setShowMore] = useState(false);
  const [scrollToButtonColumn, setScrollToButtonColumn] =
    useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const selectedDateCor = new Date(selectedDate);

  const [finalTime, setFinalTime] = useState(null);
  const [datePickerDisabled, setDatePickerDisabled] =
    useState(false);
  const anchorRef = useRef(null);

  const [emailExistsError, setEmailExistsError] =
    useState(undefined);
  const [lastFieldError, setLastFieldError] =
    useState(undefined);

  const {
    register,
    clearErrors,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    if (scrollToButtonColumn && anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToButtonColumn(false);
    }
  }, [scrollToButtonColumn]);

  const handleShowMore = () => {
    setShowMore(false); // altera o estado showMore para false
  };

  function handleErrors() {
    setLastFieldError('');
    clearErrors();
  }
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSubmitToStripe = async (data) => {
    setLoading(true);
    showSnackbarWithMessage(errors.clientName?.type);
    // Create a Checkout Session.
    const response = await fetchPostJSON(
      '/api/checkout_sessions',
      {
        amount: '8000',
        productName: 'Agendamento de Avaliação Física',
        date: selectedDateCor?.toLocaleDateString('pt-BR'),
        time: `Das ${selectedTime} às ${finalTime}`,
        clientEmail: email,
        clientName: data.clientName,
        accompanimentEmail: accompanimentEmail,
        accompanimentName: accompanimentName,
        message: message,
        location: location,
        description: `
        Avaliação física na ${dayjs(selectedDateCor).format(
          'dddd',
        )},
        dia ${selectedDateCor?.toLocaleDateString('pt-BR')},
        das ${selectedTime} às ${finalTime},
        em ${location}`,
      },
    );

    if (response.statusCode === 500) {
      showSnackbarWithMessage(response.message);
      setLoading(false);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });
    console.warn(error.message);
    showSnackbarWithMessage(error.message);
    setLoading(false);
  };

  const handleCancelModal = () => {
    setSelectedButtonIndex(null);
    setSelectedTime(null);
    setSelectedDate(null);
    setOpen(false);
  };

  const handleConfirmModal = () => {
    setOpen(false);
    setShowMore(false);
    setDateChoiceInvisible(true);
    setSelectedButtonIndex(null);
    setOpen(false);
    setDatePickerDisabled(true);
    handleShowMore();
  };

  const handleCancelDate = () => {
    setName('');
    setEmail('');
    setMessage('');
    setDateChoiceInvisible(false);
    setDatePickerDisabled(false);
    setSelectedTime(null);
    setSelectedDate(null);
    setFinalTime(null);
  };
  const showSnackbarWithMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };

  const handleCancelTime = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSelectedButtonIndex(null);
    setDateChoiceInvisible(false);
    setDatePickerDisabled(false);
    setSelectedTime(null);
    setFinalTime(null);
  };

  const handleScheduleMeeting = () => {
    if (!selectedDate) {
      showSnackbarWithMessage('Por favor, selecione uma data.');
      return;
    }
    if (!selectedTime) {
      showSnackbarWithMessage(
        'Por favor, selecione um horário.',
      );
      return;
    }
    setOpen(true);
  };

  const handleSelectButton = (index, button) => {
    if (selectedButtonIndex === index) {
      //when cancel
      setSelectedButtonIndex(null);
      setSelectedTime(null);
      setSelectedDate(null);
    } else {
      //when select
      setSelectedButtonIndex(index);
      setSelectedTime(button);
      const newTime = dayjs(button, 'HH:mm');
      const newTimePlus45 = dayjs(newTime).add(45, 'minute');
      const newTimeString = newTimePlus45.format('HH:mm');
      setFinalTime(newTimeString);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dayOfWeek = format(
      new Date(date),
      'EEEE',
    ).toLowerCase();
    setSelectedButtonIndex(null);
    setSelectedTime(null);
    const availableSlots = availability[dayOfWeek];
    const busySlotsOfDay =
      busySlots[format(new Date(date), 'yyyy-MM-dd')] || [];
    const filteredSlots = availableSlots.filter(
      (slot) => !busySlotsOfDay.includes(slot),
    );
    setButtonList(filteredSlots);
    setScrollToButtonColumn(true);
  };

  function disabledDate(date) {
    return date.isAfter(lastDayOfNextMonth);
  }

  // const router = useRouter();
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
            Agende Agora sua Avaliação Física Presencial
          </Title>
          <Box sx={{ pl: 2 }}>
            {selectedDate && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EventIcon
                  color="secondary"
                  style={{ marginRight: '5px' }}
                />
                <Typography variant="body2" textAlign="left">
                  {selectedDateCor?.toLocaleDateString('pt-BR')}{' '}
                  ({dayjs(selectedDateCor).format('dddd')})
                </Typography>

                <Tooltip
                  disableFocusListener
                  title="Trocar data"
                >
                  <IconButton
                    onClick={() => {
                      handleShowMore();
                      handleCancelDate(); // chama a função handleClick
                    }}
                    size="small"
                    aria-label="Trocar data"
                  >
                    <ChangeCircleOutlinedIcon
                      color="error"
                      style={{ transform: 'scale(65%)' }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon
                color="secondary"
                style={{ marginRight: '5px' }}
              />
              {!selectedTime ? (
                <Typography variant="body2" textAlign="left">
                  45 minutos
                </Typography>
              ) : (
                <>
                  <Typography variant="body2" textAlign="left">
                    Das {selectedTime} às {finalTime}
                  </Typography>
                  <Tooltip
                    disableFocusListener
                    title="Trocar horário"
                  >
                    <IconButton
                      onClick={() => {
                        handleShowMore();
                        handleCancelTime(); // chama a função handleClick
                      }}
                      size="small"
                      aria-label="Trocar horário"
                    >
                      <ChangeCircleOutlinedIcon
                        color="error"
                        style={{ transform: 'scale(65%)' }}
                      />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <PaymentsIcon
                color="success"
                style={{ marginRight: '5px' }}
              />
              <Typography variant="body2" textAlign="left">
                R$ 80,00
              </Typography>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <PinDropIcon
                color="error"
                style={{ marginRight: '5px' }}
              />
              <Typography variant="body2" textAlign="left">
                {location}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                maxWidth: '960px',
              }}
            >
              <Recommendations
                showMore={showMore}
                setShowMore={setShowMore}
              />
            </div>
          </Box>
        </Box>
      </Box>

      <AngleDivisor
        color="background.default"
        data-aos="zoom-out-down"
        data-aos-duration="500"
        data-aos-offset="35"
        id="about1"
      >
        <Box
          data-aos="fade-down"
          data-aos-once="false"
          data-aos-offset="70"
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative',
            top: '-60px',
            left: '-50px',
            width: '100px',
            height: '100px',
            opacity: '0.22 !important',
          }}
        >
          <Image
            src="/logo-pdt-blue.png"
            alt="Logo da Plataforma de Treinos"
            width={60}
            height={60}
          />
        </Box>
      </AngleDivisor>

      <Box
        className="about"
        id="about2"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {!dateChoiseInvisible && (
          <Box
            sx={{
              display: 'flex',
              maxWidth: '700px',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 1,
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 600px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Escolha abaixo uma data disponível
              </Typography>
              <div ref={anchorRef}></div>
              <StaticDatePicker
                sx={{ maxWidth: '300px' }}
                value={selectedDate}
                minDate={today}
                maxDate={plus30days} //or lastDayOfNextMonth
                shouldDisableDate={disabledDate}
                displayStaticWrapperAs="desktop"
                disabled={datePickerDisabled}
                views={['day']}
                format="DD/MM/YYYY"
                onChange={(newValue) => {
                  handleDateChange(newValue);
                }}
              />
            </Box>
            {selectedDate && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 0,
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    mb: 1.75,
                    fontWeight: 'bold',
                    '@media (max-width: 600px)': {
                      mt: -2,
                      mb: 2,
                    },
                  }}
                >
                  Escolha abaixo um horário disponível
                </Typography>
                {buttonList.map((button, index) => (
                  <Box
                    key={button}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent:
                        selectedButtonIndex === index
                          ? 'flex-start'
                          : 'center',
                      flexShrink:
                        selectedButtonIndex === index ? 0 : 1,
                      width:
                        selectedButtonIndex === index
                          ? '220px'
                          : '220px',
                      mb: 1,
                    }}
                  >
                    <Button
                      key={button}
                      variant={
                        selectedButtonIndex === index
                          ? 'contained'
                          : 'outlined'
                      }
                      onClick={() =>
                        handleSelectButton(index, button)
                      }
                      sx={{ width: '100%', minWidth: '100px' }}
                    >
                      {button}
                    </Button>
                    {selectedButtonIndex === index && (
                      <Button
                        variant="outlined"
                        onClick={handleScheduleMeeting}
                        sx={{
                          ml: 1,
                          width: '100px',
                          minWidth: '100px',
                        }}
                        color="success"
                      >
                        Confirmar
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
        {dateChoiseInvisible && (
          <Box
            sx={{
              display: 'flex',
              maxWidth: '700px',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              mb: 1,
              alignItems: 'center',
            }}
          >
            <form
              noValidate
              onSubmit={handleSubmit(handleSubmitToStripe)}
              style={{
                display: 'flex',
                maxWidth: '700px',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mb: 1,
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                align="center"
                alignSelf="center"
                sx={{
                  selfAlign: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 600px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Informe os dados do cliente que será avaliado
              </Typography>
              <FirstNameField
                mt="2.5%"
                mb="0%"
                width="95%"
                label="Nome"
                id="clientName"
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
              <TextField
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                label="E-mail"
                placeholder="Por favor, insira seu e-mail"
                variant="outlined"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
              <TextField
                sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
                placeholder="Por favor, compartilhe algo que irá ajudar-me no preparo para nosso encontro"
                label="Informações Adicionais"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
              />
              <AccompanimentButton
                accompanimentName={accompanimentName}
                accompanimentEmail={accompanimentEmail}
                setAccompanimentEmail={setAccompanimentEmail}
                setAccompanimentName={setAccompanimentName}
              />
              <PayInfo />
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
                  Agendar Avaliação
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setShowSnackbar(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            width: '90%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Confirmar Avaliação
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Você tem certeza que gostaria de agendar uma
            avaliação física com o Prof. Carlos no dia{' '}
            {selectedDateCor?.toLocaleDateString('pt-BR')} às{' '}
            {selectedTime} na Av. Alm. Cochrane, 187, no bairro
            do Embaré em Santos?
          </Typography>
          <Box sx={{ mt: 2 }}>
            <DialogActions>
              <Button
                onClick={handleCancelModal}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmModal}
                color="primary"
                variant="contained"
              >
                Confirmar
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </Modal>

      <Box
        className="footer"
        sx={{ padding: '0 5%', mb: 4, mt: 4 }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Box mt="10px">
          <Text
            fontSize="70%"
            sx={{ color: 'clearComment.main' }}
          >
            Assim como qualquer exercício físico, ao praticar os
            treinos propostos pela nossa plataforma de treinos,
            você assume alguns riscos para sua saúde e segurança.
            Isso é especialmente verdadeiro se você não seguir
            todas as recomendações. Por isso, antes de começar,
            leia todo o material fornecido e consulte o seu
            médico para verificar se está apto para a prática de
            atividade física e qual nível de intensidade é
            adequado para você{' '}
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
              Prof. Carlos Augusto
            </Caption>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
