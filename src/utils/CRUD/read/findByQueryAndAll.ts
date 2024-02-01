import { Request, Response } from 'express'
import { PrismaModelConfig } from '../../interfaces/model'
export default function findByQueryAndMany(config: PrismaModelConfig) {
    const { model, prisma } = config;
    return async (req: Request, res: Response) => {

        const id = req.query.id;

        if (!id || parseInt(id as string, 10) < 0) {
            res.status(404).send("missing query string");
            return
        }

        (prisma[model].findUnique as any)({
            where: {
                id: id
            }
        })
    }

}