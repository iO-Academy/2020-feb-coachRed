import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import sendEmail from '../helpers/sendEmail'
import coachValidator from '../helpers/coachValidator'
import * as BCrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import {MailOptions} from '../interfaces/MailOptions'

async function sendFormInfo(req: express.Request, res: express.Response) {
  
    let aCoach = req.body

    aCoach.salt = await BCrypt.genSalt()

    BCrypt.hash(aCoach.password, aCoach.salt, (err, hash) => {
        aCoach.password = hash

        aCoach.token = jwt.sign({username: aCoach.username, password: aCoach.password}, process.env.SECRET, {
            expiresIn: 1800 // expires in 30 minutes
        })

        aCoach.slots = []

        if (coachValidator(aCoach)) {

            try {
            
                let coach = new Coach(aCoach)
            
                coach.save()
                let mailOptions: MailOptions = {
                    from: "Coach Red <coach.red.proto@gmail.com",
                    to: aCoach.email,
                    subject: 'You have successfully registered',
                    html: '<h3>Welcome to Coach Red!</h3> <p>You have successfully registered as a coach.</p>'
                }
                sendEmail(mailOptions)
    
                res.status(200).json(
                    {
                        status: 'success',
                        message: 'coach successfully added',
                    }
                )
            }
        
            catch (error) {
        
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
    })
}

export default sendFormInfo
