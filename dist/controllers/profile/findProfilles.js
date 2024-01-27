"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
const findProfiles = async (req, res) => {
    // 
    try {
        const prisma = new client_1.PrismaClient();
        const findObj = {
            status: true
        };
        const findProfiles = await prisma.profiles.findMany({
            where: {
                ...findObj
            }
        });
        if (findProfiles) {
            res.json(findProfiles);
        }
        else {
            res.status(204).send(`not found content`);
        }
        prisma.$disconnect();
    }
    catch (error) {
        console.log(error);
        res.status(500).send(`ERROR :: ${__dirname}`);
    }
};
exports.default = findProfiles;
