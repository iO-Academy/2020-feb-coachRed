import * as React from "react"
import Booking from "./Booking";
import { BookingInterface } from "../interfaces/BookingInterface"

export interface BookingListProps {
  bookings: Array<any>
}

export default class BookingList extends React.Component <BookingListProps, {}> {

  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  
  render() {
    return(
      <div className='bookings'>
        {this.props.bookings.map((booking: BookingInterface) => {
          return <Booking key={this.props.bookings.findIndex((entry)=>entry===booking)}
          startTime={booking.startTime} endTime={booking.endTime}/>
        })}
        
      </div>
    )}
  
}