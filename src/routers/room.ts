import { Router } from "express";
import roomController from "../controllers/room/ceateRoom";
import findManyRoom from "../controllers/room/findManyRoom";
import updateRoom from "../controllers/room/updateRoom";


const room = Router();

room
    .post("/", roomController)
    .get("/", findManyRoom)
    .put('/', updateRoom)
export default room;
