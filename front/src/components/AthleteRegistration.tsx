import React, { useState, useEffect } from 'react'

import { TextInput } from "./TextInput"
import { Dropdown } from "./Dropdown"
import { TextArea } from "./TextArea"
import { SetPassword } from "./SetPassword"
import { Submit } from "./Submit"

export const AthleteRegistration = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [yearsExperience, setYearsExperience] = useState(0)
    const [sport, setSport] = useState('')
    const [sportList, setSportList] = useState(['Select a Sport'])
    const [lookingFor, setLookingFor] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        async function populateSports() {
            let sportsRequest: any = await fetch('http://localhost:3000/sport',{
                method: 'GET'
            })
            sportsRequest = await sportsRequest.json()
            const sports = sportsRequest.data.sports.map((sport: any)=>{return sport.name})
            setSport(sports[0])
            setSportList(sports)
        }
        populateSports()
    },[])  

    function getFormData() {
        return ({
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            dateOfBirth: dateOfBirth,
            yearsExperience: yearsExperience,
            sport: sport,
            lookingFor: lookingFor,
            password: password
        })
    }

    async function sendResults(e: any) {
        try {
            e.preventDefault(); 
            // Processing to insert date of birth in the right format
            let formData = getFormData()

            formData.dateOfBirth = (new Date(formData.dateOfBirth)).toISOString().split('T')[0]
            const registerResponse = await (await fetch('http://localhost:3000/athlete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })).json()
            if (registerResponse.status === 200) {
                window.location.href="/coachLogin"
            } else {
                console.log('Oops! It looks like something went wrong!')
            }
        } catch(err) {
            console.log('Oops! It looks like something went wrong!')
        }
    }
    

    return (
        <div className="root">
            <h1 className="pageHeading">Welcome to Coach Red!</h1>
            <p>To register as an athlete, there are a few things we'll need from you:</p>

            <TextInput label="First Name" fieldName="firstName" fieldData={firstName}
                inputType="text" isRequired={true} updateParent={setFirstName} />
                <TextInput label="Last Name" fieldName="lastName" fieldData={lastName}
                inputType="text" isRequired={true} updateParent={setLastName} />
                <TextInput label="Email Address" fieldName="email" fieldData={email}
                inputType="text" isRequired={true} updateParent={setEmail} />
                <TextInput label="Phone Number" fieldName="phone" fieldData={phone}
                inputType="tel" isRequired={true} updateParent={setPhone} />
                <TextInput label="Date of Birth" fieldName="dateOfBirth" fieldData={dateOfBirth}
                inputType="date" isRequired={true} updateParent={setDateOfBirth} />
                <Dropdown label="What sport do you play?" fieldName="sport" updateParent = {setSport} 
                options={sportList}/>
                <TextInput label="How long have you been playing?" fieldName="yearsTraining" 
                fieldData={yearsExperience} inputType="number"  isRequired={true} updateParent={setYearsExperience} />
                <TextArea label="What are you looking for in a coach?" fieldName="lookingFor"
                fieldData={lookingFor} updateParent={setLookingFor} />
                <SetPassword updateParent={setPassword} />
                <Submit sendResults={sendResults} buttonName="Register!" />
        </div>
    )
}