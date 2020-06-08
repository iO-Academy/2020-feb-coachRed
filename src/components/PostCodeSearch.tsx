import * as React from 'react'

interface Location {
    latitude: number,
    longitude: number
}
export interface PostCodeSearchProperties {
    updateLocation(newLoc: Location): void,
    updateParent(newPS: string) : void
}
export interface PostCodeSearchState {postcode: string}

export class PostCodeSearch extends React.Component<PostCodeSearchProperties, PostCodeSearchState> {
    constructor(props: any) {
        super(props);
        this.state = { 
            postcode: ''
        }
        this.getLocation = this.getLocation.bind(this)
        this.postcodeInputChange = this.postcodeInputChange.bind(this)
    }

    async getLocation(event: React.MouseEvent){
        event.preventDefault()

        let response = await fetch(`http://api.postcodes.io/postcodes/${this.state.postcode}`)
        let location = await response.json()
        let longLat: Location = {
            longitude: location.result.longitude,
            latitude: location.result.latitude
        }
        console.log(longLat)
        this.props.updateLocation(longLat)
    }

    // Event here must be cast as any to avoid a typescript bug where the target of a React.ChangeEvent does not
    // have a value attribute
    postcodeInputChange(event: any){
        this.setState({postcode: event.target.value})
        this.props.updateParent(event.target.value)
    }

    render() { 
        return ( 
            <form>
                <label htmlFor ='postcode'>Postcode</label>
                <input type='text' onChange={this.postcodeInputChange} name='postcode'/>
                <input type='submit' onClick={this.getLocation} value='Search'/>
            </form>
        );
    }
}