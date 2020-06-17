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
        <div className="modal" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.booking.date} <br></br> {this.props.booking.startTime} - {this.props.booking.endTime}</h5>
                <button type="button" className="close" onClick={this.props.toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form">
                <h6>This slot is booked by {this.props.booking.bookedBy}</h6>
                <h6>Phone Number: {this.props.booking.contact}</h6>
                <h6>Email: {this.props.booking.email}</h6>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div> 
    )
  }
}


