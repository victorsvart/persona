import { prisma } from './client';

async function main() {
  console.log('Starting database seed...');

  // Add your seed data here
  // Example:
  // const user = await prisma.user.create({
  //   data: {
  //     id: 'seed-user-id',
  //     name: 'Test User',
  //     email: 'test@example.com',
  //     emailVerified: false,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });

  console.log('Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


