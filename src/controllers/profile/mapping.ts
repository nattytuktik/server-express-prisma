import { Request, Response } from "express";
import { Room, User } from "@/interfaces";
import { PrismaClient } from "@prisma/client";


const mappingRoom = async (
    req: Request<{}, {}, { user: User, room: Room }>,
    res: Response) => {

    /**
     * handle logic
     */
    const { user, room } = req.body;
    const prisma = new PrismaClient()
    try {

        if (user.id && room.id) {
            prisma.profiles.create({
                data: {
                    userId: user.id,
                    roomId: room.id
                }
            })
                .then(result => {
                    res.status(200).send(`create profile successefully!`)
                })
                .catch(error => {
                    res.status(500).send(`PRISMA.PROFILES.CREATE ERROR at ${__dirname}`)
                })
        } else {
            res.status(500).send(`some bug at middleware or ${__dirname}`)
        }
    } catch (error) {
        console.log(error)
    }
}
export default mappingRoom