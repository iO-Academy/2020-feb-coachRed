import * as React from "react"
import Booking from "./Booking";
import { BookingInterface } from "../interfaces/BookingInterface"

export interface BookingListProps {
  bookings: Array<any>
  date: Date
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
          return <Booking who='coach' buttonName="Details" date={this.props.date} key={this.props.bookings.findIndex((entry) => entry === booking)}
            booking={booking}/> 
          
        })}
        
      </div>
    )}
  
}