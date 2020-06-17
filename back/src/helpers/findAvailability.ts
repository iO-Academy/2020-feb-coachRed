import { SlotInterface } from "../interfaces/SlotInterface";
import { findSlotsByDate } from "./findSlotsByDate";
import { CoachInterface } from "../interfaces/CoachInterface";
import { filterForClashes } from './filterForClashes';

// Finds whether a given time slot is available in future instances, returning the maximum number of consecutive
// appointments that the booking can be reserved for. This function will assume that the slot is available on the
// initial date - to remove slots clashing with a booked slot on the initial date, use the filterForClashes method
// on the time slots for the initial date. The function should be passed the parent "Coach" object in addition to 
// the time slot object for the sake of reducing the number of database queries necessary.
export async function findAvailability(coach: CoachInterface, timeSlot: SlotInterface, initialDate: Date) {
    if (timeSlot.repeat === 'Once') {
        return 1;
    } else if (timeSlot.repeat === 'Weekly') {
        let i = 1;
        let stillAvailable = true;
        while (stillAvailable && i < 10) {
            // check the date one week into the future - 1000 milliseconds times 60 seconds times 60 minutes
            // times 24 hours times 7 days for the number of milliseconds in a week
            let dateToCheck = new Date(initialDate.getTime() + i*(1000*60*60*24*7));
            let slotsOnDate = await findSlotsByDate(coach, dateToCheck);
            stillAvailable = (filterForClashes(slotsOnDate, dateToCheck).includes(timeSlot));
            if (stillAvailable) {i++};
        }
        return i;
    } else if (timeSlot.repeat === 'Fortnightly') {
        let i = 1;
        let stillAvailable = true;
        while (stillAvailable && i < 10) {
            // check the date one week into the future - 1000 milliseconds times 60 seconds times 60 minutes
            // times 24 hours times 14 days for the number of milliseconds in a fortnight
            let dateToCheck = new Date(initialDate.getTime() + i*(1000*60*60*24*14));
            let slotsOnDate = await findSlotsByDate(coach, dateToCheck);
            stillAvailable = (filterForClashes(slotsOnDate, dateToCheck).includes(timeSlot));
            if (stillAvailable) {i++};
        }
        return i;
    } else {
        // Repeat type must be monthly
        let i = 1;
        let stillAvailable = true;
        while (stillAvailable && i < 10) {
            // some convoluted logic has to be done here in order to check when the slot will clash with another,
            // since we have logic in place to place a slot on the last day of the month under certain conditions
            let monthToCheck = initialDate.getMonth() + i;
            let yearToCheck = initialDate.getFullYear();
            if (monthToCheck > 11) {
                monthToCheck -= 12;
                yearToCheck += 1;
            }
            let lastDay = 31;
            if ([3,5,8,10].includes(monthToCheck)) {
                lastDay = 30;
            } else if (monthToCheck === 1) {
                const isLeapYear = (yearToCheck % 4) ? 0 : 1;
                const lastDay = 28 + isLeapYear;
            }
            let dayToCheck = Math.min(initialDate.getDate(), lastDay);
            let dateToCheck = new Date(yearToCheck, monthToCheck, dayToCheck);
            let slotsOnDate = await findSlotsByDate(coach, dateToCheck);
            stillAvailable = (filterForClashes(slotsOnDate, dateToCheck).includes(timeSlot));
            if (stillAvailable) {i++};
        }
        return i;
    }
}