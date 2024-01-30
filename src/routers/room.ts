import { NextFunction, Router, Request, Response, Application } from "express";
import { CreateRoom } from "../controllers/room/ceateRoom";
import { FindRoom } from "../controllers/room/findManyRoom";
import updateRoom from "../controllers/room/updateRoom";
import DropRoom from "../controllers/room/dropRoom";
import { CreateRouter, ConfigRouter } from "../lib/controllers/mappignRouter";

const room = Router();


const rooms: ConfigRouter[] = [
    CreateRoom,
    FindRoom
]



const ExRoom = CreateRouter(room, rooms)


export default room