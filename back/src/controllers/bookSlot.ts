import express = require('express')
import Booking from '../models/bookingModel'

export default (req : express.Request, res : express.Response) => {
   const slotId = req.params.slotId
    try {
            Booking.findById(slotId).then((booking: any) => {
                
                
              booking.push({
                  booked: true,
                  bookedBy: req.body.athleteName,
                  contact: req.body.athletePhone,
                  athleteId: req.body.athleteId
                    
                    
                })
                booking.save()
                res.status(200).json({
                    status: 'success',
                    message: 'Successfully booked session',
                    data: {
                       
                    }
                })
            })
        } catch (err) {
            res.status(500).json({
                status: 'fail',
                message: err,
                data: {
                    
                }
            })
    }
}