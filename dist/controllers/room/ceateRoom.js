"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
async function default_1(req, res) {
    const { room, foor } = req.body;
    const validRoom = {
        maxRoom: 11,
        maxFoor: 3
    };
    if (Number(room) > validRoom.maxRoom || Number(foor) > validRoom.maxFoor) {
        // return not validate content
        res.status(400).send(`room and foor not valid room: ${room} foor: ${foor}`);
    }
    else {
        const prisma = new client_1.PrismaClient();
        const findRecorded = await prisma.rooms.findFirst({
            where: {
                room: room,
                foor: foor
            },
            select: {
                id: true
            }
        });
        if (findRecorded) {
            res.status(400).send('bad request');
        }
        else {
            await prisma.rooms.create({
                data: {
                    room: room,
                    foor: foor
                }
            }).then((result) => {
                prisma.$disconnect;
                res.json(result);
            }).catch((error) => {
                res.status(500).send(error);
            });
        }
        prisma.$disconnect;
    }
}
exports.default = default_1;
