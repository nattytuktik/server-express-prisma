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

        // create new Rooms

        const createRoom = await prisma.rooms.create({
            data: {
                room: room.room,
                foor: room.foor
            }
        })



    } catch (error) {
        console.log(error)
    }



}
export default mappingRoom