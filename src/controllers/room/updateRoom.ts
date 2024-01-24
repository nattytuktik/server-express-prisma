
import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
import { updateRecord } from "../../utils/crud/update";

const updateRoom = async (req: Request, res: Response) => {

    const prisma = new PrismaClient();
    const { room } = req.body
    try {
        const paramObj = {
            data: room.data,
            id: room.id,
            model: prisma.rooms
        }
        updateRecord(paramObj)
    }
    catch (error) {
        console.log(error)
        res.status(500)
    }
}

export default updateRoom