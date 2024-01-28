import checkRequestBody from "../../middlewares/profile/chekcRequestBody";
import DropQuery from "../../lib/delate/drop";
import prisma from "../../prisma";

const DropProfile = DropQuery(
    {
        prisma: prisma,
        model: 'profiles'
    }
)
// i preform for dynamic crateRoute by functional
const expDropProfile = {
    method: 'delete',
    path: '/',
    DropProfile,
    middleWare: [

    ]
}


export default DropProfile