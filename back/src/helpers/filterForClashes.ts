import { SlotInterface } from "../interfaces/SlotInterface";

export function filterForClashes(timeSlots: Array<SlotInterface>, dateToCheck: Date) {
    const desiredDate = (new Date(dateToCheck)).getTime()
    return timeSlots.filter((timeSlot) => {
        let timeAvailable = true;
        const bookedSlots = timeSlots.filter(timeSlot => {
            let slotIsBooked = false
            timeSlot.bookedBy.forEach((timeSlot) => {
                let startDate = (new Date(timeSlot.startDate)).getTime();
                let endDate = (new Date(timeSlot.endDate)).getTime();
                return (startDate < desiredDate && desiredDate < endDate) ? true : false;
            })
        });
        bookedSlots.forEach(bookedSlot => {
            if (bookedSlot.startTime.replace(':','.') < timeSlot.endTime.replace(':','.')
             || timeSlot.startTime.replace(':','/') < bookedSlot.endTime.replace(':','.')) {
                 timeAvailable = false;
             }
        });
        return timeAvailable;
    });
}