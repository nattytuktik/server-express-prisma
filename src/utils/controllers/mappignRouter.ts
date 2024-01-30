import { Router, NextFunction, Request, Response } from "express";

const CreateRouter = (router: Router, configRouters: ConfigRouter[]): void => {
    if (configRouters && configRouters.length > 0) {
        const config: ConfigRouter = configRouters.shift()!; // Use ! to assert that config is not undefined
        const { controller, middleware, method, path } = config;
        router[method](path, ...middleware, controller);
        CreateRouter(router, configRouters);
    }
};

export interface ConfigRouter {
    middleware: Array<(req: Request, res: Response, next: NextFunction) => void>;
    controller: (req: Request, res: Response) => void;
    method: "get" | "post" | "delete" | "put";
    path: string;
}

export { CreateRouter };

