import React from 'react'

class GeoLocationButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
        this.getLocation = this.getLocation.bind(this)
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let longLat = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }
            console.log(longLat)
            return longLat
        })
    }

    render() {
        return(
            <button onClick={this.getLocation}>Get Location</button>
        )
    }
}

export default GeoLocationButton