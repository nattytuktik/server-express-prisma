
import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const mappingRoomUser = async function (req: Request, res: Response) {

    const { user, room } = req.body

    const prisma = new PrismaClient();

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
    })
}

export default mappingRoomUser