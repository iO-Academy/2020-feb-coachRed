import express = require('express');
import mongoose = require('mongoose');
import bCrypt = require('bCrypt');
import jsonWebToken = require('jsonwebtoken');

import { AthleteModel } from '../../models/AthleteModel';
import { RestResponse } from '../../interfaces/RestResponse';

export async function loginAthlete(req: express.Request, res: express.Response) {
    const loginForm = req.body;

    try {
        const athlete: any = await AthleteModel.findOne({email: loginForm.email}).select('+password +salt +token');
        if (!athlete) {
            const response: RestResponse = {
                status: 'fail',
                message: 'email not registered',
                data: {}
            };
            return res.status(404).json(response);
        }
        bCrypt.hash(loginForm.password, athlete.salt, (err, hash) => {
            if (athlete.password && hash === athlete.password) {
                const token: string = jsonWebToken.sign({
                    email: loginForm.email,
                    seed: Math.random()
                }, process.env.SECRET, {
                    expiresIn: 1800
                });
                athlete.token = token
                
                athlete.save().catch((err: any) => {
                    const response: RestResponse = {
                        status: 'fail',
                        message: 'internal error - could not create login session',
                        data: {}
                    };
                    return res.status(500).json(response);
                }).then(() => {
                    const response: RestResponse = {
                        status: 'ok',
                        message: 'login verified successfully',
                        data: {
                            token: token
                        }
                    };
                    return res.status(200).json(response);
                });

            } else {
                const response: RestResponse = {
                    status: 'fail',
                    message: 'invalid credentials',
                    data: {}
                };
                return res.status(403).json(response);
            }
        });
    } catch (err) {
        const response: RestResponse = {
            status: 'fail',
            message: 'internal server error',
            data: {}
        };
        return res.status(500).json(response);
    }
}
