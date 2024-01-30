
import { ConfigRouter } from "../../utils/controllers/mappignRouter";
import DropQuery from "../../utils/CRUD/delate/drop";
import prisma from "../../prisma";

const dropProfile = DropQuery(
    {
        prisma: prisma,
        model: 'profiles'
    }
)
// i preform for dynamic crateRoute by functional
const DropProfile: ConfigRouter = {
    method: 'delete',
    path: '/',
    controller: dropProfile,
    middleware: [

    ]
}


export default DropProfile