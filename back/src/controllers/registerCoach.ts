import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import sendEmail from '../helpers/sendEmail'
import coachValidator from '../helpers/validators'
import * as BCrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import config from '../config'

async function sendFormInfo(req: express.Request, res: express.Response) {
  
    let aCoach = req.body

    aCoach.salt = await BCrypt.genSalt()

    BCrypt.hash(aCoach.password, aCoach.salt, (err, hash) => {
        aCoach.password = hash

        aCoach.token = jwt.sign({username: aCoach.username, password: aCoach.password}, process.env.SECRET, {
            expiresIn: 1800 // expires in 30 minutes
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
    })
}

export default sendFormInfo
