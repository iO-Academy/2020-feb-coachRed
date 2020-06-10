import * as React from "react"
import Booking from "./Booking";
import { BookingInterface } from "../interfaces/BookingInterface"


export interface BookingListState {
  bookings : Array<BookingInterface>
}

export default class BookingList extends React.Component <{}, BookingListState> {

  constructor(props: any) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  componentDidMount() {
    // let bookings = []
    // fetch('http://localhost:3000/coach/booking', {
    //   method: "GET"
    // }).then((response: any) => {
    //   return response.json()
    // }).then(response => {
    //   this.setState({ bookings: response.data.bookings.map((bookings: any) => { return bookings.name }) })
        
    // })
    this.setState({
      bookings: [{
        startTime: '10:00',
        endTime: '11:00'
      },
        {
          startTime: '11:00',
          endTime: '12:00'
        },
        {
          startTime: '12:00',
          endTime: '13:00'
      }]
    })
  }

  
  render() {
    return(
      <div className='bookings'>
        {this.state.bookings.map((booking: BookingInterface) => {
          return <Booking startTime={booking.startTime} endTime={booking.endTime}/>
        })}
        
      </div>
    )}
  
}