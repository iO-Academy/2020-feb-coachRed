"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let CoachSchema = {
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
let coachSchema = new mongoose.Schema(CoachSchema, { collection: 'coach' });
exports.default = mongoose.model('Coach', coachSchema);
