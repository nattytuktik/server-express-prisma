import { Router } from "express";
import { mappingRoomUser } from "../controllers/user/user.controller";
import exp from "constants";

const mapping = Router();

mapping.get('/', mappingRoomUser)

export default mapping