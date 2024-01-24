
import { PrismaClient } from "@prisma/client";
import { Room } from "@/interfaces";
import { Request, Response, NextFunction } from "express";

/**
 * @param req 
 * @param res 
 * @param next 
 * 
 * check room what has in tabel &&
 * create room record
 * 
 */
const checkingRoom = async (req: Request<any, any, { room: Room }>, res: Response, next: NextFunction) => {

    const { room } = req.body;
    const prisma = new PrismaClient();

    // Handdle
    try {

        const findRoom = await prisma.rooms.findFirst({
            where: {
                room: room.room,
                foor: room.foor
            },
            select: {
                id: true
            }
        })

        prisma.$disconnect()
        /**
         * add room.id => req.body.room
         */
        if (findRoom) {
            req.body.room.id = findRoom.id
            next()
        }

        /**
         *  create new room at next()
         */
        else {
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500)
    }

}

export default checkingRoom