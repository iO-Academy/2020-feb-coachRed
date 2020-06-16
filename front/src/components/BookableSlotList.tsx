import * as React from "react"
import Booking from "./Booking";
import { BookingInterface } from "../interfaces/BookingInterface"


export interface BookableSlotListProps {
  bookings: Array<any>
  date: Date
}

export interface BookableSlotListState {
  modalDisplay: boolean
}

export default class BookableSlotList extends React.Component <BookableSlotListProps, BookableSlotListState> {

  constructor(props: any) {
    super(props);
    this.state = {
      modalDisplay: false

    };
  }

  openBookSlotModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
  
    
  }

  render() {
    return(
      <div className='bookings'>
        {this.props.bookings.map((booking: BookingInterface) => {
          return !(booking.booked) &&  <Booking date={this.props.date} who='athlete' buttonName="Book this slot" key={this.props.bookings.findIndex((entry) => entry === booking)}
              booking={booking} />
          
            
        })}
      </div>
    )}
  
}