import express = require('express')
import Coach from '../models/coachModel'

export default (req : express.Request, res : express.Response) => {
  
  try {
      
      let coachId = req.query.coachId
      
      Coach.findOne({ _id: coachId }).then((coach: any) => {
        res.status(200).json({
          status: 'success',
          results: coach,
          data: { coach }
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