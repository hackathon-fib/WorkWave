import * as dotenv from "dotenv";
import {PrismaClient} from "@prisma/client";
import {Salt, parseSalt} from "../src/auth/password.service";
import {hash} from "bcrypt";
import { faker } from '@faker-js/faker';


if (require.main === module) {
    dotenv.config();

    const {BCRYPT_SALT} = process.env;

    if (!BCRYPT_SALT) {
        throw new Error("BCRYPT_SALT environment variable must be defined");
    }
    const salt = parseSalt(BCRYPT_SALT);

    seed(salt).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}

async function seed(bcryptSalt: Salt) {
    console.info("Seeding database...");

    const client = new PrismaClient();

    const data = {
        username: "admin",
        password: await hash("admin", bcryptSalt),
        roles: ["admin"],
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
    };

    await client.user.upsert({
        where: {},
        update: {},
        create: data,
    });

    void client.$disconnect();

    console.info("Seeding database with custom seed...");


    console.info("Seeded database successfully");
}
