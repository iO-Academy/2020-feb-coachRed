import mongoose = require('mongoose');

const athleteProperties = {
    // Athletes are uniquely defined by their email address, which is the username they use for login
    email: {type: String, required: true, index: {unique: true}},
    
    // Personal data
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},

    phone: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},

    // Information about this user as an athlete
    yearsExperience: Number,
    sport: {type: String, required: true},
    lookingFor: String,


    // Password and security data
    token: {type: String, required: true, select: false},
    salt: {type: String, required: true, select: false},
    password: {type: String, required: true, select: false}
}

const athleteSchema : mongoose.Schema = new mongoose.Schema(athleteProperties, {collection: 'athlete'});
export const AthleteModel: mongoose.Model<mongoose.Document, {}> = mongoose.model('Athlete', athleteSchema);