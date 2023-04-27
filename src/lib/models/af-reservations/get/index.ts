import prisma from 'src/lib/vendor/prisma/index';

async function getAfReservationsModel(): Promise<{
  [dia: string]: string[];
}> {
  const reservas = await prisma.af_reservations.findMany({
    where: {
      reservation_date: { gte: new Date() }, // Filtrar por reservas a partir da data atual
    },
    select: {
      reservation_date: true,
      reservation_time: true,
      status: true,
    },
  });

  const reservasPorDia: { [dia: string]: string[] } = {};
  for (const reserva of reservas) {
    const dia = reserva.reservation_date
      .toISOString()
      .substr(0, 10);
    if (!reservasPorDia[dia]) {
      reservasPorDia[dia] = [];
    }
    reservasPorDia[dia].push(reserva.reservation_time);
  }

  return reservasPorDia;
}

export default getAfReservationsModel;
