import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function companySeeder() {

  const companies = {
      name: "Feed It Back",
      phone: faker.phone.number()
    };
  await prisma.company.create({ data: companies});

}

companySeeder()
    .catch((error) => {
      console.error('Error seeding companies:', error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });