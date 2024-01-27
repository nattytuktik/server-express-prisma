
import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import { Room, User } from "@/interfaces";
const findUserMapping = async (req: Request<{}, {}, { user: User, room: Room }>, res: Response, next: NextFunction) => {

    try {
        const { user } = req.body

        if (user.id) {

            next()
        } else {
            /**
             * find user record
             */
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
                const { id, ...userWithoutId } = user;

                prisma.users.create({
                    data: {
                        ...userWithoutId
                    }
                })
                    .then((result: any) => {
                        req.body.user.id = result.id;
                        next()
                    })
                    .catch((error: any) => {
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