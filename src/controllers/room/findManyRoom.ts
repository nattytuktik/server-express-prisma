
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
export default async function (req: Request, res: Response) {

    const prisma = new PrismaClient();

    const findManyRoom = await prisma.rooms.findMany().catch((err) => {
        console.log(err)
    })

    if (!findManyRoom) {
        res.status(200).send("no user in rooms table database")
    }else {
        res.json(findManyRoom)
    }
}