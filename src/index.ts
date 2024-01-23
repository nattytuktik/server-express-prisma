import express from 'express';
import mappingRoute from './routers/mapping'
import room from './routers/room';

const app = express();

app.use(express.json())

app.use('/', mappingRoute)
app.use('/room', room)

app.listen(8080, () => {
    console.log(`server running! at port 8080`)
})

