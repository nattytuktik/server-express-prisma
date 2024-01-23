import express from 'express';
import mappingRoute from './routers/profile'
import room from './routers/room';
import { setRoute, startServer } from './server';
import { SetRoute } from './interfaces';

const app = express();

app.use(express.json())

const endPointArr: Array<SetRoute> = [
    {
        endpoint: '/room',
        controller: room
    },
    {
        endpoint: '/profile',
        controller: mappingRoute
    }
]

setRoute(app, endPointArr)
startServer(app, 8080)