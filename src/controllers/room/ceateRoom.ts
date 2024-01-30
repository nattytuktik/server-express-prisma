import { ConfigRouter } from '../../utils/controllers/mappignRouter';
import { Create } from '../../utils/CRUD/create/create';
import prisma from "../../prisma";
import validNumberRoom from '../../middlewares/room/validNumberRoom';

const CreateRoomCont = Create({
    model: "rooms",
    prisma
})


const CreateRoom: ConfigRouter = {
    path: 'room/',
    method: "post",
    controller: CreateRoomCont,
    middleware: [
        validNumberRoom
    ]

}

export { CreateRoom }