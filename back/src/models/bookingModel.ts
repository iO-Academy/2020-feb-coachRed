import mongoose = require('mongoose')

let bookingSchema : mongoose.Schema = new mongoose.Schema({name: String}, {collection: 'coach'})

export default mongoose.model('Booking', bookingSchema)