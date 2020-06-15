import express = require('express')
import Coach from '../models/coachModel'

export default (req : express.Request, res : express.Response) => {
    // const bearerToken = req.header('Authorization').split(' ')[1]
  try {
      
      let coachId = req.params.id
      
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