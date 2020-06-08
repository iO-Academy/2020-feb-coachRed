"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var CoachInterface = {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dob: String,
    houseNumber: Number,
    houseName: String,
    address1: String,
    address2: String,
    town: String,
    county: String,
    postcode: String,
    location: Object,
    qualifications: String,
    yearsCoaching: Number,
    sport: String,
    expertise: String,
    password: String //obvs needs sorting out
};
var coachSchema = new mongoose.Schema(CoachInterface, { collection: 'coach' });
exports["default"] = mongoose.model('Coach', coachSchema);
