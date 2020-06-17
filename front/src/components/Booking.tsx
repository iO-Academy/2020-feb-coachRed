import * as React from "react"
import BookSlotModal from "./BookSlotModal"
import ViewBookingDetails from "./ViewBookingDetails"
import {Submit} from './Submit'
import { BookingInterface } from "../interfaces/BookingInterface"

export interface BookingProps {
  booking: BookingInterface
  date: Date
  buttonName: string
  who: string
}

export interface BookingState {
 
  modalDisplay: boolean
  
}

export default class Booking extends React.Component<BookingProps, BookingState> {

  constructor(props: BookingProps) {
    super(props)

    this.state = {
      
      modalDisplay: false,
      
    }
  }

  
  openModal = () => {
    if (localStorage.getItem('coachRedToken')) {
      this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    }
    else {
      window.location.href = '/athleteLogin'
    }
  }

  render() {
    return(
      <div className='booking'>
        <span>
          {this.props.booking.startTime} - {this.props.booking.endTime}
        </span>
        
        {this.props.who == 'coach' && this.props.booking.booked && <Submit buttonName={this.props.buttonName} sendResults={this.openModal} />}
        {this.props.who == 'athlete' && <Submit buttonName={this.props.buttonName} sendResults={this.openModal} />}

        {this.state.modalDisplay && (this.props.who == 'athlete') && < BookSlotModal date={this.props.date} startTime={this.props.booking.startTime} endTime={this.props.booking.endTime} id={this.props.booking._id} toggleModal={this.openModal}/>}
        {this.state.modalDisplay && (this.props.who == 'coach') && < ViewBookingDetails booking={this.props.booking} toggleModal={this.openModal} />}
      </div>
    )}
  
} 