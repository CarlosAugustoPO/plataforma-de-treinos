const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.users.deleteMany();
    console.log('Deleted records in users table');

    await prisma.visits.deleteMany();
    console.log('Deleted records in visits table');

    await prisma.magic_links.deleteMany();
    console.log('Deleted records in magic_links table');

    await prisma.pre_users.deleteMany();
    console.log('Deleted records in pre_users table');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
