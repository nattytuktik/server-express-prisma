"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
async function default_1(req, res) {
    const prisma = new client_1.PrismaClient();
    const findManyRoom = await prisma.rooms.findMany().catch((err) => {
        console.log(err);
    });
    if (!findManyRoom) {
        res.status(200).send("no user in rooms table database");
    }
    else {
        res.json(findManyRoom);
    }
}
exports.default = default_1;
