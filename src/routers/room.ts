import { NextFunction, Router, Request, Response, Application } from "express";
import { CreateRoom } from "../controllers/room/ceateRoom";
import { FindRoom } from "../controllers/room/findManyRoom";
import { CreateRouter, ConfigRouter } from "../utils/controllers/mappignRouter";
import UpdateRoom from "../controllers/room/updateRoom";

const room = Router()

const rooms: ConfigRouter[] = [
    FindRoom,
    UpdateRoom,
    CreateRoom,
]

CreateRouter(room, rooms)
export default room