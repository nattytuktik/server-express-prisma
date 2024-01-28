import prisma from "../../prisma";
import UpdateQuery from "../../lib/update/update";
import checkRequestBody from "../../middlewares/profile/chekcRequestBody";
const UpdateProfileCont = UpdateQuery({
    prisma: prisma,
    model: "profiles"
})

const UpdateProfile = {
    method: 'put',
    path: '/',
    UpdateProfileCont,
    middlewares: [
        checkRequestBody
    ]
}

export default UpdateProfile
