import express = require('express');
import mongoose = require('mongoose');

import { AthleteModel } from '../../models/AthleteModel';
import { RestResponse } from '../../interfaces/RestResponse';

export async function readAthlete(req: express.Request, res: express.Response) {
    let athlete = {}
    try {
        const bearerToken = req.header('Authorization').split(' ')[1];
        athlete = await AthleteModel.findOne({token: bearerToken});

        if (!athlete) {
            const response: RestResponse = {
                status: 'fail',
                message: 'athlete not found',
                data: {
                    token: bearerToken
                }
            };
            return res.status(404).json(response);
        } else {
            const response: RestResponse = {
                status: 'ok',
                message: 'athlete found successfully',
                data: {
                    athlete,
                    token: bearerToken
                }
            };
            return res.status(200).json(response); 
        }
    } catch (err) {
        const response: RestResponse = {
            status: 'fail',
            message: 'unable to resolve identification token',
            data: {}
        };
        return res.status(404).json(response);
    }
}