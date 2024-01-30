
import DropQuery from '../../utils/CRUD/delate/drop';
import prisma from '../../prisma';
const DropRoom = DropQuery({
    prisma: prisma,
    model: 'rooms'
}
)

export default DropRoom