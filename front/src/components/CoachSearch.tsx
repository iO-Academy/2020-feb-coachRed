import * as React from 'react'
import {LocationFieldProps, LocationField} from './LocationField'
import {PostCodeSearch, PostCodeSearchState, PostCodeSearchProperties} from './PostCodeSearch'
import {Location} from '../../../back/src/interfaces/Location'
import {Submit} from './Submit'
import {Dropdown} from './SportDropdown'


export interface CoachSearchProps {
    
}
 
export interface CoachSearchState {
    location: Location | null
    postcode: string | null
    sport: string | null
}
 
class CoachSearch extends React.Component<CoachSearchProps, CoachSearchState> {
    constructor(props: CoachSearchProps) {
        super(props);
        this.state = { 
            location: null,
            postcode: null,
            sport: 'Rugby'
        };
    }

    updateLocation = (newLoc: Location) => {this.setState({location: newLoc})}

    updatePostcode = (newPS: string) => {
        this.setState({postcode: newPS})
    }

    updateSport = (newSport: string) => {this.setState({sport: newSport})}

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
                <div>
                    <h1>Welcome to Coach Red!</h1>
                    <p>We help athletes and coaches to connect</p>
                    <p>Are you an athlete? Search for coaches in your area now!</p>
                </div>
                <Dropdown label='Sport' fieldName={'sport'} updateParent={this.updateSport}/>
                <LocationField updateParent={this.updateLocation} fieldData={this.state.location}/>
                <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} isRequired={false}/>
                <Submit sendResults={this.sendResults} buttonName="Search" />
                <div>
                    <div>
                        <p>"Wow! What a Great Company! I found the best coach!"</p>
                        <p>     - John Doe, 2020</p>
                    </div>
                    <div>
                        <p>"Wow! What a Great Company! I've never made so much money before!</p>
                        <p>     - Abraham Lincoln, 2020</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CoachSearch;