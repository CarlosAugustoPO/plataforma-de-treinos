import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recommendations = ({ showMore, setShowMore }) => {
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const text1 =
    'Usar roupas confortáveis e tênis adequados para atividades físicas. Isso permite que o corpo se mova livremente durante os testes.';
  const truncatedText1 = showMore
    ? text1
    : `${text1.slice(0, 90)}...`;

  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        alignSelf="start"
        mt={2}
        sx={{ fontWeight: 'bold' }}
      >
        Orientações Pré Avaliação Física:
      </Typography>
      {!showMore && (
        <>
          <Typography
            alignSelf="start"
            variant="body2"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'1- '}
            </Box>
            {truncatedText1}{' '}
            <Typography
              alignSelf="start"
              variant="body2"
              component="a"
              href="#"
              onClick={toggleShowMore}
              color="primary"
            >
              Leia mais
              <IconButton
                color="primary"
                size="small"
                onClick={toggleShowMore}
              >
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Typography>
        </>
      )}
      {showMore && (
        <>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'1- '}
            </Box>
            Use roupas confortáveis e tênis adequados para
            atividades físicas. Isso permite que o corpo se mova
            livremente durante os testes.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'2- '}
            </Box>
            Coma uma refeição leve cerca de duas horas antes da
            avaliação física. Evite alimentos pesados e bebidas
            alcoólicas.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'3- '}
            </Box>
            Beba bastante água no dia anterior para manter o
            corpo hidratado. Isso ajuda a garantir que os
            resultados do teste não sejam afetados pela
            desidratação.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'4- '}
            </Box>
            Tente dormir bem na noite anterior e evite atividades
            físicas intensas no dia anterior à avaliação física.
            O corpo precisa estar descansado para obter
            resultados precisos.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'5- '}
            </Box>
            Seja sincero e preciso em suas respostas.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            alignSelf="start"
            textAlign="left"
          >
            <Box
              sx={{
                fontWeight: 'bold',
              }}
              component="span"
            >
              {'Obs: '}
            </Box>
            Seguir essas orientações ajuda a garantir que os
            resultados da avaliação física sejam precisos e úteis
            para a criação de um programa de exercícios
            personalizado e eficaz.
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="primary"
            onClick={() => {
              toggleShowMore();
            }}
          >
            Ocultar Orientações
            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                toggleShowMore();
              }}
              sx={{ transform: 'rotate(180deg)' }}
            >
              <ExpandMoreIcon fontSize="small" />
            </IconButton>
          </Typography>
        </>
      )}
    </>
  );
};

export default Recommendations;
