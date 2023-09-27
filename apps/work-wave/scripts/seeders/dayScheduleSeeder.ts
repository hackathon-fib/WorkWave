import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

export async function seed(prisma: any) {

    const users = await prisma.user.findMany(); // Fetch all companies from the database
    const userSchedules: any[] = [];
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");

    users.forEach(function (user: any) {
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            userSchedules.push({
                date: currentDate.toISOString(),
                note: faker.lorem.sentence(),
                userID: user.id,
            });

            currentDate.setDate(currentDate.getDate() + 1);
        }
    });

  await prisma.daySchedule.createMany({ data: userSchedules});

}

module.exports = { seed };