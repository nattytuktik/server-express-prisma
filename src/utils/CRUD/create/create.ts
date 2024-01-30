import { PrismaModelConfig } from '../../interfaces/model';

import { Router, Request, Response } from "express";

const Create = (config: PrismaModelConfig) => {

    const { model, prisma } = config;

    return async (req: Request, res: Response) => {

        try {

            if (!['users', 'profiles', 'rooms'].includes(model)) {
                res.status(400).send('Invalid model parameter');
                return;
            }


            const { data } = req.body;
            const result = await (prisma[model].create as any)({
                data: {
                    ...data
                }
            }).catch((err: any) => {
                res.status(500).send(`has ERROR :: ${__dirname}`)
                throw err
            })

            if (result) {
                res.json(result)
            } else {
                res.status(500).send(`some bug in ${__dirname}`)
            }

        } catch (error) {
            res.status(500).send(`ERROR :: ${__dirname}`)
            throw error

        }
    }
}

export { Create }