import express = require('express')
import Coach from '../models/coachModel'

export default (req : express.Request, res : express.Response) => {
    const id = req.query.id
    try {
            let slotsToReturn: Array<any> = []
            const desiredDate = new Date(Date.parse(req.params.date))
        Coach.findById(id).then((coach: any) => {
           
                coach.timeSlots.forEach((slot: any) => {
                    const slotDate = new Date(Date.parse(slot.date))
                    if (slotDate.toDateString() == desiredDate.toDateString()) {
                        slotsToReturn.push(slot)
                    } else if (Date.parse(req.params.date) > Date.parse(slot.date)){
                        if (slot.repeat === 'Weekly' && slotDate.getDay() === desiredDate.getDay()) {
                            slotsToReturn.push(slot)
                        } else if (slot.repeat === 'Fortnightly' && slotDate.getDay() === desiredDate.getDay()) {
                            const weeksBetween = (dayOne: number, dayTwo: number) => {
                                return (dayTwo - dayOne)/(60*60*24*7*1000)
                            }
                            if (!(weeksBetween(Date.parse(slot.date),Date.parse(req.params.date)) &1)) {
                                slotsToReturn.push(slot)
                            }
                        } else if (slot.repeat === 'Monthly' && slotDate.getDate() === desiredDate.getDate()) {
                            slotsToReturn.push(slot)
                        }
                    }
                })
                res.status(200).json({
                    status: 'success',
                    message: 'slots retrieved',
                    data: {
                        slots: slotsToReturn
                    }
                })
            })
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err,
                data: {
                    
                }
            })
    }
}