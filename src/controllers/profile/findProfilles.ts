import { Request, Response } from 'express';
import prisma from '../../prisma';
import { ConfigRouter } from '../../utils/controllers/mappignRouter';
const findProfiles = async (req: Request, res: Response) => {
    // 
    try {
        const findObj = {
            status: true
        }
        const findProfiles = await prisma.profiles.findMany({
            where: {
                ...findObj
            },
            include: {
                users: true,
                rooms: true
            }
        })


        if (findProfiles) {

            res.json(findProfiles)
        } else {
            res.status(204).send(`not found content`)
        }

        prisma.$disconnect()
    } catch (error) {
        console.log(error)
        res.status(500).send(`ERROR :: ${__dirname}`)
    }
}




const FindProfiles: ConfigRouter = {
    method: 'get',
    path: '/',
    controller: findProfiles,
    middleware: [

    ]
}
export default FindProfiles