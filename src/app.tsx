import * as React from "react"

import { Location } from './interfaces/Location'

import { LocationField } from "./components/LocationField"
import { Dropdown } from "./components/Dropdown"
import { TextInput } from "./components/TextInput"
import { NumberPicker } from "./components/NumberPicker"
import { PostCodeSearch } from "./components/PostCodeSearch"
import { Submit } from "./components/Submit"

export interface AppState {
    location: Location | null
    email: string | null
    sport: string | null
    postcode: string | null
}

export class App extends React.Component<{},AppState> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            email: null,
            location: null,
            sport: null,
            postcode: null
        }
        this.updateLocation = this.updateLocation.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateSport = this.updateSport.bind(this)
        this.updatePostcode = this.updatePostcode.bind(this)
        this.sendResults = this.sendResults.bind(this)
    }

    updateLocation(newLoc: Location) {
        this.setState({
            location: newLoc
        })
    }

    updateEmail(newEmail: string) {
        this.setState({
            email: newEmail
        })
    }

    updateSport(newSport: string) {
        this.setState({
            sport: newSport
        })
    }

    updatePostcode(newPS: string) {
        this.setState({
            postcode: newPS
        })
    }

    sendResults(e: any) {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <div className="root">
                <TextInput fieldName="email" label="Enter Email Address:" fieldData={this.state.email}
                updateParent={this.updateEmail}>
                </TextInput>
                <Dropdown options={["Rugby", "Netball"]} fieldName = "sport" 
                    label="Select the Sport you'll be coaching:"
                    updateParent = {this.updateSport}></Dropdown>
                <NumberPicker fieldName="yearsExperience" 
                    label="How many years have you been coaching?"></NumberPicker>
                <LocationField fieldData={this.state.location} updateParent={this.updateLocation}></LocationField>
                <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode}>
                </PostCodeSearch>
                <Submit sendResults={this.sendResults} buttonName="Register!"></Submit>
            </div>
        )
    }
}
