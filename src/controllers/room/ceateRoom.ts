
import { Request, Response } from "express"
import prisma from "../../prisma";

export default async function (req: Request, res: Response) {
    const { room, foor } = req.body;
    const validRoom = {
        maxRoom: 11,
        maxFoor: 3
    }
    if (Number(room) > validRoom.maxRoom || Number(foor) > validRoom.maxFoor) {
        // return not validate content
        res.status(400).send(`room and foor not valid room: ${room} foor: ${foor}`)
    } else {



        const findRecorded = await prisma.rooms.findFirst({
            where: {
                room: room,
                foor: foor
            },
            select: {
                id: true
            }
        })

        if (findRecorded) {
            res.status(400).send('bad request')
        } else {

            await prisma.rooms.create({
                data: {
                    room: room,
                    foor: foor
                }
            }).then((result: any) => {

                prisma.$disconnect
                res.json(result)
            }).catch((error: any) => {
                res.status(500).send(error)
            })
        }
        prisma.$disconnect
    }



}