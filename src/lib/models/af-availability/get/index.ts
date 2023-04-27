import prisma from 'src/lib/vendor/prisma/index';

interface Availability {
  sunday: string[];
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

async function getAfAvailabilityModel(): Promise<Availability> {
  const dbAvailability: any[] =
    await prisma.af_availability.findMany();
  const availability: Availability = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };
  dbAvailability.forEach((dbItem) => {
    const { day_of_week, time_available } = dbItem;
    availability[
      day_of_week.toLowerCase() as keyof Availability
    ].push(time_available);
  });
  for (const day in availability) {
    if (availability.hasOwnProperty(day)) {
      availability[day as keyof Availability].sort(
        (a: string, b: string) =>
          a.localeCompare(b, 'pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
          } as Intl.CollatorOptions),
      );
    }
  }
  return availability;
}
export default getAfAvailabilityModel;
