import express = require('express')
import Coach from '../app/models/coachModel'
import mongoose = require('mongoose')

async function sendFormInfo(req: express.Request, res: express.Response) {
  
    let aCoach = req.params.task

    try {
    
        let coach = new Coach(aCoach)
        
        console.log(coach)
      
        coach.save()
    }
  
    catch (error) {

        console.log(error)

    }
}

export default sendFormInfo
