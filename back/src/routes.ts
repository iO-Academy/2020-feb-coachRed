import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/registerCoach'
import loginCoach from './controllers/loginCoach'
import validateUser from './controllers/validateUser'
import createSlot from './controllers/createSlot'
import getSlots from './controllers/getSlots'
import cors = require('cors')
import { readAthlete } from './controllers/athlete/readAthlete'
import { createAthlete } from './controllers/athlete/createAthlete'
import { updateAthlete } from './controllers/athlete/updateAthlete'
import { deleteAthlete } from './controllers/athlete/deleteAthlete'
import { loginAthlete } from './controllers/athlete/loginAthlete'
import { checkAthleteLogin } from './controllers/athlete/checkAthleteLogin'
const app = express();

const routes = (app : express.Application) :void => {
    
    app.get('/', (req,res)=>{res.sendFile('index.html',{root: "./"})})
    app.get('/dist/styles/styles.css', (req,res)=>{res.sendFile('dist/styles/styles.css',{root: "./"})})
    app.get('/sport', getAllSports)
    app.post('/coach', sendFormInfo)
    app.post('/coach/login', loginCoach)
    app.use('/slot/', validateUser)
    app.post('/slot/', createSlot)
    app.get('/slot/:date', getSlots)
    app.get('/athlete',checkAthleteLogin)
    app.put('/athlete',checkAthleteLogin)
    app.delete('/athlete',checkAthleteLogin)
    app.get('/athlete',readAthlete)
    app.post('/athlete',createAthlete)
    app.put('/athlete',updateAthlete)
    app.delete('/athlete', deleteAthlete)
    app.post('/athlete/login',loginAthlete)
}

export default routes