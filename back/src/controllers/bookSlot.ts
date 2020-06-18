import express = require('express')
import Coach from '../models/coachModel'
import {AthleteModel} from '../models/AthleteModel'
import { findAvailability } from '../helpers/findAvailability'
import { RestResponse } from '../interfaces/RestResponse'
import { MailOptions } from '../interfaces/MailOptions';
import sendEmail from '../helpers/sendEmail'

export default async (req: express.Request, res: express.Response) => {

    const bearerToken = req.header("Authorization").split(' ')[1]

    const athlete : any = await AthleteModel.findOne({token: bearerToken})
    const slotId = req.params.slotId
    const coachId = req.query.coachId
    const numSessions = req.body.numSessions
    const groupSize = req.body.groupSize
    const initialDate = new Date(req.body.initialDate)
    const initialTimestamp = initialDate.getTime()

    try {
        Coach.findById(coachId)
            .then((coach: any) => {
                

                const timeSlot = coach.timeSlots.id(slotId)

                if (numSessions > findAvailability(coach, timeSlot, initialDate)) {
                    const response: RestResponse = {
                        status: 'fail',
                        message: 'booking clash detected',
                        data: {
                            token: bearerToken
                        }
                    };

                    return res.status(400).json(response);
                }

                let endDate = initialDate
                if (timeSlot.repeat === "Weekly") {
                    for(let i = 0; i < numSessions; i++) {
                        let dateToBook = new Date(initialTimestamp + i*1000*60*60*24*7)
                        endDate = dateToBook
                    }
                } else if (timeSlot.repeat === "Fortnightly") {
                    for(let i = 0; i < numSessions; i++) {
                        let dateToBook = new Date(initialTimestamp + i*1000*60*60*24*14)
                        endDate = dateToBook
                    }
                } else if (timeSlot.repeat === "Monthly") {
                    for(let i = 0; i < numSessions; i++) {
                        let monthToCheck = initialDate.getMonth() + i;
                        let yearToCheck = initialDate.getFullYear();
                        if (monthToCheck > 11) {
                            monthToCheck -= 12;
                            yearToCheck += 1;
                        }
                        let lastDay = 31;
                        if ([3,5,8,10].includes(monthToCheck)) {
                            lastDay = 30;
                        } else if (monthToCheck === 1) {
                            const isLeapYear = (yearToCheck % 4) ? 0 : 1;
                            const lastDay = 28 + isLeapYear;
                        }
                        const dayToBook = Math.min(lastDay, initialDate.getDate())
                        const dateToBook = new Date(yearToCheck, monthToCheck, dayToBook)
                        endDate = dateToBook
                    }
                }
                const booking = {
                    firstName: athlete.firstName,
                    lastName: athlete.lastName,
                    phone: athlete.phone,
                    groupSize: groupSize,
                    email: athlete.email,
                    startDate: initialDate,
                    endDate: endDate
                }
                timeSlot.bookedBy.push(booking)
                coach.save()
               
                let mailOptionsAthlete: MailOptions = {
                    from: "Coach Red <coach.red.proto@gmail.com",
                    to: athlete.email,
                    subject: 'You have booked a slot',
                    html: '<h3>Hi!</h3> <p>You have successfully booked a slot.</p>'
                }
            
                let mailOptionsCoach: MailOptions = {
                    from: "Coach Red <coach.red.proto@gmail.com",
                    to: coach.email,
                    subject: 'Someone booked a slot!',
                    html: '<h3>Hi!</h3> <p>Someone has booked your slot.</p>'
                }
                sendEmail(mailOptionsAthlete)
                sendEmail(mailOptionsCoach)
            })
                            
            .then(coach => {
                res.status(200).json({
                    status: 'success',
                    message: 'Successfully booked session',
                    data: {
                        token: bearerToken
                    }
                })
            })
                   
        }
    
    catch (err) {
            res.status(500).json({
                status: 'fail',
                message: err,
                data: {
                    token: bearerToken
                }
            })
    }
}