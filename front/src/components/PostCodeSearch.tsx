import * as React from 'react'
import Validator from 'validator'

interface Location {
    latitude: number,
    longitude: number
}
export interface PostCodeSearchProperties {
    updateLocation(newLoc: Location): void,
    updateParent(newPS: string) : void,
    isRequired : boolean
    postcode: string
}
export interface PostCodeSearchState {postcode: string}

export class PostCodeSearch extends React.Component<PostCodeSearchProperties, PostCodeSearchState> {
    constructor(props: any) {
        super(props);
        this.state = { 
            postcode: ''
        }
    }

    getLocation = async (event: React.MouseEvent) => {
        event.preventDefault()
        let postcode = this.state.postcode ? this.state.postcode : this.props.postcode
    
        if (postcode && Validator.isPostalCode(postcode, "GB")) {
            let response = await fetch(`http://api.postcodes.io/postcodes/${postcode}`)
            let location = await response.json()
            if(location.status >= 400){
                alert('Please try again the postcode is not in our database')
            } else {
                let longLat: Location = {
                    longitude: location.result.longitude,
                    latitude: location.result.latitude
                }
                this.props.updateLocation(longLat)
            }
        } else {
            alert("The postcode is invalid")
        }
    }

    // Event here must be cast as any to avoid a typescript bug where the target of a React.ChangeEvent does not
    // have a value attribute
    postcodeInputChange = (event: any) => {
        this.setState({postcode: event.target.value})
        this.props.updateParent(event.target.value)
    }

    render() { 
        return ( 
            <form className="postcodeForm">
                <div className='postcodeInput'>
                    <label htmlFor ='postcode'>Postcode</label>
                    <input 
                        className="form-control postcodeSearch"
                        type='text' 
                        onChange={this.postcodeInputChange} 
                        name='postcode' 
                        required={this.props.isRequired}
                        value={this.props.postcode}/>
                </div>
                <button 
                    className="btn magnifyingGlass"
                    type='submit' 
                    onClick={this.getLocation} />
            </form>
        );
    }
}