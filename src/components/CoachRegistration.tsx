import * as React from "react"

import { Location } from '../interfaces/Location'

import { LocationField } from "./LocationField"
import { Dropdown } from "./Dropdown"
import { TextInput } from "./TextInput"
import { PostCodeSearch } from "./PostCodeSearch"
import { Submit } from "./Submit"

export interface CoachRegistrationState {
    name: string | null,
    email: string | null,
    phone: string | null,
    dateOfBirth: string | null,
    location: Location | null,
    postcode: string | null,
    address: string | null,
    city: string | null,
    qualifications: string | null,
    yearsTeaching: number | null,
    sport: string | null,
    areaOfExpertise: string | null,
}

export class CoachRegistration extends React.Component<{},CoachRegistrationState> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            name: null,
            email: null,
            phone: null,
            dateOfBirth: null,
            location: null,
            postcode: null,
            address: null,
            city: null,
            qualifications: null,
            yearsTeaching: null,
            sport: null,
            areaOfExpertise: null,
        }
        this.updateName=this.updateName.bind(this)
        this.updateEmail=this.updateEmail.bind(this)
        this.updatePhone=this.updatePhone.bind(this)
        this.updateDateOfBirth=this.updateDateOfBirth.bind(this)
        this.updateLocation=this.updateLocation.bind(this)
        this.updatePostcode=this.updatePostcode.bind(this)
        this.updateAddress=this.updateAddress.bind(this)
        this.updateCity=this.updateCity.bind(this)
        this.updateQualifications=this.updateQualifications.bind(this)
        this.updateYearsTraining=this.updateYearsTraining.bind(this)
        this.updateSport=this.updateSport.bind(this)
        this.updateAreaOfExpertise=this.updateAreaOfExpertise.bind(this)
        this.sendResults=this.sendResults.bind(this)
    }

    updateName(newName: string) {
        this.setState({
            name: newName
        })
    }

    updateEmail(newEmail: string) {
        this.setState({
            email: newEmail
        })
    }

    updatePhone(newPhone: string) {
        this.setState({
            phone: newPhone
        })
    }

    updateDateOfBirth(newDOB: string) {
        this.setState({
            dateOfBirth: newDOB
        })
    }

    updateLocation(newLoc: Location) {
        this.setState({
            location: newLoc
        })
    }

    updateAddress(newAddr: string) {
        this.setState({
            address: newAddr
        })
    }

    updateCity(newCity: string) {
        this.setState({
            city: newCity
        })
    }

    updatePostcode(newPS: string) {
        this.setState({
            postcode: newPS
        })
    }

    updateQualifications(newQuals: string) {
        this.setState({
            qualifications: newQuals
        })
    }

    updateYearsTraining(newYT: number) {
        this.setState({
            yearsTeaching: newYT
        })
    }

    updateSport(newSport: string) {
        this.setState({
            sport: newSport
        })
    }

    updateAreaOfExpertise(newAOE: string) {
        this.setState({
            areaOfExpertise: newAOE
        })
    }

    sendResults(e: any) {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <div className="root">
                <TextInput label="Your Name" fieldName="name" fieldData={this.state.name}
                inputType="text" updateParent={this.updateName} />
                <TextInput label="Email Address" fieldName="email" fieldData={this.state.email}
                inputType="text" updateParent={this.updateEmail} />
                <TextInput label="Phone Number" fieldName="phone" fieldData={this.state.phone}
                inputType="tel" updateParent={this.updatePhone} />
                <TextInput label="Date of Birth" fieldName="dateOfBirth" fieldData={this.state.dateOfBirth}
                inputType="date" updateParent={this.updateDateOfBirth} />
                <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} />
                <TextInput label="Address" fieldName="address" fieldData={this.state.address}
                inputType="text" updateParent={this.updateAddress} />
                <TextInput label="City" fieldName="city" fieldData={this.state.city}
                inputType="text" updateParent={this.updateCity} />
                <TextInput label="How long have you been coaching?" fieldName="yearsTraining" 
                fieldData={this.state.name} inputType="number" updateParent={this.updateYearsTraining} />
                <Dropdown label="What sport will you be coaching?" options={["Rugby, Netball"]} fieldName="sport"
                updateParent={this.updateSport}/>
                <TextInput label="What's your area of expertise?" fieldName="areaOfExpertise" 
                fieldData={this.state.areaOfExpertise} inputType="text" updateParent={this.updateAreaOfExpertise} />
                <Submit sendResults={this.sendResults} buttonName="Register!" />
            </div>
        )
    }
}
