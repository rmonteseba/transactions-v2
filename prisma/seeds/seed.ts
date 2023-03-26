import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const currencies = [
  {
    id: 'f978ffd5-67fe-494f-9030-6c87db29573f',
    name: 'Uruguayan peso',
    code: 'UYU'
  },
  {
    id: 'bb8f7a96-e8de-4804-a7bb-e9ce38650663',
    name: 'United states dollar',
    code: 'USD'
  },
  { id: 'fa2de964-eaf4-4894-9392-e23dbf53469b', name: 'Euro', code: 'EUR ' }
];

const users = [
  { id: 'c3343b85-ed68-4289-adc8-0187fa377b73', name: 'Sebastian' },
  { id: '3529811c-c5b7-4c2c-b742-e1d64a0f8b92', name: 'Martin' }
];

const accounts = [
  {
    currencyId: 'bb8f7a96-e8de-4804-a7bb-e9ce38650663',
    userId: 'c3343b85-ed68-4289-adc8-0187fa377b73',
    description: 'Sebastian USD account',
    balance: 1000
  },
  {
    currencyId: 'f978ffd5-67fe-494f-9030-6c87db29573f',
    userId: 'c3343b85-ed68-4289-adc8-0187fa377b73',
    description: 'Sebastian UYU account',
    balance: 30000
  },
  {
    currencyId: 'bb8f7a96-e8de-4804-a7bb-e9ce38650663',
    userId: '3529811c-c5b7-4c2c-b742-e1d64a0f8b92',
    description: 'Martin USD account',
    balance: 1000
  },
  {
    currencyId: 'fa2de964-eaf4-4894-9392-e23dbf53469b',
    userId: '3529811c-c5b7-4c2c-b742-e1d64a0f8b92',
    description: 'Martin EUR account',
    balance: 1000
  }
];
async function main() {
  await prisma.currency.createMany({ data: currencies });
  await prisma.user.createMany({ data: users });
  await prisma.account.createMany({ data: accounts });
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
