export default async function readAfReservations(): Promise<any> {
  const response = await fetch(`/api/af-reservations/get`, {
    method: 'GET',
  });
  const af_reservations = await response.json();
  return af_reservations;
}
