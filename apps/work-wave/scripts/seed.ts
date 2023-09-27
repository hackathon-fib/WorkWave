const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Import individual seeders
const companySeeder = require('./seeders/companySeeder.ts');
const statusSeeder = require('./seeders/statusSeeder.ts');
const teamSeeder = require('./seeders/teamSeeder.ts');
const userSeeder = require('./seeders/userSeeder.ts');
const dayScheduleSeeder = require('./seeders/dayScheduleSeeder.ts');
const scheduleIntervalSeeder = require('./seeders/scheduleIntervalSeeder.ts');

export async function main(prisma: any) {
    try {
        console.log('Dropping records.');
        await prisma.scheduleInterval.deleteMany({where: {}})
        await prisma.daySchedule.deleteMany({where: {}})
        await prisma.user.deleteMany({where: {}})
        await prisma.team.deleteMany({where: {}})
        await prisma.status.deleteMany({where: {}})
        await prisma.company.deleteMany({where: {}})
        console.log('Records dropped.');


        // Call individual seeders in the desired order
        await companySeeder.seed(prisma);
        await statusSeeder.seed(prisma);
        await teamSeeder.seed(prisma);
        await userSeeder.seed(prisma);
        await dayScheduleSeeder.seed(prisma);
        await scheduleIntervalSeeder.seed(prisma);

        console.log('Seeders executed successfully.');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main(prisma);