import * as React from 'react'

import { Location } from '../interfaces/Location'

export interface GeoLocationButtonProperties {updateParent(newLoc: Location) : void}

export class GeoLocationButton extends React.Component<GeoLocationButtonProperties> {

    constructor(props: any){
        super(props)
        this.state = {}
        this.getLocation = this.getLocation.bind(this)
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let longLat: Location = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }
            console.log(longLat)
            this.props.updateParent(longLat)
        })
    }

    render() {
        return(
            <button onClick={this.getLocation}>Get Location</button>
        )
    }
}
