import { PrismaClient } from './lib/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const locationTypes = [{ name: 'ZIP' }, { name: 'CEP' }, { name: 'Other' }];

  for (const type of locationTypes) {
    await prisma.userLocationType.upsert({
      where: { name: type.name },
      update: {},
      create: type,
    });
  }

  console.log('Seeded UserLocationType');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
