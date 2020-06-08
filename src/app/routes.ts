import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/sendFormInfo'
const app = express();

const routes = (app : express.Application) :void => {
    app.get('/sport', getAllSports)
    app.post('/coach', sendFormInfo)
}

export default routes