import * as React from 'react'
import {LocationFieldProps, LocationField} from './LocationField'
import {PostCodeSearch, PostCodeSearchState, PostCodeSearchProperties} from './PostCodeSearch'
import {Location} from '../../../back/src/interfaces/Location'
import {Submit} from './Submit'
import {SportDropdown} from './SportDropdown'
import CoachCardList from './CoachCardList'
import WelcomeMessage from './WelcomeMessage'


export interface CoachSearchProps {
    
}
 
export interface CoachSearchState {
    location: Location | null
    postcode: string
    sport: string | null
    searchResults: Array<Object> |null
}
 
class CoachSearch extends React.Component<CoachSearchProps, CoachSearchState> {
    constructor(props: CoachSearchProps) {
        super(props);
        this.state = { 
            location: null,
            postcode: '',
            sport: 'Rugby',
            searchResults: null
        };
    }

    updateLocation = (newLoc: Location) => {this.setState({location: newLoc})}

    updatePostcode = (newPS: string) => {
        this.setState({postcode: newPS})
    }

    updateSport = (newSport: string) => {this.setState({sport: newSport})}

    sendResults = async (e: any) => {
        if (this.state.location) {
           
            e.preventDefault()
            const search = JSON.stringify({
                longitude: this.state.location?.longitude,
                latitude: this.state.location?.latitude,
                sport: this.state.sport
            })

            let response = await fetch(`http://localhost:3000/coach/${search}`)
            let data = await response.json()

            console.log(data)

            this.setState({ searchResults: data.data.matchingCoaches })
        } else {
            alert('No location provided')
        }
    }

    async componentDidUpdate() {
        if(!(this.state.postcode) && this.state.location){
            let response = await fetch(`https://eu1.locationiq.com/v1/reverse.php?key=9a3db48671cb39&lat=${this.state.location.latitude}&lon=${this.state.location.longitude}&format=json`)
            let data = await response.json()

            this.setState({postcode: data.address.postcode})

            console.log(this.state.postcode)
        }
    }

    render() { 
        return ( 
            <div className='root'>
                {!this.state.searchResults && <WelcomeMessage/>}
                <div className='coachSearch'>
                    <SportDropdown label='Sport' fieldName={'sport'} updateParent={this.updateSport} />
                    <div className="locationBox">
                        <LocationField updateParent={this.updateLocation} fieldData={this.state.location}/>
                        <PostCodeSearch updateLocation={this.updateLocation} updateParent={this.updatePostcode} isRequired={false} postcode={this.state.postcode}/>
                    </div>
                    <Submit sendResults={this.sendResults} buttonName="Search" />
                </div>
                {this.state.searchResults ? <CoachCardList coaches={this.state.searchResults}/>:
                <div className="quotes">
                    <div>
                        <p>"Wow! What a Great Company! I found the best coach!"</p>
                        <p>     - John Doe, 2020</p>
                    </div>
                    <div>
                        <p>"Wow! What a Great Company! I've never made so much money before!</p>
                        <p>     - Abraham Lincoln, 2020</p>
                    </div>
                </div> 
                }
                
            </div>
         );
    }
}
 
export default CoachSearch;