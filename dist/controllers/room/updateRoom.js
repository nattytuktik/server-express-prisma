"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const update_1 = require("../../utils/crud/update");
const updateRoom = async (req, res) => {
    const prisma = new client_1.PrismaClient();
    const { room } = req.body;
    try {
        const paramObj = {
            data: room.data,
            id: room.id,
            model: prisma.rooms
        };
        (0, update_1.updateRecord)(paramObj);
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
};
exports.default = updateRoom;
