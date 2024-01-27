"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("./routers/profile"));
const room_1 = __importDefault(require("./routers/room"));
const server_1 = require("./server");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const endPointArr = [
    {
        endpoint: '/room',
        controller: room_1.default
    },
    {
        endpoint: '/profile',
        controller: profile_1.default
    }
];
(0, server_1.setRoute)(app, endPointArr);
(0, server_1.startServer)(app, 8080);
