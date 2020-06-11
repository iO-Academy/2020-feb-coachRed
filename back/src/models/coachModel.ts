import mongoose = require('mongoose')

let CoachSchema  = {

  firstName: String, //think we'll have to split name into 2
  lastName: String,
  email: String, //can we typehint an email address somehow?
  phone: String, 
  dob: String,
  
  houseNumber: Number, //  either number or name
  houseName: String, // either number or name
  address1: String,
  address2: String,
  town: String,
  county: String,
  postcode: String, // can typehint a postcode with regex?
  location: Object, //needs to be location typehinted probably

  token: String,
  salt: String,

  qualifications: String, //array best way to handle multiple?
  yearsCoaching: Number,
  sport: String, // list from database. Typehint to sport?
  expertise: String,

  password: String, //obvs needs sorting out

  timeSlots: [
    {
      date: String,
      startTime: String,
      endTime: String,
      repeat: String
    }
  ]
}

let coachSchema : mongoose.Schema = new mongoose.Schema(CoachSchema, {collection: 'coach'})
export default mongoose.model('Coach', coachSchema)
