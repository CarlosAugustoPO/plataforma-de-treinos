import * as React from 'react';
import { useForm } from 'react-hook-form';
import LocationModal from 'src/components/Modals/LocationModal/index';
import FirstNameField from 'src/components/Form/FirstNameField';
import { useLeavePageConfirmation } from 'src/components/useLeavePageConfirmation';
import EmailFieldWithConfirm from 'src/components/Form/EmailFieldWithConfirm';
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
import AccompanimentButton from 'src/components/AccompanimentButton/index.tsx';
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
// import readAfAvailability from 'src/lib/fetchers/af-availability/read/';
import readAfReservations from 'src/lib/fetchers/af-reservations/read/';

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

const plus30days = today.add(30, 'day').endOf('day');
const plus3days = today.add(3, 'day').endOf('day');

var updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);
dayjs.updateLocale('pt-br', {
  weekdaysMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  weekStart: 0,
});

const availability = {
  sunday: ['08:00', '09:00', '10:00', '11:00'],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
};
// const availability = {
//   sunday: ['08:00', '09:00', '10:00', '11:00'],
//   monday: ['11:00'],
//   tuesday: ['11:00'],
//   wednesday: ['08:00', '09:00', '10:00', '11:00'],
//   thursday: ['11:00'],
//   friday: ['08:00', '09:00', '10:00', '11:00'],
//   saturday: [],
// };

// const busySlots = {
//   // yyyy-MM-dd
//   '2023-05-23': ['06:00', '08:00', '10:00'],
//   '2023-04-10': ['10:00', '11:00', '12:00'],
// };

const locations = [
  'Bluefit - Unidade Santos 3: Av. Alm. Cochrane, 187 - Embaré, Santos - SP',
  'Unique Offices: Avenida Conselheiro Nébias, 703 - Boqueirão, Santos - SP',
];
export default function IndexUnauthTemplate() {
  const [isLocationModalOpen, setIsLocationModalOpen] =
    useState(false);
  const [selectedLocationIndex, setSelectedLocationIndex] =
    useState(0);
  const [
    tempSelectedLocationIndex,
    setTempSelectedLocationIndex,
  ] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  // const [availability, setAvailability] = useState([]);
  const [busySlots, setBusySlots] = useState([]);
  const [formIsDirty, setFormIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmSnackbar, setShowConfirmSnackbar] =
    useState(false);
  const [snackbarConfirmMessage, setSnackbarConfirmMessage] =
    useState('');
  const [showErrorSnackbar, setShowErrorSnackbar] =
    useState(false);
  const [snackbarErrorMessage, setSnackbarErrorMessage] =
    useState('');
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
  const [scrollToFirstNameRef, setScrollToFirstNameRef] =
    useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const selectedDateCor = new Date(selectedDate);

  const [finalTime, setFinalTime] = useState(null);
  const [datePickerDisabled, setDatePickerDisabled] =
    useState(false);
  const anchorRef = useRef(null);
  const firstNameRef = useRef(null);

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

  useEffect(() => {
    if (scrollToButtonColumn && anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToButtonColumn(false);
    }
  }, [scrollToButtonColumn]);

  useEffect(() => {
    if (scrollToFirstNameRef && firstNameRef.current) {
      firstNameRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [scrollToFirstNameRef]);

  useEffect(() => {
    if (selectedLocationIndex === 0) {
      availability.sunday = ['08:00', '09:00', '10:00', '11:00'];
    }
    if (selectedLocationIndex === 1) {
      availability.sunday = [];
    }
  }, [selectedLocationIndex]);

  // useEffect(() => {
  //   const getAfAvalilability = async () => {
  //     const result = await readAfAvailability();
  //     setAvailability(result);
  //   };
  //   getAfAvalilability();
  // }, []);

  useEffect(() => {
    const getAfReservations = async () => {
      const result = await readAfReservations();
      setBusySlots(result);
    };
    getAfReservations();
  }, []);

  const handleTempLocationChange = (index) => {
    setTempSelectedLocationIndex(index);
  };

  const handleLocationChangeConfirm = () => {
    if (tempSelectedLocationIndex === selectedLocationIndex) {
      showSnackbarConfirmWithMessage(
        `Local escolhido permanece ${locations[selectedLocationIndex]}`,
      );
    } else {
      setSelectedLocationIndex(tempSelectedLocationIndex);

      if (selectedLocationIndex === 0) {
        availability.sunday = [];
      }
      if (selectedLocationIndex === 1) {
        availability.sunday = [
          '08:00',
          '09:00',
          '10:00',
          '11:00',
        ];
      }
      setFormIsDirty(false);
      setName('');
      setEmail('');
      setMessage('');
      setDateChoiceInvisible(false);
      setDatePickerDisabled(false);
      setSelectedTime(null);
      setSelectedDate(null);
      setFinalTime(null);
      setScrollToFirstNameRef(false);
      showSnackbarConfirmWithMessage(
        `Troca de local bem sucedida para ${locations[tempSelectedLocationIndex]}`,
      );
    }
    setIsLocationModalOpen(false);
  };

  const selectedLocation = locations[selectedLocationIndex];
  const handleLocationModalOpen = () => {
    setIsLocationModalOpen(true);
  };

  const handleLocationModalClose = () => {
    setTempSelectedLocationIndex(selectedLocationIndex);
    setIsLocationModalOpen(false);
    showSnackbarErrorWithMessage(
      `Troca cancelada! Local escolhido permanece ${locations[selectedLocationIndex]}`,
    );
  };

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
    setFormIsDirty(false);
    // Create a Checkout Session.
    const response = await fetchPostJSON(
      '/api/checkout_sessions',
      {
        amount: '12000',
        productName: 'Agendamento de Avaliação Física',
        time: `Das ${selectedTime} às ${finalTime}`,
        initialTime: selectedTime,
        finalTime: finalTime,
        date: selectedDateCor?.toLocaleDateString('pt-BR'),
        weekDay: dayjs(selectedDateCor).format('dddd'),
        clientEmail: data.clientEmail,
        clientName: data.clientName,
        accompanimentEmail: data.accompanimentEmail,
        accompanimentName: data.accompanimentName,
        plusInfo: data.plusInfo,
        location: selectedLocation,
        description: `
        Avaliação física, com o Avaliador Carlos Augusto, ${dayjs(
          selectedDateCor,
        ).format('dddd')},
        dia ${selectedDateCor?.toLocaleDateString('pt-BR')},
        das ${selectedTime} às ${finalTime},
        em ${selectedLocation}`,
      },
    );

    if (response.statusCode === 500) {
      showSnackbarErrorWithMessage(response.message);
      setLoading(false);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });
    console.warn(error.message);
    showSnackbarErrorWithMessage(error.message);
    setLoading(false);
  };

  const handleCancelModal = () => {
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
    setScrollToFirstNameRef(true);
  };

  const handleCancelDate = () => {
    setFormIsDirty(false);
    setName('');
    setEmail('');
    setMessage('');
    setDateChoiceInvisible(false);
    setDatePickerDisabled(false);
    setSelectedTime(null);
    setSelectedDate(null);
    setFinalTime(null);
    setScrollToFirstNameRef(false);
    showSnackbarErrorWithMessage(
      `Por favor, escolha uma nova data`,
    );
  };
  const showSnackbarErrorWithMessage = (message) => {
    setSnackbarErrorMessage(message);
    setShowErrorSnackbar(true);
  };
  const showSnackbarConfirmWithMessage = (message) => {
    setSnackbarConfirmMessage(message);
    setShowConfirmSnackbar(true);
  };
  const handleCancelTime = () => {
    setScrollToFirstNameRef(false);
    setName('');
    setEmail('');
    setMessage('');
    setSelectedButtonIndex(null);
    setDateChoiceInvisible(false);
    setDatePickerDisabled(false);
    setSelectedTime(null);
    setFinalTime(null);
    showSnackbarErrorWithMessage(
      'Por favor, selecione um novo horário.',
    );
  };

  const handleScheduleMeeting = () => {
    if (!selectedDate) {
      showSnackbarErrorWithMessage(
        'Por favor, selecione uma data.',
      );
      return;
    }
    if (!selectedTime) {
      showSnackbarErrorWithMessage(
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
    setFormIsDirty(true);
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

  function isDayFullyBooked(date) {
    const day = format(new Date(date), 'yyyy-MM-dd');
    const availableSlots =
      availability[format(new Date(date), 'EEEE').toLowerCase()];
    const busySlotsOfDay = busySlots[day] || [];
    const filteredSlots = availableSlots.filter(
      (slot) => !busySlotsOfDay.includes(slot),
    );
    return filteredSlots.length === 0;
  }

  function disabledDate(date) {
    const dayOfWeek = format(
      new Date(date),
      'EEEE',
    ).toLowerCase();
    return (
      !availability[dayOfWeek]?.length ||
      date.isAfter(lastDayOfNextMonth) ||
      isDayFullyBooked(date)
    );
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
            Agende Agora sua Avaliação Física Presencial
          </Title>
          <Box sx={{ pl: 2 }}>
            <div
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <PinDropIcon
                color="error"
                style={{ marginRight: '5px' }}
              />
              <Typography
                variant="body2"
                textAlign="left"
                sx={{ fontWeight: 'bold' }}
              >
                Local:
                <Box
                  sx={{
                    fontWeight: 'normal',
                  }}
                  component="span"
                >
                  {' '}
                  {selectedLocation ?? 'carregando...'}
                </Box>{' '}
              </Typography>

              <Tooltip disableFocusListener title="Trocar local">
                <IconButton
                  onClick={() => {
                    handleShowMore();
                    handleLocationModalOpen(); // chama a função handleClick
                  }}
                  size="small"
                  aria-label="Trocar local"
                >
                  <ChangeCircleOutlinedIcon
                    color="error"
                    style={{ transform: 'scale(65%)' }}
                  />
                </IconButton>
              </Tooltip>

              <Modal
                open={isLocationModalOpen}
                onClose={handleLocationModalClose}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 2,
                    width: '700px',
                    maxWidth: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Title
                    variant="body1"
                    sx={{
                      fontSize: '120%',
                      alignSelf: 'flex-start',
                      fontWeight: 'bold',
                      mt: 1,
                      mb: 2,
                      '@media (max-width: 740px)': {
                        mt: 0,
                        mb: 2,
                      },
                    }}
                  >
                    Selecione a Localização
                  </Title>
                  {locations.map((location, index) => (
                    <Box
                      key={location}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:
                          tempSelectedLocationIndex === index
                            ? 'flex-start'
                            : 'center',
                        flexShrink:
                          tempSelectedLocationIndex === index
                            ? 0
                            : 1,
                        width:
                          tempSelectedLocationIndex === index
                            ? '650px'
                            : '650px',
                        maxWidth:
                          tempSelectedLocationIndex === index
                            ? '100%'
                            : '100%',

                        mb: 1,
                      }}
                    >
                      <Button
                        key={location}
                        variant={
                          tempSelectedLocationIndex === index
                            ? 'contained'
                            : 'outlined'
                        }
                        onClick={() =>
                          handleTempLocationChange(index)
                        }
                        sx={{ width: '650px', maxWidth: '100%' }}
                      >
                        {location}
                      </Button>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    {' '}
                    <Button
                      variant="outlined"
                      onClick={handleLocationChangeConfirm}
                      sx={{
                        margin: 'auto',
                        width: '650px',
                        maxWidth: '100%',
                      }}
                      color="success"
                    >
                      Confirmar troca de local
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </div>
            {selectedDate && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EventIcon
                  color="info"
                  style={{ marginRight: '5px' }}
                />
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  Data:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    {selectedDateCor?.toLocaleDateString(
                      'pt-BR',
                    )}{' '}
                    ({dayjs(selectedDateCor).format('dddd')})
                  </Box>{' '}
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
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  Duração:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    45 minutos
                  </Box>{' '}
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Horário:
                    <Box
                      sx={{
                        fontWeight: 'normal',
                      }}
                      component="span"
                    >
                      {' '}
                      Das {selectedTime} às {finalTime}
                    </Box>
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

              <Typography
                variant="body2"
                textAlign="left"
                sx={{ fontWeight: 'bold' }}
              >
                Preço:
                <Box
                  sx={{
                    fontWeight: 'normal',
                  }}
                  component="span"
                >
                  {' '}
                  R$ 120,00
                </Box>{' '}
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
      <div ref={firstNameRef}></div>
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
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
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
              '@media (max-width: 740px)': {
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
                p: 1,
              }}
            >
              <Title
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  mt: 1,
                  mb: 0,
                  '@media (max-width: 740px)': {
                    mt: 2,
                    mb: 0,
                  },
                }}
              >
                Escolha abaixo uma data disponível
              </Title>
              <StaticDatePicker
                sx={{ maxWidth: '300px' }}
                value={selectedDate}
                minDate={plus3days}
                maxDate={plus30days} //or lastDayOfNextMonth
                shouldDisableDate={disabledDate}
                displayStaticWrapperAs="desktop"
                disabled={datePickerDisabled}
                dayOfWeekFormatter={(day) => day.substr(0, 3)}
                views={['day']}
                slotProps={{
                  day: {
                    disableHighlightToday: false,
                    disableMargin: false,
                    today: true,
                  },
                }}
                format="DD/MM/YYYY"
                onChange={(newValue) => {
                  handleDateChange(newValue);
                }}
              />
            </Box>

            {selectedDate && (
              <Box
                sx={{
                  height: '100%',
                  width: '1px',
                  backgroundColor: 'divider',
                  marginRight: '10px',
                  '@media (max-width: 740px)': {
                    height: '1px',
                    width: '100%',
                    backgroundColor: 'divider',
                    marginBottom: '30px',
                    marginTop: '-10px',
                  },
                }}
              ></Box>
            )}
            {selectedDate && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 0,
                  alignItems: 'center',
                  p: 1,
                }}
              >
                <div ref={anchorRef}></div>
                <Title
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    mt: 1,
                    mb: 0,
                    '@media (max-width: 740px)': {
                      mt: 0,
                      mb: 0,
                    },
                  }}
                >
                  Escolha abaixo um horário disponível
                </Title>
                <Title
                  variant="body1"
                  sx={{ fontWeight: 'bold' }}
                >
                  para o dia{' '}
                  <Box component="span" color="success.main">
                    {selectedDateCor?.toLocaleDateString(
                      'pt-BR',
                    )}
                  </Box>
                </Title>
                <Text
                  variant="body1"
                  sx={{ mb: 2, fontWeight: 500 }}
                  color="defaultText"
                >
                  {dayjs(selectedDateCor).format('dddd')}
                </Text>
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
                Informe os dados do cliente que será avaliado
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
                onFocus={() => setScrollToFirstNameRef(true)}
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
              <AccompanimentButton
                errors={errors}
                clearErrors={clearErrors}
                setLastFieldError={setLastFieldError}
                lastFieldError={lastFieldError}
                register={register}
                reset={reset}
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
        open={showConfirmSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowConfirmSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setShowConfirmSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbarConfirmMessage}
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={showErrorSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowErrorSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setShowErrorSnackbar(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {snackbarErrorMessage}
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
            width: '700px',
            maxWidth: '90%',
          }}
        >
          <Title
            variant="body1"
            sx={{
              fontSize: '120%',
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              mt: 1,
              mb: 2,
              '@media (max-width: 740px)': {
                mt: 0,
                mb: 2,
              },
            }}
          >
            Confirmar Avaliação
          </Title>

          <Typography variant="subtitle1" gutterBottom>
            Você tem certeza que gostaria de agendar uma
            avaliação física com o Prof. Carlos no dia{' '}
            {selectedDateCor?.toLocaleDateString('pt-BR')} (
            {dayjs(selectedDateCor).format('dddd')}) às{' '}
            {selectedTime} na {selectedLocation}?
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
      >
        <Box mt="10px">
          <Text
            fontSize="70%"
            sx={{ color: 'clearComment.main' }}
          >
            Importante: A prática de atividade física envolve
            riscos para a saúde e segurança. Certifique-se de ler
            todas as orientações fornecidas e consultar seu
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
  );
}
