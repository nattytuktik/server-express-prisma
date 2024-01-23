import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express"

export default async function (req: Request, res: Response) {
    const { room, foor } = req.body;


    if (Number(room) > 11 && Number(foor) > 3) {
        res.status(400).send('bad request')
    }

    const prisma = new PrismaClient()


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
        }).then((result) => {

            prisma.$disconnect
            res.json(result)
        }).catch((error) => {

            prisma.$disconnect
            res.status(500).send(error)
        })

    }

}