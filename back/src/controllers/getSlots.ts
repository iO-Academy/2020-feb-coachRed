import express = require('express')
import Coach from '../models/coachModel'

export default (req : express.Request, res : express.Response) => {
    const bearerToken = req.header('Authorization').split(' ')[1]
    try {
            let slotsToReturn: Array<any> = []
            const desiredDate = new Date(Date.parse(req.params.date))
            Coach.findOne({token: bearerToken}).then((coach: any) => {
                coach.timeSlots.forEach((slot: any) => {
                    const slotDate = new Date(Date.parse(slot.date))
                    if (slotDate.toDateString() == desiredDate.toDateString()) {
                        slotsToReturn.push(slot)
                        console.log(slotsToReturn)
                    } else if (Date.parse(req.params.date) > Date.parse(slot.date)){
                        if (slot.repeat === 'weekly' && slotDate.getDay() === desiredDate.getDay()) {
                            slotsToReturn.push(slot)
                        } else if (slot.repeat === 'fortnightly') {
                            const weeksBetween = (dayOne: number, dayTwo: number) => {
                                return (dayTwo - dayOne)/(60*60*24*7*1000)
                            }
                            if (!(weeksBetween(Date.parse(slot.date),Date.parse(req.params.date)) &1)) {
                                slotsToReturn.push(slot)
                            }
                        } else if (slot.repeat === 'monthly' && slotDate.getDate() === desiredDate.getDate()) {
                            slotsToReturn.push(slot)
                        }
                    }
                })
                res.status(200).json({
                    status: 'success',
                    message: 'slots retrieved',
                    data: {
                        token: req.header('Authorization').split(' ')[1],
                        slots: slotsToReturn
                    }
                })
            })
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err,
                data: {
                    token: req.header('Authorization').split(' ')[1]
                }
            })
    }
}