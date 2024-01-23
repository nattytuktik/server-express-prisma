import { Router } from "express";
import { mappingRoomUser } from "../controllers/user/user.controller";

const profile = Router();

profile.get('/', mappingRoomUser)

profile.post('/', )
export default profile