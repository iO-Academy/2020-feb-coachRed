import express = require('express')
import Sport from '../models/sportModel'


export default (req : express.Request, res : express.Response) => {
    try{
        Sport.find().then((sports) =>{
            res.status(200).json({
                status: 'success',
                results: sports.length,
                data: {sports}
            })
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Unable to get list of sports",
            data: {
                error: err
            }
        })
    }
}