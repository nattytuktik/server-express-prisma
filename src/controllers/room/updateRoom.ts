import { ConfigRouter } from "../../utils/controllers/mappignRouter";
import UpdateQuery from "../../utils/CRUD/update/update";
import prisma from "../../prisma";


const updateRoom = UpdateQuery({
    prisma: prisma,
    model: "rooms",
})

const UpdateRoom: ConfigRouter = {
    path: '/',
    method: 'put',
    controller: updateRoom,
    middleware: []
}
export default UpdateRoom