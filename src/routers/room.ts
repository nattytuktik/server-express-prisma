import { Router } from "express";
import roomController from "../controllers/room/ceateRoom";
import findManyRoom from "../controllers/room/findManyRoom";

const room = Router();

room.post("/", roomController);

room.get("/", findManyRoom);

export default room;
