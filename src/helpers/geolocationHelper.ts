
const getLocation = navigator.geolocation.getCurrentPosition((position) : {latitude: number, longitude: number} => {

    const currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }

    return currentPosition
})


export default getLocation