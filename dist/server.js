"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoute = exports.startServer = void 0;
const startServer = (app, port) => {
    try {
        app.listen(port, () => {
            console.log(`server running! at port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.startServer = startServer;
const setRoute = (app, endPointArr) => {
    if (endPointArr.length === 0) {
        return;
    }
    else {
        const endPoint = endPointArr[0];
        endPointArr.shift();
        app.use(endPoint.endpoint, endPoint.controller);
        setRoute(app, endPointArr); // Recursively process the next route
    }
};
exports.setRoute = setRoute;
