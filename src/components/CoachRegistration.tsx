import * as React from "react"

import { Location } from '../interfaces/Location'

import { LocationField } from "./LocationField"
import { Dropdown } from "./Dropdown"
import { TextInput } from "./TextInput"
import { TextArea } from "./TextArea"
import { PostCodeSearch } from "./PostCodeSearch"
import { Submit } from "./Submit"
import { SetPassword } from "./SetPassword"

export interface CoachRegistrationState {
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    phone: string | null,
    dob: string | null,
    location: Location | null,
    postcode: string | null,
    address1: string | null,
    address2: string | null,
    town: string | null,
    county: string | null,
    qualifications: string | null,
    yearsCoaching: number | null,
    sport: string | null,
    expertise: string | null,
    password: string | null
}

export class CoachRegistration extends React.Component<{},CoachRegistrationState> {
    
    constructor(props: any) {
        super(props)
        
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            dob: null,
            location: null,
            postcode: null,
            address1: null,
            address2: null,
            town: null,
            county: null,
            qualifications: null,
            yearsCoaching: null,
            sport: "Rugby",
            expertise: null,
            password: null
        }
        this.updateFirstName=this.updateFirstName.bind(this)
        this.updateLastName=this.updateLastName.bind(this)
        this.updateEmail=this.updateEmail.bind(this)
        this.updatePhone=this.updatePhone.bind(this)
        this.updateDateOfBirth=this.updateDateOfBirth.bind(this)
        this.updateLocation=this.updateLocation.bind(this)
        this.updatePostcode=this.updatePostcode.bind(this)
        this.updateAddress1=this.updateAddress1.bind(this)
        this.updateAddress2=this.updateAddress2.bind(this)
        this.updateTown=this.updateTown.bind(this)
        this.updateCounty=this.updateCounty.bind(this)
        this.updateQualifications=this.updateQualifications.bind(this)
        this.updateYearsTraining=this.updateYearsTraining.bind(this)
        this.updateSport=this.updateSport.bind(this)
        this.updateAreaOfExpertise=this.updateAreaOfExpertise.bind(this)
        this.updatePassword=this.updatePassword.bind(this)
        this.sendResults=this.sendResults.bind(this)
    }

    updateFirstName(newFName: string) {this.setState({firstName: newFName})}
    updateLastName(newLName: string) {this.setState({lastName: newLName})}
    updateEmail(newEmail: string) {this.setState({email: newEmail})}
    updatePhone(newPhone: string) {this.setState({phone: newPhone})}
    updateDateOfBirth(newDOB: string) {this.setState({dob: newDOB})}
    updateLocation(newLoc: Location) {this.setState({location: newLoc})}
    updateAddress1(newAddr1: string) {this.setState({address1: newAddr1})}
    updateAddress2(newAddr2: string) {this.setState({address2: newAddr2})}
    updateTown(newTown: string) {this.setState({town: newTown})}
    updateCounty(newCounty: string) {this.setState({county: newCounty})}
    updatePostcode(newPS: string) {this.setState({postcode: newPS})}
    updateQualifications(newQuals: string) {this.setState({qualifications: newQuals})}
    updateYearsTraining(newYT: number) {this.setState({yearsCoaching: newYT})}
    updateSport(newSport: string) {this.setState({sport: newSport})}
    updateAreaOfExpertise(newAOE: string) {this.setState({expertise: newAOE})}
    updatePassword(newPass: string) {this.setState({password: newPass})}
    async sendResults (e: any) {
        e.preventDefault(); 
        let response = await fetch('http://localhost:3000/coach', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        let data = await response.json()
        console.log(data)
    }

    render() {
        return(
            <div className="root">
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
                <LocationField updateParent={this.updateLocation} fieldData={this.state.location}/>
                <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} 
                isRequired={true} />
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
                <Dropdown label="What sport will you be coaching?" fieldName="sport"
                updateParent={this.updateSport}/>
                <TextInput label="What's your area of expertise?" fieldName="areaOfExpertise" 
                fieldData={this.state.expertise} inputType="text" isRequired={true} 
                updateParent={this.updateAreaOfExpertise} />
                <SetPassword updateParent={this.updatePassword}/>
                <Submit sendResults={this.sendResults} buttonName="Register!" />
            </div>
        )
    }
}
