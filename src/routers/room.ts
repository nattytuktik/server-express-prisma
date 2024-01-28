import { NextFunction, Router, Request, Response, Application } from "express";
import roomController from "../controllers/room/ceateRoom";
import findManyRoom from "../controllers/room/findManyRoom";
import updateRoom from "../controllers/room/updateRoom";
import DropRoom from "../controllers/room/dropRoom";
import { CreateRouter, ConfigRouter } from "../lib/controllers/mappignRouter";

const room = Router();

room
    .post("/", roomController)
    .get("/", findManyRoom)
    .put('/', updateRoom)
    .delete('/', DropRoom);

const configRouter: ConfigRouter = {
    router: room,
    method: 'get',
    path: '/',
}

const routerHandle = {
    controller: roomController,
    middleware: [

    ]
}


export default room;

const ExRoom = CreateRouter(routerHandle, configRouter)