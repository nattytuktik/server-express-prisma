"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const DropRoom = async (req, res) => {
    const prisma = new client_1.PrismaClient();
    try {
        const { id } = req.params;
        const switchOff = false;
        const FindEndDrop = await prisma.rooms.update({
            where: {
                id: id
            },
            data: {
                status: switchOff
            }
        });
        if (FindEndDrop) {
            res.status(200);
        }
        else {
            res.send(`not found id :: ${id}`);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(`ERROR:: ${__dirname}`);
    }
    prisma.$disconnect();
};
