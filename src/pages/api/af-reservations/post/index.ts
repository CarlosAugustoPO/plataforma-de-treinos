import { NextApiHandler } from 'next';
import postAfReservation from 'src/lib/models/af-reservations/post/index';

const postReservationApi: NextApiHandler = async (req, res) => {
  const {
    reservation_date,
    reservation_time,
    status,
    user_name,
    user_email,
  } = req.body;
  if (!reservation_date || !reservation_time || !status) {
    return res.status(500).json({
      error:
        'Falha interna de comunicação. Tente novamente mais tarde ou informe o serviço técnico através do email suporte@plataformadetreinos.com.br',
    });
  }

  const insertReservationResult = await postAfReservation({
    reservation_date,
    reservation_time,
    user_name,
    user_email,
    status,
  });

  if (insertReservationResult.error) {
    return res.status(400).json({
      ...insertReservationResult,
    });
  }

  return res.status(200).json({
    ...insertReservationResult,
  });
};
export default postReservationApi;
