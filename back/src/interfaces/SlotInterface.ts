export interface SlotInterface {
    ageRange: string,
    hourlyRate: number,
    date: string,
    startTime: string,
    endTime: string,
    repeat: string,
    bookedBy: Array<any>,
    availableFor: number | null
}