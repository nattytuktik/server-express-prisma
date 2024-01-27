"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
/**
 * @param req
 * @param res
 * @param next
 *
 * check room what has in tabel &&
 * create room record
 *
 */
const checkingRoom = async (req, res, next) => {
    const { room } = req.body;
    const prisma = new client_1.PrismaClient();
    // Handdle
    try {
        /**
         * findRoom => Oject<room> ||  Null
         */
        const findRoom = await prisma.rooms.findFirst({
            where: {
                room: room.room,
                foor: room.foor
            },
            select: {
                id: true
            }
        });
        prisma.$disconnect();
        /**
         * when have record in table
         * add room.id => req.body.room
         */
        if (findRoom) {
            req.body.room.id = findRoom.id;
            next();
        }
        /**
         *  create new room
         */
        else {
            const createRoom = await prisma.rooms.create({
                data: {
                    room: room.room,
                    foor: room.foor
                }
            });
            /**
             * asign room.id into request.body.room
             */
            req.body.room.id = createRoom.id;
            next();
        }
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
};
exports.default = checkingRoom;
