import express = require('express')
import sendFormInfo from '../controllers/sendFormInfo'
const app = express();

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const routes = (app: express.Application): void => {

    app.post('/newCoach/:coach', jsonParser, sendFormInfo)

}

export default routes