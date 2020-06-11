import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import * as jwt from 'jsonwebtoken'

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {

    Coach.findOne({email: req.query.email}).then((coach: any) => {
        try {
            const sentToken: string = req.query.token.toString()
            console.log(sentToken)
            console.log(coach.token)
            if (sentToken == coach.token) {
                const tokenData: any = jwt.verify(sentToken, process.env.SECRET)
                const newToken = jwt.sign({
                    email: tokenData.email, 
                    password: tokenData.password
                }, process.env.SECRET, {
                    expiresIn: 1800
                })
                coach.updateOne({token: newToken})
                req.query.token = newToken
            } else {
                return res.status(403).json({
                    status: 'fail',
                    message: 'Credentials not recognised'
                })
            }
        } catch(err) {
            return res.status(403).json({
                status: 'fail',
                message: 'Credentials not recognised',
                data: {
                    error: err
                }
            })
        }
        next()
    })
}