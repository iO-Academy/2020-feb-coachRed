import { CoachInterface } from './../interfaces/CoachInterface';
import express = require('express')
import Coach from '../models/coachModel'
import {Location} from '../interfaces/Location'
import haversine = require('haversine')



export default async (req : express.Request, res : express.Response) => {
    try{
        const search = JSON.parse(req.params.search)

        const athleteLocation = {longitude: parseFloat(search.longitude), latitude: parseFloat(search.latitude)}

        const coaches = await Coach.find()//select only the required fields

        let matchingCoaches :Array<any> = []

        coaches.forEach((coach :any) => {
            if(haversine(athleteLocation, coach.location, {threshold: 30, unit: 'mile'}) && search.sport === coach.sport){
                const distance = haversine(athleteLocation, coach.location, {unit: 'mile'})
                const coachIncludingDistance = {
                    firstName : coach.firstName,
                    lastName: coach.lastName,
                    distance: distance,
                    yearsCoaching: coach.yearsCoaching,
                    coachId: coach._id
                }
                matchingCoaches.push(coachIncludingDistance)
            }
        })
        res.json({
            status: 'success',
            message: 'successfully got coaches from database',
            data: {
                matchingCoaches
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}