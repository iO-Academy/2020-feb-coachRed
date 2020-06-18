import { SlotInterface } from "../interfaces/SlotInterface"

export function filterForClashes(timeSlots: Array<SlotInterface>, dateToCheck: Date) {
    const desiredDate = (new Date(dateToCheck)).getTime()
    return timeSlots.filter((timeSlot) => {
        let timeAvailable = true
        const bookedSlots = timeSlots.filter(timeSlot => {
            let slotIsBooked = false
            timeSlot.bookedBy.forEach((booking) => {
                const timeStampToDays = 1000*60*60*24;
                // Timestamp for startDate and endDate set so that they cover a whole day
                let startDate = timeStampToDays*Math.floor((new Date(booking.startDate)).getTime()/timeStampToDays)
                let endDate = timeStampToDays*Math.floor((new Date(booking.startDate)).getTime()/timeStampToDays) 
                                + (timeStampToDays - 1)
                slotIsBooked = (startDate <= desiredDate && desiredDate <= endDate) ? true : false
            })
            return slotIsBooked
        })
        bookedSlots.forEach(bookedSlot => {
            if (!(bookedSlot === timeSlot)) {
                const bookedSlotStarts = bookedSlot.startTime.replace(':','.')
                const bookedSlotEnds = bookedSlot.endTime.replace(':','.')
                const timeSlotStarts = timeSlot.startTime.replace(':','.')
                const timeSlotEnds = timeSlot.endTime.replace(':','.')
                if ((timeSlotStarts <= bookedSlotStarts && bookedSlotStarts < timeSlotEnds)
                || (bookedSlotStarts <= timeSlotStarts && timeSlotStarts < bookedSlotEnds)) {
                    timeAvailable = false;
                }
            }
        })
        return timeAvailable
    })
}