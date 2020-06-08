"use strict";
exports.__esModule = true;
var validator = require("validator");
function coachValidator(coach) {
    var valid = false;
    var firstName = (!validator.isEmpty(coach.firstName) && validator.isAlpha(coach.firstName)) ? true : false;
    var lastName = (!validator.isEmpty(coach.lastName) && validator.isAlpha(coach.lastName)) ? true : false;
    var email = validator.isEmail(coach.email) ? true : false;
    var phone = validator.isNumeric(coach.phone) ? true : false;
    var postCode = validator.isPostalCode(coach.postCode, 'GB') ? true : false;
    return firstName && lastName && email && phone && postCode;
}
exports["default"] = coachValidator;
