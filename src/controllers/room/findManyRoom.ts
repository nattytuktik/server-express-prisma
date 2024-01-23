
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
export default async function (req: Request, res: Response) {

    const prisma = new PrismaClient();

    prisma.rooms.findMany().then(result => {
        res.json(result)
    })
}