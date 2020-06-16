import mongoose = require('mongoose')

let bookingSchema: mongoose.Schema = new mongoose.Schema({
  
  ageRange: String,
  hourlyRate: Number,
  date: String,
  startTime: String,
  endTime: String,
  repeat: String,
  booked: Boolean,
  bookedBy: String,
  contact: String,
  athleteId: String
},
  { collection: 'coach' })

export default bookingSchema