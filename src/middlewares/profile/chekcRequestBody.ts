import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export default async function checkRequestBody(req: Request, res: Response, next: NextFunction) {

    try {
        const { userId, roomId } = req.body.data;
        const id = req.query.id

        if (roomId && userId) {
            const findProfile = await prisma.profiles.findFirst({
                where: {
                    id: parseInt(id as string, 10),
                    roomId: roomId,
                    userId: userId
                },
                select: {
                    id: true
                }
            })

            if (!findProfile) {
                next()
            } else {
                res.status(400).send('has record in table')
            }
        } else {
            res.status(400).send('Missing id parameter')
        }
    }
    catch (error) {
        res.status(500).send(`ERROR :: ${__dirname}`)
        console.log(error)
    }
}