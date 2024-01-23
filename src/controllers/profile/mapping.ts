
import { Request, Response } from "express";
import { Room, User } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

export default async (req: Request<{}, {}, {user: User, room: Room}>, res: Response) => {

    const prisma = new PrismaClient()

    const {user, room} = req.body;
    try {

        const findUserCheck = await prisma.users.findFirst({
            where: {
                first_name: user.first_name,
                last_name: user.last_name
            },
            select: {
                id: true
            }
        });

        const findRoom = await prisma.rooms.findFirst({
            where: {
                room: room.room,
                foor: room.room
            },
            select: {
                id: true
            }
        })

        const fu = !findUserCheck? await prisma.users.create({
            data: {
                first_name: user.first_name,
                last_name: user.last_name,
                chaya: user.chaya
            }
        }): {}

      
        
    } catch (error) {
        console.log(error)
    }


   
}