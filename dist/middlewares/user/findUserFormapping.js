"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const findUserMapping = async (req, res, next) => {
    try {
        const { user } = req.body;
        const prisma = new client_1.PrismaClient();
        if (user.id) {
            next();
        }
        else {
            /**
             * find user record
             */
            const findUser = await prisma.users.findFirst({
                where: {
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            });
            if (findUser) {
                req.body.user.id = findUser.id;
                next();
            }
            else {
                /**
                 * create User
                 */
                const { id, ...userWithoutId } = user;
                prisma.users.create({
                    data: {
                        ...userWithoutId
                    }
                })
                    .then(result => {
                    req.body.user.id = result.id;
                    next();
                })
                    .catch(error => {
                    console.log(error);
                    res.status(500).send(`ERROR: PRISMA.USERS.CREATE :: ${__dirname}`);
                });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send(`some error at findUserFormapping middlewares`);
    }
};
exports.default = findUserMapping;
