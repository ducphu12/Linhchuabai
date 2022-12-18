import express from 'express';
import {router} from "./src/router/router";

const app = express();
app.use(express.json)
app.use('', router)
app.listen(3000, () => {
    console.log('server is running')
})
