import {hash} from "bcrypt";
import {Salt, parseSalt} from "../../src/auth/password.service";
import * as dotenv from "dotenv";

export async function seed(prisma: any) {

        dotenv.config();

        const {BCRYPT_SALT} = process.env;

        if (!BCRYPT_SALT) {
            throw new Error("BCRYPT_SALT environment variable must be defined");
        }
        const salt = parseSalt(BCRYPT_SALT);





    const companies = await prisma.company.findMany(); // Fetch all companies from the database
    const numCompanies = companies.length;

    const team = await prisma.team.findFirst({
        where: {
            name: "WorkWave",
        },
    });

    if (numCompanies === 0) {
        console.error('No companies found in the database. Please seed the companies first.');
        return;
    }

    const team_users = [
        {
            firstName: "Samuel",
            lastName: "Coult",
            username: "sam.coult",
            password: await hash("admin", salt),
            roles: ["user"],
            team: {
                connect: {
                    id: team.id
                }
            }
        },
        {
            firstName: "Niall",
            lastName: "Kidd",
            username: "niall.kidd",
            password: await hash("admin", salt),
            roles: ["user"],
            team: {
                connect: {
                    id: team.id
                }
            }
        },
        {
            firstName: "Mark",
            lastName: "Sewrey",
            username: "mark.sewrey",
            password: await hash("admin", salt),
            roles: ["user"],
            team: {
                connect: {
                    id: team.id
                }
            }
        },
        {
            firstName: "Sagar",
            lastName: "Reddy",
            username: "sagar.reddy",
            password: await hash("admin", salt),
            roles: ["user"],
            team: {
                connect: {
                    id: team.id
                }
            }
        },
        {
            firstName: "Hayley",
            lastName: "Margison",
            username: "Hayley.Margison",
            password: await hash("admin", salt),
            roles: ["user"],
            team: {
                connect: {
                    id: team.id
                }
            }
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

    console.log('Users seeded successfully.');

}

module.exports = { seed };