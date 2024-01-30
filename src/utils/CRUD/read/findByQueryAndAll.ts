import { Request, Response } from 'express'
import { PrismaModelConfig } from '../../interfaces/model'
export default function findByQueryAndMany(config: PrismaModelConfig) {
    const { model, prisma } = config;
    return async (req: Request, res: Response) => {


    }
}