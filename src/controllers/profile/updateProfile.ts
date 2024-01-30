import prisma from "../../prisma";
import UpdateQuery from "../../lib/update/update";
import checkRequestBody from "../../middlewares/profile/chekcRequestBody";
import { ConfigRouter } from "../../lib/controllers/mappignRouter";
const UpdateProfileCont = UpdateQuery({
    prisma: prisma,
    model: "profiles"
})

const UpdateProfile: ConfigRouter = {
    method: 'put',
    path: '/',
    controller: UpdateProfileCont,
    middleware: [
        checkRequestBody
    ]
}

export default UpdateProfile
