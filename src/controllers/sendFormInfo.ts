import express = require('express')
import Coach from '../app/models/coachModel'


async function sendFormInfo(req: express.Request, res: express.Response) {
  
  let aCoach = {
    firstName: 'James',  
  lastName: 'Waterhouse',
  email: '', 
  phone: '', 
  dob: '',
  
  houseNumber: 0,
  houseName: '',
  address1: '',
  address2: '',
  town: '',
  county: '',
  postcode: '', 

  qualifications: [''], 
  yearsCoaching: 0,
  sport: '',
  expertise: '',

  password: ''
  }
     
      let coach = new Coach(aCoach) // not sure about typehint
      let data = await coach.insertOne(coach) // not sure about typehint

      if (data.insertedCount == 1) {
          let responseData : object = {
              status: "success",
              message: "Coach successfully added!",
              data: coach
          };
          return res.json(responseData)
      }
  
      let responseData : object = {
          status: "failure",
          message: "error adding coach",
          data: {}
      };
      return res.json(responseData)
   
}

export default sendFormInfo


