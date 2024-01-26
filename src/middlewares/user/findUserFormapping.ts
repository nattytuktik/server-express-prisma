
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { Room, User } from "@/interfaces";
const findUserMapping = async (req: Request<{}, {}, { user: User, room: Room }>, res: Response, next: NextFunction) => {

    try {
        const { user } = req.body
        const prisma = new PrismaClient();

        if (user.id) {

            next()
        } else {
            const findUser = await prisma.users.findFirst({
                where: {
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            })


            if (findUser) {
                req.body.user.id = findUser.id
                next()
            } else {

                /**
                 * create User
                 */
                const { id, ...userWithoutId } = user

                const createUser = await prisma.users.create({
                    data: {
                        ...userWithoutId
                    }
                })
                    .then(result => {
                        req.body.user.id = result.id
                        next()
                    })
                    .catch(error => {
                        console.log(error)
                        res.status(500).send(`ERROR: PRISMA.USERS.CREATE :: ${__dirname}`)
                    })
            }
        }


    } catch (error) {
        console.log(error)
        res.status(500).send(`some error at findUserFormapping middlewares`)
    }

}

export default findUserMapping