import express = require('express')
import routes from './routes'
import mongoose = require('mongoose')
import { db } from './db'
import expressmongosanitize = require('express-mongo-sanitize')

//unused const required due to typescript import elision if db not used
const database = db 
const app : express.Application = express()
const port: number = 3000

app.use(express.json())
app.use(express.static('dist/public/'))
app.use(express.urlencoded({extended: true}))
app.use(expressmongosanitize())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

routes(app)

app.listen (port, () => console.log(`App listening at http://localhost:${port}`))