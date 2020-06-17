import * as React from "react"
import Booking from "./Booking";
import { BookingInterface } from "../interfaces/BookingInterface"


export interface BookableSlotListProps {
  bookings: Array<any>
  date: Date
  toggleModal(): void
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
    this.setState({ modalDisplay: (this.state.modalDisplay === false) ? true : false })
  
    
  }

  render() {
    return (
      <div className="modal" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Available Slots</h5>
                <button type="button" className="close" onClick={this.props.toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form">
              <div className='bookings'>
        {this.props.bookings.map((booking: BookingInterface) => {
          return !(booking.booked) &&  <Booking date={this.props.date} who='athlete' buttonName="Book this slot" key={this.props.bookings.findIndex((entry) => entry === booking)}
              booking={booking} />
        })}
      </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      
    )}
}

