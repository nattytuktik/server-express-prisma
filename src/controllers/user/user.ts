
import { Request, Response } from "express"
import prisma from "../../prisma";
const mappingRoomUser = async function (req: Request, res: Response) {

    const { user, room } = req.body

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