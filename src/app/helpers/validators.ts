import validator from "validator"
import { CoachInterface } from "../../interfaces/CoachInterface"

function coachValidator(coach: CoachInterface) {

  let firstName = (!validator.isEmpty(coach.firstName) && validator.isAlpha(coach.firstName)) ? true : false
  
  let lastName = (!validator.isEmpty(coach.lastName) && validator.isAlpha(coach.lastName)) ? true : false
  
  let email = (!validator.isEmpty(coach.email) && validator.isEmail(coach.email)) ? true : false

  let phone = (!validator.isEmpty(coach.phone) && validator.matches(coach.phone, /^[0-9 +]+$/i)) ? true : false

  let dob = (!validator.isEmpty(coach.dob)) ? true : false
 
  let postCode = (!validator.isEmpty(coach.postcode) && validator.isPostalCode(coach.postcode, 'GB')) ? true : false

  let address1 = (!validator.isEmpty(coach.address1) && validator.matches(coach.address1, /^[a-z0-9 ]+$/i)) ? true : false

  let address2 = (validator.isEmpty(coach.address2) || validator.matches(coach.address2, /^[a-z0-9 ]+$/i)) ? true : false

  let town = (!validator.isEmpty(coach.town) && validator.matches(coach.town, /^[a-z ]+$/i)) ? true : false

  let county = (!validator.isEmpty(coach.county) && validator.matches(coach.county, /^[a-z ]+$/i)) ? true : false

  let qualifications = (!validator.isEmpty(coach.qualifications) && validator.matches(coach.qualifications, /^[a-z0-9 ]+$/i)) ? true : false

  let yearsCoaching = (!validator.isEmpty(coach.yearsCoaching) && validator.isNumeric(coach.yearsCoaching)) ? true : false

  let sport = (!validator.isEmpty(coach.sport) && validator.isAlpha(coach.sport)) ? true : false

  let expertise = (!validator.isEmpty(coach.expertise) && validator.matches(coach.expertise, /^[a-z0-9 ]+$/i)) ? true : false

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
}


export default coachValidator