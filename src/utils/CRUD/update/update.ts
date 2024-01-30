
import { Request, Response } from 'express';
import { PrismaModelConfig } from '../../interfaces/model'


const UpdateQuery = (config: UpdateConfig) => {

    const { prisma, model, } = config

    return async (req: Request, res: Response) => {

        const reqId = req.query.id;
        const data = {
            ...req.body.data
        }

        if (!reqId) {
            res.status(400).send('Missing id parameter');
            return;
        }

        if (!['users', 'profiles', 'rooms'].includes(model)) {
            res.status(400).send('Invalid model parameter');
            return;
        }

        const updateById = await (prisma[model].update as any)({
            where: {
                id: parseInt(reqId as string, 10)
            },
            data: {
                ...data
            }
        })

        if (updateById) {
            res.json(updateById)
        } else {
            res.send('none')

        }
    }
}


export default UpdateQuery

interface UpdateConfig extends PrismaModelConfig { }

