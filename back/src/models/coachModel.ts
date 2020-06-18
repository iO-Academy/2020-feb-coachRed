import mongoose = require('mongoose')

let CoachSchema  = {

  firstName: {type: String, required: true}, //think we'll have to split name into 2
  lastName: {type: String, required: true},
  email: {type: String, required: true}, //can we typehint an email address somehow?
  phone: String, 
  dob: {type: String, required: true},
  
  houseNumber: Number, //  either number or name
  houseName: String, // either number or name
  address1: {type: String, required: true},
  address2: String,
  town: {type: String, required: true},
  county: {type: String, required: true},
  postcode: {type: String, required: true}, // can typehint a postcode with regex?
  location: {
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
  }, //needs to be location typehinted probably

  token: {type: String, required: true},
  salt: {type: String, required: true},

  qualifications: {type: String, required: true}, //array best way to handle multiple?
  yearsCoaching: {type: Number, required: true},
  sport: {type: String, required: true}, // list from database. Typehint to sport?
  expertise: {type: String, required: true},

  password: {type: String, required: true}, //obvs needs sorting out

  timeSlots: [
    {
      ageGroup: {type: String, required: true},
      hourlyRate: {type: Number, required: true},
      date: {type: String, required: true},
      startTime: {type: String, required: true},
      endTime: {type: String, required: true},
      repeat: {type: String, required: true},
      availableFor: Number,
      bookedBy: [{
          firstName: {type: String, required: true},
          lastName: {type: String, required: true},
          startDate: {type: Date, required: true},
          endDate: {type: Date, required: true},
          email: {type: String, required: true},
          phone: {type: String, required: true}
      }]
    }
  ]
}

let coachSchema : mongoose.Schema = new mongoose.Schema(CoachSchema, {collection: 'coach'})
export default mongoose.model('Coach', coachSchema)
