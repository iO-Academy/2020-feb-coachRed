import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/registerCoach'
import loginCoach from './controllers/loginCoach'
import validateUser from './controllers/validateUser'
import createSlot from './controllers/createSlot'
const app = express();

const routes = (app : express.Application) :void => {
    app.get('/', (req,res)=>{res.sendFile('index.html',{root: "./"})})
    app.get('/dist/styles/styles.css', (req,res)=>{res.sendFile('dist/styles/styles.css',{root: "./"})})
    app.get('/sport', getAllSports)
    app.post('/coach', sendFormInfo)
    app.post('/coach/login', loginCoach)
    app.use('/slot', validateUser)
    app.post('/slot', createSlot)
}

export default routes