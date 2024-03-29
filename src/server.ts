import { Application, Router } from "express";
import { SetRoute } from "./interfaces";

const startServer = (app: Application, port: number) => {

    try {
        app.listen(port, () => {
            console.log(`server running! at port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

const setRoute = (app: Application, endPointArr: SetRoute[]): void => {
    if (endPointArr.length === 0) {

      return
    } else {
      const endPoint = endPointArr[0];
      endPointArr.shift();
      app.use(endPoint.endpoint, endPoint.controller);
      setRoute(app, endPointArr); // Recursively process the next route
    }
  };

export {startServer, setRoute}