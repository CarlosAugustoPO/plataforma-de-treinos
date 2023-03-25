import Caption from 'src/components/Caption/index';
import Text from 'src/components/Text/index';
import Box from '@mui/material/Box';
import * as React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
//Hooks

export default function IndexUnauthTemplate() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Box
      className="footer"
      sx={{ padding: '0 5%' }}
      data-aos="fade-up"
      data-aos-once="true"
    >
      <Box mt="10px">
        <Text fontSize="70%" sx={{ color: 'clearComment.main' }}>
          Assim como qualquer exercício físico, ao praticar os
          treinos propostos pela nossa plataforma de treinos,
          você assume alguns riscos para sua saúde e segurança.
          Isso é especialmente verdadeiro se você não seguir
          todas as recomendações. Por isso, antes de começar,
          leia todo o material fornecido e consulte o seu médico
          para verificar se está apto para a prática de atividade
          física e qual nível de intensidade é adequado para você{' '}
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
  );
}
