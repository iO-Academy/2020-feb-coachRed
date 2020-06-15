import mockingoose from 'mockingoose'

import { validateAthlete } from '../../helpers/validateAthlete'
import sport from '../../models/sportModel'

const testAthlete = {
    firstName: 'Test',
    lastName: 'Testerson',
    phone: '01234567890',
    lookingFor: 'This test to work',
    email: 'test@test.co.uk',
    sport: 'Football',
    yearsExperience: 0,
    dateOfBirth: '2012-01-01T00:00:00.000+00:00',
    password: 'password',
    salt: 'salty',
    token: '0'
}

let testSportList = [{name: 'Football'}, {name: 'Cricket'}]
mockingoose(sport).toReturn(testSportList, 'find')

test('correctly-formatted athlete validates', () => {
    validateAthlete(testAthlete).then(validates => {
        expect(validates).toBe(true)
    }).catch(error => {
        console.log(error)
        fail('this test has failed')
    })
})

const wrongEmailAthlete = {
    firstName: 'Test',
    lastName: 'Testerson',
    phone: '01234567890',
    lookingFor: 'This test to work',
    email: 'notAnEmail',
    sport: 'Football',
    yearsExperience: 0,
    dateOfBirth: '2012-01-01T00:00:00.000+00:00',
    password: 'password',
    salt: 'salty',
    token: '0'
}

test('incorrectly-formatted email causes validation to fail', () => {
    validateAthlete(wrongEmailAthlete).then(validates => {
        expect(validates).toBe(false)
    }).catch(error => {
        console.log(error)
        fail('this test has failed')
    })
})

const wrongSportAthlete = {
    firstName: 'Test',
    lastName: 'Testerson',
    phone: '01234567890',
    lookingFor: 'This test to work',
    email: 'test@test.co.uk',
    sport: 'Rugby',
    yearsExperience: 0,
    dateOfBirth: '2012-01-01T00:00:00.000+00:00',
    password: 'password',
    salt: 'salty',
    token: '0'
}

test('sport not in DB causes validation to fail', () => {
    validateAthlete(wrongSportAthlete).then(validates => {
        expect(validates).toBe(false)
    }).catch(error => {
        console.log(error)
        fail('this test has failed')
    })
})

const wrongDateOfBirthAthlete = {
    firstName: 'Test',
    lastName: 'Testerson',
    phone: '01234567890',
    lookingFor: 'This test to work',
    email: 'test@test.co.uk',
    sport: 'Football',
    yearsExperience: 0,
    dateOfBirth: '01/01/2012',
    password: 'password',
    salt: 'salty',
    token: '0'
}

test('incorrectly-formatted date of birth causes validation to fail', () => {
    validateAthlete(wrongDateOfBirthAthlete).then(validates => {
        expect(validates).toBe(false)
    }).catch(error => {
        console.log(error)
        fail('this test has failed')
    })
})

const wrongPhoneAthlete = {
    firstName: 'Test',
    lastName: 'Testerson',
    phone: 'Uh, I dunno',
    lookingFor: 'This test to work',
    email: 'test@test.co.uk',
    sport: 'Football',
    yearsExperience: 0,
    dateOfBirth: '2012-01-01T00:00:00.000+00:00',
    password: 'password',
    salt: 'salty',
    token: '0'
}

test('non-numeric number of years causes validation to fail', () => {
    validateAthlete(wrongPhoneAthlete).then(validates => {
        expect(validates).toBe(false)
    }).catch(error => {
        console.log(error)
        fail('this test has failed')
    })
})