import * as React from 'react'
import {LocationFieldProps, LocationField} from './LocationField'
import PostCodeSearch from './PostCodeSearch'

export interface CoachSearchProps {
    
}
 
export interface CoachSearchState {
    longitude: string,
    latitude: string
}
 
class CoachSearch extends React.Component<CoachSearchProps, CoachSearchState> {
    constructor(props: CoachSearchProps) {
        super(props);
        this.state = { 
            longitude: '',
            latitude: ''
        };
    }

    updateLocation = (newLoc: Location) => {this.setState({location: newLoc})}

    updatePostcode(newPS: string) {this.setState({postcode: newPS})}

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
                <LocationField/>
                <PostCodeSearch/>
                <Submit sendResults={this.sendResults} buttonName="Login" />
            </div>
         );
    }
}
 
export default CoachLogin;