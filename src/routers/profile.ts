
import { Router } from "express";
import mappingRoomUser from "../controllers/user/user";
import checkingRoom from "../middlewares/profile/checkingRoom";
import findUserMapping from "../middlewares/user/findUserFormapping";
import mappingRoom from "../controllers/profile/mapping";
const profile = Router();

profile.get('/', mappingRoomUser)
profile.post('/', findUserMapping, checkingRoom, mappingRoom)
export default profile