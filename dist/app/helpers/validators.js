"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("validator");
const sportModel_1 = require("../models/sportModel");
function coachValidator(coach) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sports = (yield sportModel_1.default.find()).map((sport) => (sport.name));
            let firstName = (!validator_1.default.isEmpty(coach.firstName) && validator_1.default.isAlpha(coach.firstName)) ? true : false;
            let lastName = (!validator_1.default.isEmpty(coach.lastName) && validator_1.default.isAlpha(coach.lastName)) ? true : false;
            let email = (!validator_1.default.isEmpty(coach.email) && validator_1.default.isEmail(coach.email)) ? true : false;
            let phone = (!validator_1.default.isEmpty(coach.phone) && validator_1.default.matches(coach.phone, /^[0-9 +]+$/i)) ? true : false;
            let dob = (!validator_1.default.isEmpty(coach.dob)) ? true : false;
            let postCode = (!validator_1.default.isEmpty(coach.postcode) && validator_1.default.isPostalCode(coach.postcode, 'GB')) ? true : false;
            let address1 = (!validator_1.default.isEmpty(coach.address1) && validator_1.default.matches(coach.address1, /^[a-z0-9 ',\.]+$/i)) ? true : false;
            let address2 = (validator_1.default.isEmpty(coach.address2) || validator_1.default.matches(coach.address2, /^[a-z0-9 ',\.]+$/i)) ? true : false;
            let town = (!validator_1.default.isEmpty(coach.town) && validator_1.default.matches(coach.town, /^[a-z '\!]+$/i)) ? true : false;
            let county = (!validator_1.default.isEmpty(coach.county) && validator_1.default.matches(coach.county, /^[a-z \.]+$/i)) ? true : false;
            let qualifications = (!validator_1.default.isEmpty(coach.qualifications) && validator_1.default.isAscii(coach.qualifications)) ? true : false;
            let yearsCoaching = (!validator_1.default.isEmpty(coach.yearsCoaching) && validator_1.default.isNumeric(coach.yearsCoaching)) ? true : false;
            let sport = (!validator_1.default.isEmpty(coach.sport) && sports.includes(coach.sport)) ? true : false;
            let expertise = (!validator_1.default.isEmpty(coach.expertise) && validator_1.default.isAscii(coach.expertise)) ? true : false;
            // We're keeping these in here until the end of the sprint for debug purposes
            // console.log(firstName)
            // console.log(lastName)
            // console.log(email)
            // console.log(phone)
            // console.log(dob)
            // console.log(postCode)
            // console.log(address1)
            // console.log(address2)
            // console.log(town)
            // console.log(county)
            // console.log(qualifications)
            // console.log(yearsCoaching)
            // console.log(sport)
            // console.log(expertise)
            return firstName && lastName && email && phone && dob && postCode && address1 && address2 && town && county && qualifications && yearsCoaching && sport && expertise;
        }
        catch (error) {
            return (_a = (error)) !== null && _a !== void 0 ? _a : false;
        }
    });
}
exports.default = coachValidator;
