import validator = require ('validator') 

function coachValidator(coach) {

  let valid = false

  let firstName = (!validator.isEmpty(coach.firstName) && validator.isAlpha(coach.firstName)) ? true : false
  
  let lastName = (!validator.isEmpty(coach.lastName) && validator.isAlpha(coach.lastName)) ? true : false
  
  let email = validator.isEmail(coach.email) ? true : false

  let phone = validator.isNumeric(coach.phone) ? true : false
 
  let postCode = validator.isPostalCode(coach.postCode, 'GB') ? true : false

  return firstName && lastName && email && phone && postCode
}


export default coachValidator