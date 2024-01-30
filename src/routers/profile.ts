
import { Router } from "express";
import checkingRoom from "../middlewares/profile/checkingRoom";
import findUserMapping from "../middlewares/user/findUserFormapping";
import mappingProfile from "../controllers/profile/updateProfile";
import findProfiles from "../controllers/profile/findProfilles";
import DropProfile from "../controllers/profile/dropProfile";
import UpdateProfile from "../controllers/profile/updateProfile";
import { ConfigRouter, CreateRouter } from "../lib/controllers/mappignRouter";

const profile = Router();

const profiles: ConfigRouter[] = [
    DropProfile,
    UpdateProfile,
    findProfiles
]

CreateRouter(profile, profiles)

// profile
//     .get('/', findProfiles)
//     .post('/', findUserMapping, checkingRoom, mappingProfile)
//     .delete('/', DropProfile)
// .put('/', checkRequestBody, UpdateProfile)

export default profile