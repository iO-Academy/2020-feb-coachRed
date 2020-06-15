import express = require('express');
import mongoose = require('mongoose');
import bCrypt = require('bcrypt');

import { AthleteModel } from '../../models/AthleteModel';
import { RestResponse } from '../../interfaces/RestResponse';

const proceedWithUpdate = (bearerToken: string, req: express.Request, res: express.Response) => {
    AthleteModel.findOneAndUpdate({ token: bearerToken},req.body, (err) => {
    if (err) {
        const response: RestResponse = {
            status: 'fail',
            message: 'failed to update athlete',
            data: {
                token: bearerToken
            }
        };

        return res.status(500).json(response);
    } else {
        const response: RestResponse = {
            status: 'ok',
            message: 'athlete successfully updated',
            data: {
                token: bearerToken
            }
        };

        return res.status(200).json(response);
    }
    })
}

export async function updateAthlete(req: express.Request, res: express.Response) {
    const bearerToken = req.header('Authorization').split(' ')[1];
    if (req.body.password) {
        try {
            req.body.salt = await bCrypt.genSalt();
            await bCrypt.hash(req.body.password, req.body.salt, (err, hash) => {
                req.body.password = hash;
                proceedWithUpdate(bearerToken, req, res);
            });
        } catch(err) {
            const response: RestResponse = {
                status: 'fail',
                message: 'failed to update security information',
                data: {
                    token: bearerToken
                }
            };
            res.status(500).json(response);
        }
    } else {
        proceedWithUpdate(bearerToken, req, res);
    }
}