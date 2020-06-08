import React from 'react'

class PostCodeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            postcode: ''
         }
        this.getLocation = this.getLocation.bind(this)
        this.postcodeInputChange = this.postcodeInputChange.bind(this)
    }

    async getLocation(event){
        event.preventDefault()

        let response = await fetch(`http://api.postcodes.io/postcodes/${this.state.postcode}`)
        let location = await response.json()
        let longLat = {
            longitude: location.result.longitude,
            latitude: location.result.latitude
        }
        console.log(longLat)
        return longLat
    }

    postcodeInputChange(event){
        this.setState({postcode: event.target.value})
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
 
export default PostCodeSearch;