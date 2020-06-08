import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/sendFormInfo'

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const routes = (app : express.Application) :void => {
    app.get('/sport', getAllSports)
}


export default routes