import validator from "validator"
import { CoachInterface } from "../../interfaces/CoachInterface"
import Sport from "../models/sportModel"

async function coachValidator(coach: CoachInterface) {
  try{
    const sports = (await Sport.find()).map((sport: any)=>(sport.name))

    let firstName = (!validator.isEmpty(coach.firstName) && validator.isAlpha(coach.firstName)) ? true : false
    
    let lastName = (!validator.isEmpty(coach.lastName) && validator.isAlpha(coach.lastName)) ? true : false
    
    let email = (!validator.isEmpty(coach.email) && validator.isEmail(coach.email)) ? true : false

    let phone = (!validator.isEmpty(coach.phone) && validator.matches(coach.phone, /^[0-9 +]+$/i)) ? true : false

    let dob = (!validator.isEmpty(coach.dob)) ? true : false
  
    let postCode = (!validator.isEmpty(coach.postcode) && validator.isPostalCode(coach.postcode, 'GB')) ? true : false

    let address1 = (!validator.isEmpty(coach.address1) && validator.matches(coach.address1, /^[a-z0-9 ',\.]+$/i)) ? true : false

    let address2 = (validator.isEmpty(coach.address2) || validator.matches(coach.address2, /^[a-z0-9 ',\.]+$/i)) ? true : false

    let town = (!validator.isEmpty(coach.town) && validator.matches(coach.town, /^[a-z '\!]+$/i)) ? true : false

    let county = (!validator.isEmpty(coach.county) && validator.matches(coach.county, /^[a-z \.]+$/i)) ? true : false

    let qualifications = (!validator.isEmpty(coach.qualifications) && validator.isAscii(coach.qualifications)) ? true : false

    let yearsCoaching = (!validator.isEmpty(coach.yearsCoaching) && validator.isNumeric(coach.yearsCoaching)) ? true : false
    
    let sport = (!validator.isEmpty(coach.sport) && sports.includes(coach.sport)) ? true : false

    let expertise = (!validator.isEmpty(coach.expertise) && validator.isAscii(coach.expertise)) ? true : false

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

    return firstName && lastName && email && phone && dob && postCode && address1 && address2 && town && county && qualifications && yearsCoaching && sport && expertise
  } catch(error) {
    return (error) ?? false;
  }
}


export default coachValidator