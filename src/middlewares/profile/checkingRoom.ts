
import prisma from "../../prisma";
import { Room } from "../../interfaces";
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

    // Handdle
    try {

        if (room.id) {
            next()
        } else {

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
            })

            /**
             * when have record in table
             * add room.id => req.body.room
             */
            if (findRoom) {
                req.body.room.id = findRoom.id
                next()
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
                })

                /**
                 * asign room.id into request.body.room
                 */

                req.body.room.id = createRoom.id


                next()
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500)
    }

}

export default checkingRoom