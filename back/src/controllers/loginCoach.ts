import express = require('express')
import Coach from '../models/coachModel'
import mongoose = require('mongoose')
import * as BCrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export default (req: express.Request, res: express.Response) => {
    const loginForm = req.body

    try{
        Coach.findOne({email: loginForm.email}).then((coach: any) =>{
            BCrypt.hash(loginForm.password, coach.salt, (err, hash) => {
                if (hash === coach.password) {
                    const token = jwt.sign(
                        {
                            email:loginForm.email, 
                            password:loginForm.password
                        }, process.env.SECRET, {
                        expiresIn: 1800 //expires in 30 minutes
                    })
                    coach.updateOne({token: token})
                    res.status(200).json({
                        status: 'success',
                        message: 'login successful',
                        data: {
                            token: token
                        }
                    })
                } else {
                    res.status(403).json({
                        status: 'fail',
                        message: 'invalid credentials'
                    })
                }
            })
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}