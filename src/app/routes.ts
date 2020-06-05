import express = require('express')
import getAllSports from './controllers/getAllSports'

const routes = (app : express.Application) :void => {
    app.get('/sport', getAllSports)
}

export default routes