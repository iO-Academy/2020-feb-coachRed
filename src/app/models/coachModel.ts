import mongoose = require('mongoose')

let Coach = {

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

  qualifications: Array, //array best way to handle multiple?
  yearsCoaching: Number,
  sport: String, // list from database. Typehint to sport?
  expertise: String,

  password: String //obvs needs sorting out
}

// let coach: Coach = {

//   firstName: '',  
//   lastName: '',
//   email: '', 
//   phone: '', 
//   dob: '',
  
//   houseNumber: 0,
//   houseName: '',
//   address1: '',
//   address2: '',
//   town: '',
//   county: '',
//   postcode: '', 

//   qualifications: [''], 
//   yearsCoaching: 0,
//   sport: '',
//   expertise: '',

//   password: ''
// }

let coachSchema : mongoose.Schema = new mongoose.Schema(Coach, {collection: 'coach'})

export default mongoose.model('coach', coachSchema)