
import DropQuery from '../../lib/delate/drop';
import prisma from '../../prisma';
const DropRoom = DropQuery({
    prisma: prisma,
    model: 'rooms'
}
)

export default DropRoom