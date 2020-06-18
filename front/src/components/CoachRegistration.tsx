import * as React from "react"

import { Location } from '../interfaces/Location'

import { LocationField } from "./LocationField"
import { SportDropdown } from "./SportDropdown"
import { TextInput } from "./TextInput"
import { TextArea } from "./TextArea"
import { PostCodeSearch } from "./PostCodeSearch"
import { Submit } from "./Submit"
import { SetPassword } from "./SetPassword"

export interface CoachRegistrationState {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dob: string,
    location: Location | null,
    postcode: string,
    address1: string,
    address2: string,
    town: string,
    county: string,
    qualifications: string,
    yearsCoaching: number,
    sport: string,
    expertise: string,
    password: string
}

export class CoachRegistration extends React.Component<{}, CoachRegistrationState> {

    constructor(props: any) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dob: "",
            location: null,
            postcode: "",
            address1: "",
            address2: "",
            town: "",
            county: "",
            qualifications: "",
            yearsCoaching: 0,
            sport: "Rugby",
            expertise: "",
            password: ""
        }
    }

    updateFirstName = (newFName: string) => {
        this.setState({ firstName: newFName })
    }

    updateLastName = (newLName: string) => {
        this.setState({ lastName: newLName })
    }

    updateEmail = (newEmail: string) => {
        this.setState({ email: newEmail })
    }

    updatePhone = (newPhone: string) => {
        this.setState({ phone: newPhone })
    }

    updateDateOfBirth = (newDOB: string) => {
        this.setState({ dob: newDOB })
    }

    updateLocation = async (newLoc: Location) => {
        this.setState({ location: newLoc })
        if (this.state.location) {
            let response = await fetch(`https://eu1.locationiq.com/v1/reverse.php?key=9a3db48671cb39&lat=${this.state.location.latitude}&lon=${this.state.location.longitude}&format=json`)
            let data = await response.json()


            this.setState({ postcode: data.address.postcode })

            this.setState({ town: data.address.suburb })
            this.setState({ county: data.address.county })
            this.setState({ address2: data.address.road })
        }
    }
    updateAddress1 = (newAddr1: string) => {
        this.setState({ address1: newAddr1 })
    }

    updateAddress2 = (newAddr2: string) => {
        this.setState({ address2: newAddr2 })
    }

    updateTown = (newTown: string) => {
        this.setState({ town: newTown })
    }

    updateCounty = (newCounty: string) => {
        this.setState({ county: newCounty })
    }

    updatePostcode = (newPS: string) => {
        this.setState({ postcode: newPS })
        
    }
    updateQualifications = (newQuals: string) => {
        this.setState({ qualifications: newQuals })
    }

    updateYearsTraining = (newYT: number) => {
        this.setState({ yearsCoaching: newYT })
    }

    updateSport = (newSport: string) => {
        this.setState({ sport: newSport })
    }

    updateAreaOfExpertise = (newAOE: string) => {
        this.setState({ expertise: newAOE })
    }

    updatePassword = (newPass: string) => {
        this.setState({ password: newPass })
    }

    sendResults = async (e: any) => {
        e.preventDefault();
        await fetch('http://localhost:3000/coach', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        window.location.href = "/coachLogin"
    }

    render() {
        return (
            <div className="root registration">
                <h1 className="pageHeading">Welcome to Coach Red!</h1>
                <p>To register as a coach, there are a few details we need from you</p>
                <div className='form'>

                    <TextInput label="First Name" fieldName="firstName" fieldData={this.state.firstName}
                        inputType="text" isRequired={true} updateParent={this.updateFirstName} />
                    
                    <TextInput label="Last Name" fieldName="lastName" fieldData={this.state.lastName}
                        inputType="text" isRequired={true} updateParent={this.updateLastName} />
                    
                    <TextInput label="Email Address" fieldName="email" fieldData={this.state.email}
                        inputType="text" isRequired={true} updateParent={this.updateEmail} />
                    
                    <TextInput label="Phone Number" fieldName="phone" fieldData={this.state.phone}
                        inputType="tel" isRequired={true} updateParent={this.updatePhone} />
                    
                    <TextInput label="Date of Birth" fieldName="dateOfBirth" fieldData={this.state.dob}
                        inputType="date" isRequired={true} updateParent={this.updateDateOfBirth} />
                    
                    <LocationField updateParent={this.updateLocation} fieldData={this.state.location} />
                    
                    <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} 
                        isRequired={true} postcode={this.state.postcode}/>
                    
                    <TextInput label="Address Line 1:" fieldName="addressOne" fieldData={this.state.address1}
                        inputType="text" isRequired={true} updateParent={this.updateAddress1} />
                    
                    <TextInput label="Address Line 2:" fieldName="addressTwo" fieldData={this.state.address2}
                        inputType="text" isRequired={false} updateParent={this.updateAddress2} />
                    
                    <TextInput label="City" fieldName="town" fieldData={this.state.town}
                        inputType="text" isRequired={true} updateParent={this.updateTown} />
                    
                    <TextInput label="County" fieldName="county" fieldData={this.state.county}
                        inputType="text" isRequired={true} updateParent={this.updateCounty} />
                    
                    <TextArea label="Tell us about you and your qualifications" fieldName="qualifications"
                        fieldData={this.state.qualifications} updateParent={this.updateQualifications} />
                    
                    <TextInput label="How long have you been coaching?" fieldName="yearsTraining" 
                    fieldData={this.state.yearsCoaching} inputType="number"  isRequired={true} 
                        updateParent={this.updateYearsTraining} />
                    
                    <SportDropdown label="What sport will you be coaching?" fieldName="sport"
                        updateParent={this.updateSport} />
                    
                    <TextInput label="What's your area of expertise?" fieldName="areaOfExpertise" 
                    fieldData={this.state.expertise} inputType="text" isRequired={true} 
                        updateParent={this.updateAreaOfExpertise} />
                    
                    <SetPassword updateParent={this.updatePassword} />
                    <div className="submit">
                        <Submit sendResults={this.sendResults} buttonName="Register!" />
                    </div>
                </div>
            </div>
        )
    }
}
