import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/registerCoach'
import loginCoach from './controllers/loginCoach'
import validateUser from './controllers/validateUser'
import createSlot from './controllers/createSlot'
import getSlots from './controllers/getSlots'
import getCoach from './controllers/getCoach'
import bookSlot from './controllers/bookSlot'
import cors = require('cors')
const app = express();

const routes = (app : express.Application) :void => {
    app.options('*', cors())
    app.get('/', (req,res)=>{res.sendFile('index.html',{root: "./"})})
    app.get('/dist/styles/styles.css', (req,res)=>{res.sendFile('dist/styles/styles.css',{root: "./"})})
    app.get('/sport', getAllSports)
    app.post('/coach', sendFormInfo)
    app.post('/coach/login', loginCoach)
    app.post('/slot/', validateUser)
    app.post('/slot/', createSlot)
    app.put('/slot/:slotId', bookSlot)
    app.get('/slot/:date', getSlots)
    app.get('/coach/:id', getCoach)
}

export default routes