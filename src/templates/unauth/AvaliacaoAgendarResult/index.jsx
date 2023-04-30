import { useRouter } from 'next/router';
import Logo from 'src/components/Logo/index';
import { Parser } from 'html-to-react';
import LoadingTemplate from 'src/templates/commons/Loading';
import { APP_NAME } from 'src/lib/utils/constants/index';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { fetchGetJSON } from 'src/lib/utils/apiHelpers';
import {
  formatAmountForDisplay,
  formatAmountFromStripe,
} from 'src/lib/utils/stripeHelpers';
import useSWR from 'swr';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { format } from 'date-fns';
import { DialogActions, Button } from '@mui/material';
import { Card, Box, TextField } from '@mui/material';
import { Modal } from '@mui/material';
import Recommendations from 'src/components/Recommendations';
import Caption from 'src/components/Caption/index';
import PaymentsIcon from '@mui/icons-material/Payments';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Title from 'src/components/Title/index';
import Image from 'next/image';
import AngleDivisor from 'src/components/AngleDivisor/index';
import Text from 'src/components/Text/index';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import postAfReservation from 'src/lib/fetchers/af-reservations/create';
import tratarNome from 'src/lib/utils/tratarNome';
//Hooks

const githubAvatarUrl =
  'https://avatars.githubusercontent.com/CarlosAugustoPO';

const enToPt = {
  Receipt: 'Recibo',
  from: 'de',
  'lang="en"': 'lang="pt-br"',
  'Amount paid': 'Valor pago',
  '<body': '<body style="color: #414552"',
  'Date paid': 'Data de pagamento',
  'Payment method': 'Forma de pagamento',
  'Amount charged': 'Valor cobrado',
  'If you have any questions, contact us at':
    'Se tiver dúvidas, escreva para',
  Summary: 'Resumo',
  'Something wrong with the email':
    'Algum problema com o recibo',
  'View it in your browser': 'Veja na Stripe',
  "You're receiving this email because you made a purchase at":
    '',
  'which partners with': '',
  'to provide invoicing and payment processing.': '',
  'Plataforma de Treinos,': '',
  Stripe: '',
  'Algum problema com o e-mail': 'Algum problema com o recibo',
  'Veja no navegador': 'Veja na Stripe',
  'Você recebeu este e-mail porque fez uma compra': '',
  'que tem parceria': '',
  'para faturamento e processamento de pagamentos.': '',
  'href="http://www.plataformadetreinos.com.br" target="_blank"':
    '',
  ' em ': '',
  ' com a ': '',
};

const location =
  'Av. Alm. Cochrane, 187 - Embaré, Santos - SP, 11040-001';

const parser = new Parser();
function formatDate(dateString) {
  const monthsPt = {
    Jan: '1',
    Feb: '2',
    Mar: '3',
    Apr: '4',
    May: '5',
    Jun: '6',
    Jul: '7',
    Aug: '8',
    Sep: '9',
    Oct: '10',
    Nov: '11',
    Dec: '12',
    'jan.': '1',
    'fev.': '2',
    'mar.': '3',
    'abr.': '4',
    'mai.': '5',
    'jun.': '6',
    'jul.': '7',
    'ago.': '8',
    'set.': '9',
    'out.': '10',
    'nov.': '11',
    'dez.': '12',
  };

  // Check for second format of date
  const secondFormatRegex =
    /^(\d{1,2}) de (\w{3}\.) de (\d{4}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  const secondFormatMatch = dateString.match(secondFormatRegex);
  if (secondFormatMatch) {
    const [, day, monthAbbr, year, hour, minute, second] =
      secondFormatMatch;
    const month = monthsPt[monthAbbr];
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  }

  // First format of date
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month =
    monthsPt[date.toLocaleString('default', { month: 'short' })];
  const year = date.getFullYear().toString();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

export default function IndexUnauthTemplate() {
  const [code, setCode] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const contentWithPt = content
    .replace(
      new RegExp(Object.keys(enToPt).join('|'), 'g'),
      (match) => enToPt[match],
    )
    .replace(
      /([A-Z][a-z]{2} \d{1,2}, \d{4}, \d{1,2}:\d{1,2}:\d{1,2} (AM|PM))/g,
      (match) => formatDate(match),
    )
    .replace(
      /(\d{1,2} de [a-z]{3}\. de \d{4} \d{1,2}:\d{1,2}:\d{1,2})/g,
      (match) => formatDate(match),
    );

  const [showMore, setShowMore] = useState(false);

  const handleOpen = async (url) => {
    fetch(`/api/receipt/${encodeURIComponent(url)}`)
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error(error))
      .finally(() => setOpen(true));
  };

  const handleClose = () => {
    setOpen(false);
    setContent('');
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const showSnackbarWithMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };

  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON,
  );

  if (!error && data?.payment_intent?.status !== 'succeeded') {
    return <LoadingTemplate />;
  }

  if (
    error ||
    data?.payment_intent?.status === 'requires_payment_method'
  ) {
    return (
      <div className="page-container">
        <h1>Pagamento Falhou</h1>
        <p>O pagamento falhou. Por favor, tente novamente.</p>
      </div>
    );
  }

  const dateString = data?.metadata.date;
  const [day, month, year] = dateString.split('/');
  const formattedDate = `${year}/${month}/${day}`;
  const nameTratado = tratarNome(data?.metadata.clientName);

  postAfReservation({
    reservation_date: new Date(formattedDate),
    reservation_time: data?.metadata.initialTime,
    user_name: nameTratado,
    user_email: data?.metadata.clientEmail,
    status: 'confirmed',
  });

  const getCode = async () => {
    if (
      data?.amount_subtotal >
      data?.payment_intent.amount_received
    ) {
      const promoID =
        data?.total_details['breakdown']['discounts'][0][
          'discount'
        ]['promotion_code'];
      const fetchCode = await fetch(
        `/api/promotion_codes/${promoID}`,
      );
      const jsonCode = await fetchCode.json();
      setCode(jsonCode);
    }
  };
  getCode();

  let amountValue = formatAmountFromStripe(
    data?.amount_subtotal,
    'BRL',
  );
  amountValue = formatAmountForDisplay(amountValue, 'BRL');

  let moneyPaid = formatAmountFromStripe(
    data?.payment_intent?.amount_received,
    'BRL',
  );
  moneyPaid = formatAmountForDisplay(moneyPaid, 'BRL');

  const definePrice = () => {
    if (
      data?.amount_subtotal >
      data?.payment_intent.amount_received
    ) {
      return (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PaymentsIcon
              color="success"
              style={{ marginRight: '5px' }}
            />
            <Typography
              variant="body2"
              textAlign="left"
              sx={{ fontWeight: 'bold' }}
            >
              Valor pago:{' '}
              <Box
                sx={{
                  textDecoration: 'line-through',
                  fontWeight: 'normal',
                }}
                component="span"
                color="disabled.main"
              >
                ({amountValue})
              </Box>{' '}
              <Box
                component="span"
                sx={{ fontWeight: 'normal' }}
              >
                {moneyPaid}
              </Box>{' '}
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ConfirmationNumberIcon
              style={{ marginRight: '5px' }}
            />
            <Typography
              variant="body2"
              textAlign="left"
              sx={{ fontWeight: 'bold' }}
            >
              Cupom utilizado:{' '}
              <Box
                component="span"
                sx={{ fontWeight: 'normal' }}
              >
                {code?.code}
              </Box>{' '}
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LocalOfferIcon
              color="warning"
              style={{ marginRight: '5px' }}
            />
            <Typography
              variant="body2"
              textAlign="left"
              sx={{ fontWeight: 'bold' }}
            >
              Tipo de cupom:{' '}
              <Box
                component="span"
                sx={{ fontWeight: 'normal' }}
              >
                {code?.coupon.name}
              </Box>{' '}
            </Typography>
          </div>
        </>
      );
    } else {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PaymentsIcon
            color="success"
            style={{ marginRight: '5px' }}
          />
          <Typography
            variant="body2"
            textAlign="left"
            sx={{ fontWeight: 'bold' }}
          >
            Valor pago:{' '}
            <Box component="span" sx={{ fontWeight: 'normal' }}>
              {moneyPaid}
            </Box>{' '}
          </Typography>
        </div>
      );
    }
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
            align="center"
            mt={2}
            paragraph
            data-aos="fade-right"
          >
            Confirmado
          </Title>
          <Text mb={2}>
            Você agendou uma avaliação física com{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Carlos Augusto
            </Box>
            .
          </Text>
          <Box sx={{ pl: 2 }}>
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
                  {data?.metadata.date ?? 'loading...'} (
                  {data?.metadata.weekDay ?? 'loading...'})
                </Box>{' '}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon
                color="warning"
                style={{ marginRight: '5px' }}
              />

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
                  {data?.metadata.time ?? 'loading...'}
                </Box>{' '}
              </Typography>
            </div>
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
                  {location ?? 'loading...'}
                </Box>{' '}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PersonIcon
                color="primary"
                style={{ marginRight: '5px' }}
              />
              <Typography
                variant="body2"
                textAlign="left"
                sx={{ fontWeight: 'bold' }}
              >
                Nome do cliente:
                <Box
                  sx={{
                    fontWeight: 'normal',
                  }}
                  component="span"
                >
                  {' '}
                  {nameTratado ?? 'loading...'}
                </Box>{' '}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <EmailIcon
                color="modalTitleIcon"
                style={{ marginRight: '5px' }}
              />
              <Typography
                variant="body2"
                textAlign="left"
                sx={{ fontWeight: 'bold' }}
              >
                E-mail do cliente:
                <Box
                  sx={{
                    fontWeight: 'normal',
                  }}
                  component="span"
                >
                  {' '}
                  {data?.metadata.clientEmail ?? 'loading...'}
                </Box>{' '}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <InfoIcon
                color="grey"
                style={{ marginRight: '5px' }}
              />
              {data.metadata.plusInfo ? (
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  Informações adicionais:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    {data?.metadata.plusInfo ?? 'loading...'}
                  </Box>{' '}
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  Informações Adicionais:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    {'Nada consta'}
                  </Box>{' '}
                </Typography>
              )}
            </div>

            {data.metadata.accompanimentName && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PeopleAltIcon
                  color="primary"
                  style={{ marginRight: '5px' }}
                />
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  Nome do acompanhante:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    {data?.metadata.accompanimentName ??
                      'loading...'}
                  </Box>{' '}
                </Typography>
              </div>
            )}

            {data.metadata.accompanimentEmail && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EmailIcon
                  color="secondary"
                  style={{ marginRight: '5px' }}
                />
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{ fontWeight: 'bold' }}
                >
                  E-mail do acompanhante:
                  <Box
                    sx={{
                      fontWeight: 'normal',
                    }}
                    component="span"
                  >
                    {' '}
                    {data?.metadata.accompanimentEmail ??
                      'loading...'}
                  </Box>{' '}
                </Typography>
              </div>
            )}

            {!data.metadata.accompanimentEmail &&
              !data.metadata.accompanimentName && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <PeopleAltIcon
                    color="modalTitleIcon"
                    style={{ marginRight: '5px' }}
                  />
                  <Typography
                    variant="body2"
                    textAlign="left"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Acompanhantes:
                    <Box
                      sx={{
                        fontWeight: 'normal',
                      }}
                      component="span"
                    >
                      {' '}
                      {'Sem acompanhantes'}
                    </Box>{' '}
                  </Typography>{' '}
                </div>
              )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
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
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </AngleDivisor>
      <Box
        className="recibo"
        sx={{
          padding: '5%',
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          <Title mt={2} align="center" paragraph>
            Comprovante
          </Title>
          <Card
            sx={{
              width: '95%',
              margin: '0 auto',
              border: '1px solid grey',
              marginTop: '2.5%',
              padding: '2.5%',
            }}
          >
            <div>
              <Typography
                variant="body2"
                align="left"
                sx={{ fontWeight: 'bold' }}
              >
                Detalhes do pagamento
              </Typography>
              <Box mt={1}>{definePrice()}</Box>
              <Typography
                variant="body2"
                align="justify"
                paragraph
                mt={2}
              >
                <span style={{ fontWeight: 'bold' }}>
                  Atenção:
                </span>{' '}
                Não haverá possibilidade de reembolso para
                cancelamentos realizados com menos de 24 horas de
                antecedência em relação à data agendada. Se você
                precisar cancelar ou remarcar sua avaliação, por
                favor, entre em contato conosco com pelo menos 24
                horas de antecedência.
              </Typography>{' '}
              <Typography variant="body2" align="left" paragraph>
                Qualquer dúvida que tiver, entre em contato
                conosco pelo email:
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  atendimento@plataformadetreinos.com.br
                </span>{' '}
                ou pelo telefone/whatsapp:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  +55 13 99163-9084
                </span>
                .
              </Typography>
              <Grid
                container
                justifyContent={{ xs: 'center', sm: 'flex-end' }}
                margin="2.5% auto 0 auto"
                sx={{ width: '95%' }}
              >
                <Grid item xs={12} sm={4}>
                  <Button
                    variant="outlined"
                    sx={{ width: '100%' }}
                    onClick={() => {
                      handleOpen(
                        data?.payment_intent.charges.data[0]
                          .receipt_url,
                      );
                    }}
                  >
                    Ver recibo
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Typography variant="body1">
            Uma cópia do recibo foi enviado para{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              {data.metadata?.clientEmail}
            </Box>
            .
          </Typography>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          margin: 'auto',
          maxWidth: '720px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          height: '98%',
          width: '98%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            backgroundColor: 'background.default',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '2.5%',
              top: '2%',
              width: '200px',
            }}
          >
            <Logo />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: 'block', ml: '2.5%' }}
              fontFamily="Carter One"
              color="headerTitle.main"
            >
              Recibo - PDT
            </Typography>
          </Box>

          <IconButton
            onClick={handleClose}
            sx={{
              position: 'relative',
              top: '1%',
              right: '2%',
            }}
          >
            <CloseIcon color="headerTitle" />
          </IconButton>

          <div
            style={{
              height: '100%',
              width: '100%',
              overflow: 'auto',
              transform: 'scale(0.95)',
            }}
          >
            {parser.parse(contentWithPt)}
          </div>
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
            durante a avaliação.{' '}
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
