import prisma from 'src/lib/vendor/prisma/index';
import type Ok from 'src/types/Ok';

async function postAfReservation(newReservation: {
  reservation_date: Date;
  reservation_time: string;
  user_name: string;
  user_email: string;
  status: string;
}): Promise<Ok> {
  try {
    await prisma.af_reservations.create({
      data: {
        reservation_date: newReservation.reservation_date,
        reservation_time: newReservation.reservation_time,
        user_name: newReservation.user_name,
        user_email: newReservation.user_email,
        status: newReservation.status,
      },
    });

    return { ok: 'Reserva inserido com sucesso' };
  } catch (e: any) {
    console.log('In afReservationModels: ', e);
    return { error: e };
  }
}

export default postAfReservation;
