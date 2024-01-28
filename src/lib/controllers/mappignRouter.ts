import { Router, NextFunction, Request, Response } from "express";

const CreateRouter = (routerHandle: RouterHandle, configRouter: ConfigRouter) => {
    const { router, path, method } = configRouter;
    const { middleware, controller } = routerHandle;
    return router[method](path, ...middleware, controller)
}






export interface RouterHandle {
    middleware: Array<(req: Request, res: Response, next: NextFunction) => void>
    controller: (req: Request, res: Response) => void
}

export interface ConfigRouter {
    router: Router,
    method: "get" | "post" | "delete" | "put"
    path: string,
}


export {
    CreateRouter,

}