import express = require('express')
import Coach from '../models/coachModel'
import {AthleteModel} from '../models/AthleteModel'

export default async (req: express.Request, res: express.Response) => {

    const bearerToken = req.header("Authorization").split(' ')[1]
    console.log(bearerToken)
    const athlete : any = await AthleteModel.findOne({token: bearerToken})
    const slotId = req.params.slotId
    const coachId = req.query.coachId
    console.log(athlete)

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