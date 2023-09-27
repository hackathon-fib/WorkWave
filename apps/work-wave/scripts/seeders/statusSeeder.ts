import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function seed(prisma: any) {

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


module.exports = { seed };