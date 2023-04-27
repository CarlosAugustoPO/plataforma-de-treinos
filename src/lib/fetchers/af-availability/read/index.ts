export default async function readAfAvailability(): Promise<any> {
  const response = await fetch(`/api/af-availability/get`, {
    method: 'GET',
  });
  const af_availability = await response.json();
  return af_availability;
}
