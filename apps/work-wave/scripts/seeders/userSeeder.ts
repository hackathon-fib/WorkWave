import { PrismaClient } from "@prisma/client";

import {hash} from "bcrypt";
import {Salt, parseSalt} from "../../src/auth/password.service";
const prisma = new PrismaClient();

async function userSeeder(bcryptSalt: Salt) {

    const companies = await prisma.company.findMany(); // Fetch all companies from the database
    const numCompanies = companies.length;

    if (numCompanies === 0) {
        console.error('No companies found in the database. Please seed the companies first.');
        return;
    }

    const team_users = [
        {
            firstName: "Samuel",
            lastName: "Coult",
            username: "sam.coult",
            password: await hash("admin", bcryptSalt),
            roles: ["user"],
            teams: ["WorkWave"]
        },
        {
            firstName: "Niall",
            lastName: "Kidd",
            username: "niall.kodd",
            password: await hash("admin", bcryptSalt),
            roles: ["user"],
            teams: ["WorkWave"]
        },
        {
            firstName: "Mark",
            lastName: "Sewrey",
            username: "mark.sewrey",
            password: await hash("admin", bcryptSalt),
            roles: ["user"],
            teams: ["WorkWave"]
        },
        {
            firstName: "Sagar",
            lastName: "Reddy",
            username: "sagar.reddy",
            password: await hash("admin", bcryptSalt),
            roles: ["user"],
            teams: ["WorkWave"]
        },
        {
            firstName: "Hayley",
            lastName: "Margison",
            username: "Hayley.Margison",
            password: await hash("admin", bcryptSalt),
            roles: ["user"],
            teams: ["WorkWave"]
        }
    ];

    for (const user of team_users) {
        // Generate a random index to select a companyId
        const randomIndex = Math.floor(Math.random() * numCompanies);
        const randomCompany = companies[randomIndex];

        await prisma.user.create({
            data: {
                ...user,
                companyId: randomCompany.id, // Assign a random companyId to the user
            },
        });
    }

    console.log('Teams seeded successfully.');

}

userSeeder()
    .catch((error) => {
      console.error('Error seeding companies:', error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });