import UpdateQuery from "../../lib/update/update";
import prisma from "../../prisma";


const UpdateRoom = UpdateQuery({
    prisma: prisma,
    model: "rooms",
})

export default UpdateRoom