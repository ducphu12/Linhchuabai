import express from 'express';
import {router} from "./src/router/router";
import {AppDataSource} from "./src/data-source";

const app = express();
AppDataSource.initialize().then(connection => {
    console.log('Connect Db success')
})
app.use(express.json)
app.use('', router)
app.listen(8080, () => {
    console.log('server is running')
})