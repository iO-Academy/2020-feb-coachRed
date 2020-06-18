import { SlotInterface } from "../interfaces/SlotInterface";
import { CoachInterface } from "../interfaces/CoachInterface";

export async function findSlotsByDate(coach: CoachInterface, desiredDate: Date) {
    let slotsToReturn: Array<SlotInterface> = [];
    coach.timeSlots.forEach((slot: SlotInterface) => {
        const slotDate = new Date(Date.parse(slot.date));
        if (slotDate.toDateString() == desiredDate.toDateString()) {
            slotsToReturn.push(slot);
        } else if (desiredDate.getTime() > slotDate.getTime()){
            if (slot.repeat === 'Weekly' && slotDate.getDay() === desiredDate.getDay()) {
                slotsToReturn.push(slot);
            } else if (slot.repeat === 'Fortnightly' && slotDate.getDay() === desiredDate.getDay()) {
                const weeksBetween = (dayOne: number, dayTwo: number) => {
                    return (dayTwo - dayOne)/(60*60*24*7*1000);
                }
                if (!(weeksBetween(desiredDate.getTime(), slotDate.getTime()) &1)) {
                    slotsToReturn.push(slot);
                }
            } else if (slot.repeat === 'Monthly') {
                const currentMonth = desiredDate.getMonth();
                let lastDay = 31;
                if ([3,5,8,10].includes(currentMonth)) {
                    lastDay = 30;
                } else if (currentMonth === 1) {
                    const isLeapYear = (desiredDate.getFullYear() % 4) ? 0 : 1;
                    console.log(isLeapYear)
                    lastDay = 28 + isLeapYear;
                }
                if (slotDate.getDate() === desiredDate.getDate() 
                || desiredDate.getDate() === lastDay && slotDate.getDate() > lastDay) {
                    slotsToReturn.push(slot);
                }
            }
        }
    });
    return slotsToReturn.sort((a: SlotInterface, b: SlotInterface): number => {
        return parseFloat(a.startTime.replace(':','.')) - parseFloat(b.startTime.replace(':','.'));
    });
}