import DropQuery from "../../lib/delate/drop";
import prisma from "../../prisma";
const DropProfile = DropQuery(
    {
        prisma: prisma,
        model: 'profiles'
    }
)

export default DropProfile