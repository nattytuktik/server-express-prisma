import { Request, Response, NextFunction } from "express";

export default function checkRequestBody(req: Request, res: Response, next: NextFunction) {

    try {
        const { user, room } = req.body
    }
    catch (error) {
        res.status(500).send(`ERROR :: ${__dirname}`)
        console.log(error)
    }
}