import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import Text from 'src/components/Text/index';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import LogoStripe from 'src/components/LogoStripe/index';
import HttpsIcon from '@mui/icons-material/Https';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function AFSellerBanner() {
  const router = useRouter();
  return (
    <div>
      <Box mt={3}>
        <Text
          data-aos="fade-right"
          data-aos-once="true"
          fontWeight="bold"
          fontSize="130%"
          color="primary.main"
          lineHeight="20px"
          marginBottom="20px"
        >
          Avaliação Física Presencial
        </Text>
        {/*<Text
          data-aos="fade-right"
          data-aos-once="true"
          color="success.main"
          fontSize="100%"
          lineHeight="20px"
        >
          Avaliação Física Presencial
          </Text>*/}
        <Box
          data-aos="fade-right"
          data-aos-once="true"
          width="170px"
          sx={{ margin: 'auto' }}
        >
          {/*<Text
            color="disabled.main"
            fontSize="85%"
            align="center"
            lineHeight="20px"
          >
            <Box
              component="span"
              sx={{ textDecoration: 'line-through' }}
            >
              R$ 100,00
            </Box>
            <Box
              component="span"
              sx={{
                textDecoration: 'none',
                color: 'error.main',
              }}
            >
              {' '}
              (-20%)
            </Box>
            </Text>*/}
          <Text
            align="center"
            fontSize="200%"
            fontWeight="bold"
            lineHeight="30px"
          >
            <Box
              fontWeight="bold"
              color="success.main"
              component="span"
            >
              R$
            </Box>{' '}
            120,00
          </Text>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            width: '350px',
            padding: '10px 10px 10px 50px',
            borderRadius: '10px',
            margin: '5px auto auto auto',
          }}
        >
          <Text align="left">
            <Text
              fontSize="85%"
              lineHeight="20px"
              marginLeft="-10px"
              data-aos="fade-right"
              data-aos-once="true"
            >
              Incluso:
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Resultado da avaliação física
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Rastreamento do Progresso
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Feedback do resultado
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Identificação de Áreas de Melhorias
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              {' '}
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Dicas exclusivas e específicas
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Adaptação da estratégia
            </Text>
            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Suporte total via whatsapp
            </Text>

            <Text
              data-aos="fade-right"
              data-aos-once="true"
              fontSize="85%"
              lineHeight="20px"
              mt={-1}
            >
              {' '}
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  transform: 'scale(0.6)',
                  position: 'relative',
                  top: '7px',
                }}
              />
              Bônus: 1 Planilha de treino / 4 semanas
            </Text>
          </Text>
        </Box>
      </Box>
      <Button
        data-aos="fade-right"
        data-aos-once="true"
        sx={{
          width: '300px',
          margin: '0 auto 15px auto',
        }}
        variant="outlined"
        color="success"
        endIcon={<EventIcon sx={{ marginTop: '-3px' }} />}
        onClick={() => {
          router.push(
            '/avaliacao-fisica/presencial/treinador-carlos-augusto/agendar',
          );
        }}
      >
        Marcar uma data
      </Button>

      <Box data-aos="fade-right" data-aos-once="true">
        {' '}
        <Text
          lineHeight="12px"
          align="center"
          fontSize="75%"
          width="300px"
          margin="auto"
          mb={1}
          mt={-2}
          sx={{ opacity: '0.6' }}
        >
          <HttpsIcon
            sx={{
              transform: 'scale(0.7)',
              position: 'relative',
              top: '7px',
              right: '-3px',
            }}
          />
          Compra segura. Veja nossos termos
        </Text>
        <Text
          lineHeight="12px"
          align="center"
          fontSize="75%"
          width="300px"
          margin="auto"
          mt={-2}
          mb={5}
          sx={{ opacity: '0.6' }}
        >
          Pagamento processado através do{' '}
          <Box
            component="span"
            sx={{
              position: 'relative',
              top: '8px',
              left: '2px',
            }}
          >
            <LogoStripe width={60} />
          </Box>
        </Text>
        <Box
          sx={{
            border: '1px dashed',
            borderColor: 'disabled.main',
            borderRadius: '5px',
            padding: '15px 30px 0px 30px',
            display: 'flex',
            margin: '-20px auto 20px auto',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="span"
            sx={{
              position: 'absolute',
              marginTop: '-27px',
              marginLeft: '-22px',
              backgroundColor: 'background.paper',
              padding: '5px',
            }}
          >
            <Text fontSize="60%" sx={{ opacity: '0.6' }}>
              Formas de Pagamento
            </Text>
          </Box>
          <Box component="span">
            <CreditCardIcon sx={{ opacity: '0.60' }} />
            <Text
              lineHeight="11px"
              fontSize="60%"
              sx={{
                position: 'relative',
                top: '-7px',
                opacity: '0.60',
              }}
            >
              Crédito
            </Text>
          </Box>
          <Box component="span" sx={{ opacity: '0.6' }}>
            <AccountBalanceWalletIcon />
            <Text
              lineHeight="11px"
              fontSize="60%"
              sx={{ position: 'relative', top: '-7px' }}
            >
              Débito
            </Text>
          </Box>
          <Box component="span" sx={{ opacity: '0.6' }}>
            <ReceiptIcon />
            <Text
              lineHeight="11px"
              fontSize="60%"
              sx={{ position: 'relative', top: '-7px' }}
            >
              Boleto
            </Text>
          </Box>
          {/* <Box component="span" sx={{ opacity: '0.6' }}>
            <PixIcon />
            <Text
              lineHeight="11px"
              fontSize="60%"
              sx={{ position: 'relative', top: '-7px' }}
            >
              Transf. <br /> Pix
            </Text>
            </Box>*/}
        </Box>
      </Box>
    </div>
  );
}
