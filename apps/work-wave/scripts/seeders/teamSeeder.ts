const {PrismaClient} = require('@prisma/client');

export async function seed(prisma: any) {
    const companies = await prisma.company.findMany(); // Fetch all companies from the database
    const numCompanies = companies.length;

    if (numCompanies === 0) {
        console.error('No companies found in the database. Please seed the companies first.');
        return;
    }

    const teamsToCreate = [
        {
            name: "WorkWave"
        }
    ];

    for (const teamData of teamsToCreate) {
        // Generate a random index to select a companyId
        const randomIndex = Math.floor(Math.random() * numCompanies);
        const randomCompany = companies[randomIndex];

        await prisma.team.create({
            data: {
                ...teamData,
                companyId: randomCompany.id, // Assign a random companyId to the user
            },
        });
    }

    console.log('Teams seeded successfully.');
}


module.exports = { seed };
