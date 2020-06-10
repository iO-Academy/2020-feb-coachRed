import mongoose = require('mongoose')

let sportSchema : mongoose.Schema = new mongoose.Schema({name: String}, {collection: 'sport'})

export default mongoose.model('Sport', sportSchema)