import { NextFunction, Request, Response } from "express";

const validNumberRoom = (req: Request, res: Response, next: NextFunction) => {
    const { room, foor } = req.body;
    const validRoom = {
        maxRoom: 11,
        maxFoor: 3
    }
    if (Number(room) > validRoom.maxRoom || Number(foor) > validRoom.maxFoor) {
        // return not validate content
        res.status(400).send(`room and foor not valid room: ${room} foor: ${foor}`)
    } else {
        next()
    }

}

export default validNumberRoom