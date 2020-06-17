import express = require('express')
import Coach from '../models/coachModel'
import {AthleteModel} from '../models/AthleteModel'
import { MailOptions } from '../interfaces/MailOptions';
import sendEmail from '../helpers/sendEmail'

export default async (req: express.Request, res: express.Response) => {

    const bearerToken = req.header("Authorization").split(' ')[1]

    const athlete : any = await AthleteModel.findOne({token: bearerToken})
    const slotId = req.params.slotId
    const coachId = req.query.coachId

    try {
        Coach.findById(coachId)
            .then((coach: any) => {
                const timeSlot = coach.timeSlots.id(slotId)
                timeSlot.set(
                    {
                        booked: true,
                        bookedBy: athlete.firstName + ' ' + athlete.lastName,
                        contact: athlete.phone,
                        athleteId: athlete._id
                    }
                )
                coach.save()
            })
                            
            .then(coach => {
                res.status(200).json({
                    status: 'success',
                    message: 'Successfully booked session',
                    data: {}
                })
            })
            let mailOptions: MailOptions = {
                from: "Coach Red <coach.red.proto@gmail.com",
                to: athlete.email,
                subject: 'You have successfully registered',
                html: '<h3>Welcome to Coach Red!</h3> <p>You have successfully registered as an athlete.</p>'
            }
            sendEmail(mailOptions)       
        }
    
    catch (err) {
            res.status(500).json({
                status: 'fail',
                message: err,
                data: {
                    
                }
            })
    }
}