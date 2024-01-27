import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export interface PrismaModelConfig {
    prisma: PrismaClient;
    model: "users" | "profiles" | "rooms";
}

const DropQuery = (config: PrismaModelConfig) => {
    const { prisma, model } = config;

    return async (req: Request, res: Response) => {
        try {
            const id = req.query.id;

            if (!id) {
                res.status(400).send('Missing id parameter');
                return;
            }

            // Validate that the model is one of the expected values
            if (!['users', 'profiles', 'rooms'].includes(model)) {
                res.status(400).send('Invalid model parameter');
                return;
            }

            const findAndDrop = await (prisma[model].update as any)({
                where: { id: parseInt(id as string, 10) },
                data: {
                    status: false
                }
            });

            res.status(200).json({ success: true, data: findAndDrop });
        } catch (error) {
            console.error('Error updating record:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    };
};

export default DropQuery;
