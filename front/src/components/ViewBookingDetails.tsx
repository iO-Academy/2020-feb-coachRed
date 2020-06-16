import React, { Component } from 'react'
import { BookingInterface } from '../interfaces/BookingInterface';

export interface ViewBookingDetailsState {

}

export interface ViewBookingDetailsProps {
  toggleModal(): void
  booking: BookingInterface 
}

export default class ViewBookingDetails extends Component<ViewBookingDetailsProps, ViewBookingDetailsState>{
  constructor(props: any) {
    super(props);
    this.state = {
     
     
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.booking.date}</h3>
        <h4>{this.props.booking.startTime} - {this.props.booking.endTime}</h4>
        
        <h5>This slot is booked by {this.props.booking.bookedBy}</h5>
        <h5>Phone Number: {this.props.booking.contact}</h5>
        <h5>CoachRed Athlete Id: {this.props.booking.athleteId}</h5>
        

      </div>
    )
  }
}
