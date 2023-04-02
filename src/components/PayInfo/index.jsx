import { useState } from 'react';
import { Slide, Typography, Button, Card } from '@mui/material';
// import { useStripe } from "@stripe/react-stripe-js";

export default function PaymentCard() {
  const [activeStep, setActiveStep] = useState(0);
  // const stripe = useStripe();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  // const handlePay = async () => {
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [{ price: "price_12345", quantity: 1 }],
  //     mode: "payment",
  //     successUrl: "https://your-website.com/success",
  //     cancelUrl: "https://your-website.com/cancel",
  //   });
  //
  //   if (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
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
          Preço
        </Typography>
        <Typography variant="body2" align="left" gutterBottom>
          <span style={{ fontWeight: 'bold' }}>R$</span> 80,00
        </Typography>
        <Typography
          variant="body2"
          align="left"
          sx={{ fontWeight: 'bold' }}
        >
          Sobre o pagamento
        </Typography>
        <Typography variant="body2" align="justify" paragraph>
          O pagamento da avaliação física é feito via Stripe, um
          dos sistemas de pagamento online mais seguros e
          confiáveis do mundo. Para garantir sua reserva, você
          precisa pagar o valor de R$ 80,00, aguardar a
          confirmação de pagamento e pronto! Sua avaliação física
          está garantida.
        </Typography>
        <Typography variant="body2" align="justify" paragraph>
          <span style={{ fontWeight: 'bold' }}>Atenção:</span> O
          pagamento será processado imediatamente e não haverá
          possibilidade de reembolso para cancelamentos
          realizados com menos de 24 horas de antecedência em
          relação à data agendada. Se você precisar cancelar ou
          remarcar sua avaliação, por favor, entre em contato
          conosco com pelo menos 24 horas de antecedência.
        </Typography>{' '}
        <Typography variant="body2" align="left" paragraph>
          Qualquer dúvida que tiver, entre em contato conosco
          pelo email:
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
      </div>
    </Card>
  );
}
