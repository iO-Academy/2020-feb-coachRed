import express = require('express')
import Coach from '../models/coachModel'

export default (req : express.Request, res : express.Response) => {
    const bearerToken = req.header('Authorization').split(' ')[1]
    try {
            Coach.findOne({token: bearerToken}).then((coach: any) => {
                console.log(req.body)
                const startTime = req.body.startTime.replace(':','.')
                const endTime = req.body.endTime.replace(':','.')
                if (endTime < startTime) {
                    res.status(400).json({
                        status: 'fail',
                        message: 'sessions cannot end before they start',
                        data: {
                            token: bearerToken
                        }
                    })
                }
                coach.timeSlots.push({
                    date: req.body.date,
                    startTime: req.body.startTime, 
                    endTime: req.body.endTime, 
                    repeat: req.body.repeat,
                })
                console.log(coach.timeSlots)
                coach.save()
                res.status(200).json({
                    status: 'success',
                    message: 'Successfully created time slot',
                    data: {
                        token: req.header('Authorization').split(' ')[1]
                    }
                })
            })
        } catch (err) {
            res.status(500).json({
                status: 'fail',
                message: err,
                data: {
                    token: req.header('Authorization').split(' ')[1]
                }
            })
    }
}