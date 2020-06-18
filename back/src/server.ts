import express = require('express')
import routes from './routes'
import mongoose = require('mongoose')
import cors = require('cors')
import { db } from './db'
require('dotenv').config()
import expressmongosanitize = require('express-mongo-sanitize')

//unused const required due to typescript import elision if db not used
const database = db 
const app : express.Application = express()
const port: number = 3000

app.options('*', cors())
app.use(express.json())
app.use(express.static('dist/public/'))
app.use(express.urlencoded({extended: true}))
app.use(expressmongosanitize())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true')
    next();
});

routes(app)

app.listen (port, () => console.log(`App listening at http://localhost:${port}`))