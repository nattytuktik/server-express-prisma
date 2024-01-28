
import { Router } from "express";
import checkingRoom from "../middlewares/profile/checkingRoom";
import findUserMapping from "../middlewares/user/findUserFormapping";
import mappingProfile from "../controllers/profile/updateProfile";
import findProfiles from "../controllers/profile/findProfilles";
import DropProfile from "../controllers/profile/dropProfile";
import UpdateProfile from "../controllers/profile/updateProfile";
import checkRequestBody from "../middlewares/profile/chekcRequestBody";
const profile = Router();

profile
    .get('/', findProfiles)
    .post('/', findUserMapping, checkingRoom, mappingProfile)
    .delete('/', DropProfile)
    .put('/', checkRequestBody, UpdateProfile)

export default profile