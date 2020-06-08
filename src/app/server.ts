import express = require('express')
import routes from './routes'
import mongoose = require('mongoose')
import {db} from './db'

const database = db

const app : express.Application = express()
const port : number = 3000

app.use(express.json())
app.use(express.urlencoded())

routes(app)

app.listen (port, () => console.log(`App listening at http://localhost:${port}`))