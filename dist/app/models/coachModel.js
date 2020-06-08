"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Coach = {
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
    qualifications: Array,
    yearsCoaching: Number,
    sport: String,
    expertise: String,
    password: String //obvs needs sorting out
};
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
var coachSchema = new mongoose.Schema(Coach, { collection: 'coach' });
exports["default"] = mongoose.model('coach', coachSchema);
