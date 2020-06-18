import express = require('express');
import mongoose = require('mongoose');

import { AthleteModel } from '../../models/AthleteModel';
import { RestResponse } from '../../interfaces/RestResponse';

export async function deleteAthlete(req: express.Request, res: express.Response) {
    const bearerToken = req.header('Authorization').split(' ')[1];
    AthleteModel.deleteOne({ token: bearerToken }, (err) => {
        if (err) {
            const response: RestResponse = {
                status: 'fail',
                message: 'failed to delete athlete',
                data: {}
            }

            return res.status(500).json(response);
        } else {
            const response: RestResponse = {
                status: 'ok',
                message: 'athlete successfully deleted',
                data: {}
            }

            return res.status(200).json(response);
        }
    })
}