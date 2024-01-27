"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const mappingRoomUser = async function (req, res) {
    const { user, room } = req.body;
    const prisma = new client_1.PrismaClient();
    const createUser = await prisma.users.create({
        data: {
            ...user
        }
    });
    const findRoom = await prisma.rooms.findUnique({
        where: {
            ...room
        },
        select: {
            id: true
        }
    });
};
exports.default = mappingRoomUser;
