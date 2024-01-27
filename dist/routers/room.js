"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ceateRoom_1 = __importDefault(require("../controllers/room/ceateRoom"));
const findManyRoom_1 = __importDefault(require("../controllers/room/findManyRoom"));
const updateRoom_1 = __importDefault(require("../controllers/room/updateRoom"));
const room = (0, express_1.Router)();
room
    .post("/", ceateRoom_1.default)
    .get("/", findManyRoom_1.default)
    .put('/', updateRoom_1.default);
exports.default = room;
