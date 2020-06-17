import express = require('express')
import Coach from '../models/coachModel'
import { findSlotsByDate } from '../helpers/findSlotsByDate'
import { filterForClashes } from '../helpers/filterForClashes'
import { findAvailability } from '../helpers/findAvailability'
import { RestResponse } from '../interfaces/RestResponse'

export default async (req : express.Request, res : express.Response) => {
    const id = req.query.id
    let slotsToReturn: Array<any> = []
    const desiredDate = new Date(Date.parse(req.params.date))
    Coach.findById(id).then(async (coach: any) => {
        try {
            let timeSlots = await findSlotsByDate(coach, desiredDate);
            timeSlots = filterForClashes(timeSlots, desiredDate);
            let slotsToReturn = await Promise.all(timeSlots.map(async (slot) => {
                slot.availableFor = await findAvailability(coach, slot, desiredDate);
                console.log(slot);
                return slot;
            }));

            const response: RestResponse = {
                status: 'success',
                message: 'slots retrieved',
                data: {
                    slots: slotsToReturn
                }
            };
    
            return res.status(200).json(response);

        } catch(err) {
            const response: RestResponse = {
                status: 'fail',
                message: 'failed to find slots',
                data: {}
            };
            console.log(err);

            return res.status(500).json(response);
        }
    });
}