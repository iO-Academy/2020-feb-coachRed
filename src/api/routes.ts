import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/sendFormInfo'

const routes = (app : express.Application) :void => {
    app.get('/sport', getAllSports)
}

export default routes