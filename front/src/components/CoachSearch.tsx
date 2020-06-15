import * as React from 'react'
import {LocationFieldProps, LocationField} from './LocationField'
import {PostCodeSearch, PostCodeSearchState, PostCodeSearchProperties} from './PostCodeSearch'
import {Location} from '../../../back/src/interfaces/Location'
import {Submit} from './Submit'


export interface CoachSearchProps {
    
}
 
export interface CoachSearchState {
    location: Location,
    postcode: string
}
 
class CoachSearch extends React.Component<CoachSearchProps, CoachSearchState> {
    constructor(props: CoachSearchProps) {
        super(props);
        this.state = { 
            location: {
                longitude: 0,
                latitude: 0
            },
            postcode: ''
        };
    }

    updateLocation = (newLoc: Location) => {this.setState({location: newLoc})}

    updatePostcode = (newPS: string) => {
        this.setState({postcode: newPS})
    }

    sendResults = async (e : any) => {
        e.preventDefault()
        let response = await fetch('http://localhost:3000/coach/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        let data = await response.json()
        
        if (data.status === 'success') {
            localStorage.setItem('coachRedToken', data.data.token)
            window.location.href = "/coachAvailibility"

        } else {
            alert('no chance')
        }
    }

    render() { 
        return ( 
            <div className='root'>
                <LocationField updateParent={this.updateLocation} fieldData={null}/>
                <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} isRequired={false}/>
                <Submit sendResults={this.sendResults} buttonName="Search" />
            </div>
         );
    }
}
 
export default CoachSearch;