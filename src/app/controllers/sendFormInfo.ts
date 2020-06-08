import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import sendEmail from '../helpers/sendEmail'
import coachValidator from '../helpers/validators'

async function sendFormInfo(req: express.Request, res: express.Response) {
  
    let aCoach = req.body

    if (coachValidator(aCoach)) {

        try {
        
            let coach = new Coach(aCoach)
            
            console.log(coach)
        
            coach.save()

            sendEmail(aCoach)

            res.status(200).json(
                {
                    status: 'success',
                    message: 'coach successfully added',
                    data: coach
                }
            )
        }
    
        catch (error) {

            console.log(error)

            res.status(500).json(
                {
                    status: 'unsuccessful',
                    message: 'coach not registered'
                }
            )

        }
    } 
    res.send('failed validation')
}

export default sendFormInfo
