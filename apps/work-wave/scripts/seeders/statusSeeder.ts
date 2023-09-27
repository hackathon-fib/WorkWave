import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function statusSeeder() {

  const statuses = [
    {
      name: "pending",
    },
    {
      name: "approved",
    },
    {
      name: "requested",
    },
    {
      name: "denied",
    },
  ];

  for (const status of statuses) {
    // Generate a random index to select a companyId

    await prisma.status.create({
      data: status,
    });
  }

}

statusSeeder()
    .catch((error) => {
      console.error('Error seeding statuses:', error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });