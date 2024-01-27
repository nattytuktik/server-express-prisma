import { Router } from "express";
import roomController from "../controllers/room/ceateRoom";
import findManyRoom from "../controllers/room/findManyRoom";
import updateRoom from "../controllers/room/updateRoom";
import DropRoom from "../controllers/room/dropRoom";


const room = Router();

room
    .post("/", roomController)
    .get("/", findManyRoom)
    .put('/', updateRoom)
    .delete('/', DropRoom)
export default room;
