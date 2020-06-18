import validator from "validator"

function slotValidator (slot: any) {
    try {
      let startTime = (!validator.isEmpty(slot.startTime)) ? true : false
  
      let endTime = (!validator.isEmpty(slot.endTime)) ? true : false
  
      let hourlyRate = (!validator.isEmpty(slot.hourlyRate)) ? true : false
  
      let ageRange = (!validator.isEmpty(slot.ageRange)) ? true : false
  
      let date = (!validator.isEmpty(slot.date)) ? true : false
  
      let repeat = (!validator.isEmpty(slot.repeat)) ? true : false
  
      return startTime && endTime && hourlyRate && ageRange && date && repeat

    } catch(err) {
      return err ?? false;
    }
}


export default slotValidator