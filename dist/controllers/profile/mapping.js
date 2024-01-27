"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const mappingProfile = async (req, res) => {
    /**
     * handle logic
     */
    const { user, room } = req.body;
    const prisma = new client_1.PrismaClient();
    try {
        if (user.id && room.id) {
            // create profile
            const findRec = await prisma.profiles.findFirst({
                where: {
                    userId: user.id,
                    roomId: room.id
                },
                select: {
                    id: true
                }
            });
            if (findRec) {
                res.send(`have profile in database`);
            }
            else {
                prisma.profiles.create({
                    data: {
                        userId: user.id,
                        roomId: room.id
                    }
                })
                    .then(result => {
                    res.status(200).send(`create profile successefully!`);
                })
                    .catch(error => {
                    res.status(500).send(`PRISMA.PROFILES.CREATE ERROR at ${__dirname}`);
                });
            }
        }
        else {
            res.status(500).send(`some bug at middleware or ${__dirname}`);
        }
        prisma.$disconnect();
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = mappingProfile;
