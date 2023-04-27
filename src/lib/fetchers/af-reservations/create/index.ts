import type Ok from 'src/types/Ok';

export default async function postAfReservation(newReservation: {
  reservation_date: Date;
  reservation_time: string;
  user_name: string;
  user_email: string;
  status: string;
}): Promise<Ok> {
  const response = await fetch('/api/af-reservations/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newReservation }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}
