import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

export async function seed(prisma: any) {

  const companies = {
      name: "Feed It Back",
      phone: faker.phone.number()
    };
  await prisma.company.create({ data: companies});

}

module.exports = { seed };