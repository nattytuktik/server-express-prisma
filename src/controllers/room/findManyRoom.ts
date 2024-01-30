
import { Request, Response } from "express"
import prisma from '../../prisma'

const FindRooms = async (req: Request, res: Response) => {
    try {

        const query = req.query

        if (query.id) {
            const searchObj = {
                id: Number(query.id),
                status: true
            }
            const findRoom = await prisma.rooms.findFirst({
                where: searchObj
            }).catch((error) => {
                console.log(error)
                res.status(500).send(`ERROR :: ${__dirname}`)
            })

            if (findRoom) {
                res.status(200).json(findRoom)
            } else {
                res.json([])
            }
        } else {
            const findManyRoom = await prisma.rooms.findMany({
                where: {
                    status: true
                }
            }).catch((err) => {
                console.log(err)
            })

            if (!findManyRoom) {
                res.status(200).send("no user in rooms table database")
            } else {
                res.json(findManyRoom)
            }
        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
import { ConfigRouter } from '../../utils/controllers/mappignRouter';

const FindRoom: ConfigRouter = {
    path: '/',
    method: "get",
    controller: FindRooms,
    middleware: [

    ]
}

export {
    FindRoom
}
// export default FindRooms 