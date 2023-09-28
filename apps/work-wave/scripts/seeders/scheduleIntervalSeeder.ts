import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

export async function seed(prisma: any) {

    const daySchedules = await prisma.daySchedule.findMany(); // Fetch all companies from the database
    const intervals: any[] = [];

    daySchedules.forEach(function (day: any) {

        intervals.push({
            start: day.date,
            end: day.date,
            label: faker.lorem.word(),
            category: 'Work period',
            dayScheduleId: day.id
        });

    });



  await prisma.scheduleInterval.createMany({ data: intervals});

}

module.exports = { seed };