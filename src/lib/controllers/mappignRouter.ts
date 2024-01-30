import { Router, NextFunction, Request, Response } from "express";

const CreateRouter = (router: Router, configRouters: ConfigRouter[]): any => {

    const lenConfig = configRouters.length;
    if (lenConfig == 0) {
        return
    } else {
        const config = configRouters.shift();

        if (config) {
            const { controller, middleware, method, path } = config;
            console.log(middleware)
            router[method](path, ...middleware, controller);
            return CreateRouter(router, configRouters)
        } else {
            console.log('have some bug ij Createrouter Function :: ', __dirname)
            return
        }
    }
}

export interface ConfigRouter {
    middleware: Array<(req: Request, res: Response, next: NextFunction) => void>
    controller: (req: Request, res: Response) => void
    method: "get" | "post" | "delete" | "put"
    path: string,
}

export {
    CreateRouter,
}