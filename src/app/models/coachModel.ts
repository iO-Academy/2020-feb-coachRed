import mongoose = require('mongoose')

let coach: object = {

  firstName: String, //think we'll have to split name into 2
  lastName: String,
  email: String, //can we typehint an email address somehow?
  phone: Int16Array, //is this just a normal int?
  dob: Date,
  
  houseNumber: Int16Array, //  either number or name
  houseName: String, // either number or name
  address1: String,
  address2: String,
  town: String,
  county: String,
  postcode: String, // can typehint a postcode with regex?

  qualifications: Array, //array best way to handle multiple?
  yearsCoaching: Int16Array,
  sport: String, // list from database. Typehint to sport?
  expertise: String,

  password: String //obvs needs sorting out
}

let coachSchema : mongoose.Schema = new mongoose.Schema(coach, {collection: 'coach'})

export default mongoose.model('Coach', coachSchema)