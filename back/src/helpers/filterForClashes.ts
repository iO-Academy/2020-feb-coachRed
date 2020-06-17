import { SlotInterface } from "../interfaces/SlotInterface";

export function filterForClashes(timeSlots: Array<SlotInterface>, dateToCheck: Date) {
    const desiredDate = (new Date(dateToCheck)).getTime()
    return timeSlots.filter((timeSlot) => {
        let timeAvailable = true;
        const bookedSlots = timeSlots.filter(timeSlot => {
            let slotIsBooked = false
            timeSlot.bookedBy.forEach((booking) => {
                let startDate = (new Date(booking.startDate)).getTime();
                let endDate = (new Date(booking.endDate)).getTime();
                slotIsBooked = (startDate <= desiredDate && desiredDate <= endDate) ? true : false;
            });
            return slotIsBooked;
        });
        bookedSlots.forEach(bookedSlot => {
            if (!(bookedSlot === timeSlot)) {
                const bookedSlotStarts = bookedSlot.startTime.replace(':','.')
                const bookedSlotEnds = bookedSlot.endTime.replace(':','.')
                const timeSlotStarts = timeSlot.startTime.replace(':','.')
                const timeSlotEnds = timeSlot.startTime.replace(':','.')
                if ((timeSlotStarts <= bookedSlotStarts && bookedSlotStarts < timeSlotEnds)
                || (bookedSlotStarts <= timeSlotStarts && timeSlotStarts < bookedSlotEnds)) {
                    timeAvailable = false;
                }
            }
        });
        return timeAvailable;
    });
}