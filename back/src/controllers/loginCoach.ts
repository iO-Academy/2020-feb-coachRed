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
                    const token: string = jwt.sign(
                        {
                            email:loginForm.email, 
                            password:loginForm.password
                        }, process.env.SECRET, {
                        expiresIn: 1800 //expires in 30 minutes
                    })
                   
                    coach.token = token
                    coach.save()
                    res.status(200).json({
                        status: 'success',
                        message: 'login successful',
                        data: {
                            "token": token,
                            "id" : coach._id
                        }
                    })
                } else {
                    res.status(403).json({
                        status: 'fail',
                        message: 'invalid credentials'
                    })
                }
            })
        }).catch(err => {
            res.status(500).json({
                status: 'fail',
                message: 'could not login',
                data: {}
            })
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'could not login',
            data: {}
        })
    }
}