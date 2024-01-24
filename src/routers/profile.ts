
import { Router } from "express";
import mappingRoomUser from "../controllers/user/user";
import checkingRoom from "../middlewares/profile/checkingRoom";
const profile = Router();

profile.get('/', mappingRoomUser)
profile.post('/', checkingRoom)
export default profile