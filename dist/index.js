"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.get("/", async (req, res) => {
    const main = async () => {
        const allUsers = await prisma.user.findMany();
        res.json(allUsers);
    };
    main().then(async () => {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
});
app.post('/', async (req, res) => {
    async function main() {
        await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alice@prisma.io',
                posts: {
                    create: { title: 'Hello World' },
                },
                profile: {
                    create: { bio: 'I like turtles' },
                },
            },
        });
        const allUsers = await prisma.user.findMany({
            include: {
                posts: true,
                profile: true,
            },
        });
        console.dir(allUsers, { depth: null });
    }
    main().then(async () => {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
});
const start = async () => {
    app.listen(3030, () => {
        console.log(`server Running! at port 3030`);
    });
};
start();
