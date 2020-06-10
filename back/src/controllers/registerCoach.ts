import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import sendEmail from '../helpers/sendEmail'
import coachValidator from '../helpers/validators'
import * as BCrypt from 'bcrypt'

async function sendFormInfo(req: express.Request, res: express.Response) {
  
    let aCoach = req.body

    await BCrypt.hash(aCoach.password, 10, (err, hash) => {
        aCoach.password = hash
    })

    if (coachValidator(aCoach)) {

        try {
        
            let coach = new Coach(aCoach)
        
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
    } else {
        
        res.status(400).json(
            {
                status: 'unsuccessful',
                message: 'coach not registered data not validated'
            }
        )
    }
}

export default sendFormInfo
