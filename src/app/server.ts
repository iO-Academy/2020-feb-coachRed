import express = require('express')
import routes from './routes'
import mongoose = require('mongoose')
const app : express.Application = express()
const port : number = 3000

mongoose.connect('mongodb://localhost:27017/CoachRed', {useNewUrlParser: true});

app.use(express.json())
app.use(express.urlencoded())

routes(app)

app.listen (port, () => console.log(`App listening at http://localhost:${port}`))