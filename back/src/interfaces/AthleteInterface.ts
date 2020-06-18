export interface AthleteInterface {
    email: string,

    firstName: string,
    lastName: string,

    phone: string,
    dateOfBirth: string,

    yearsExperience: number | null,
    sport: string,
    lookingFor: string,

    token: string | null,
    salt: string | null,
    password: string
}