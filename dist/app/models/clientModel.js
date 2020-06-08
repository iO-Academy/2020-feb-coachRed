"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var coach = {
    firstName: String,
    lastName: String,
    email: String,
    phone: Int16Array,
    dob: Date,
    houseNumber: Int16Array,
    houseName: String,
    address1: String,
    address2: String,
    town: String,
    county: String,
    postcode: String,
    qualifications: Array,
    yearsCoaching: Int16Array,
    sport: String,
    expertise: String,
    password: String //obvs needs sorting out
};
var clientSchema = new mongoose.Schema(coach, { collection: 'coach' });
exports["default"] = mongoose.model('Client', clientSchema);
