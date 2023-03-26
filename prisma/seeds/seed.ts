import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const currencies = [
  { name: 'Uruguayan peso', code: 'UYU' },
  { name: 'United states dollar', code: 'USD' },
  { name: 'Euro', code: 'EUR ' }
];
async function main() {
  await prisma.currency.createMany({ data: currencies });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
