const { PrismaClient } = require('@prisma/client');

const availability = {
  sunday: [],
  monday: ['08:00', '09:00', '10:00', '11:00'],
  tuesday: ['08:00', '09:00', '10:00', '11:00'],
  wednesday: ['08:00', '09:00', '10:00', '11:00'],
  thursday: ['08:00', '09:00', '10:00', '11:00'],
  friday: ['08:00', '09:00', '10:00', '11:00'],
  saturday: ['08:00', '09:00', '10:00', '11:00'],
};

const prisma = new PrismaClient();

async function seed() {
  await prisma.af_availability.deleteMany();
  console.log('Deleted records in af_availability table');

  for (const dayOfWeek in availability) {
    const times = availability[dayOfWeek];

    for (const time of times) {
      await prisma.af_availability.create({
        data: {
          day_of_week: dayOfWeek,
          time_available: time,
        },
      });
    }
  }
}

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
