import * as React from "react"
import Calendar from './Calendar'
import BookingList from './BookingList'
import Modal from './Modal'
import {CoachInterface }from '../interfaces/CoachInterface'
import { BookingInterface } from '../interfaces/BookingInterface'

export interface CoachAvailibilityState {
  modalDisplay: boolean
  selectedDate: Date
  isDateSelected: boolean
  bookings: Array<any>
}

export interface CoachAvailibilityProps {
  coach: CoachInterface 

}

export class CoachAvailibility extends React.Component<CoachAvailibilityProps, CoachAvailibilityState> {
    
  constructor(props: CoachAvailibilityProps) {
    super(props)

      this.state = {
        modalDisplay: false,
        selectedDate: new Date(),
        isDateSelected: false,
        bookings: [],
   
      } 
  }

  updateSelectedDate = async (dateClicked: Date) => {
    console.log(dateClicked < new Date(Date.now()))
    if(dateClicked < new Date(Date.now())){
      alert("Please select a date in the future")
    }else{
      this.setState({ selectedDate: dateClicked })
      this.setState({isDateSelected: true})
      const correctDateFormat = dateClicked.toISOString().split('T')[0]
      const request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      }
      let id = localStorage.getItem('id')

      let slots = await fetch(`http://localhost:3000/slot/${correctDateFormat}?id=${id}`, request)
      if (slots.status === 403) {
        console.log(await slots.json())
      }
      let response = await slots.json()
      let bookings: Array<BookingInterface> = []
      response.data.slots.forEach((slot: any) => {
        let slotAvailable = true;
        if (slot.bookedBy.length > 0) {
          slot.bookedBy.forEach((booking: any) => {
          
            let formattedDate = this.state.selectedDate.toISOString()
        
            if (booking.startDate <= formattedDate && formattedDate <= booking.endDate) { 
              bookings.push({
                _id: booking._id,
                date: this.state.selectedDate.toLocaleDateString(),
                startTime: slot.startTime,
                endTime: slot.endTime,
                repeat: slot.repeat,
                hourlyRate: slot.hourlyRate,
                email: booking.email,
                contact: booking.phone,
                booked: true,
                bookedBy: booking.firstName + ' ' + booking.lastName
              })
              slotAvailable = false;
            } 
          })
        } if (slotAvailable) {
          bookings.push({
            _id: slot._id,
            date: this.state.selectedDate.toLocaleDateString(),
            startTime: slot.startTime,
            endTime: slot.endTime,
            repeat: slot.repeat,
            hourlyRate: slot.hourlyRate,
            email: '',
            contact: '',
            booked: false,
            bookedBy: ''
          })
        }
      })
      this.setState({ bookings: bookings })
    }
  }

 
  openModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    this.updateSelectedDate(this.state.selectedDate)
    if (!this.state.modalDisplay) {
      window.location.href="#newSlot"
    }
  }



  render() {
      return(
        <div className="coachAvailibility">
          <h3>Hi Coach!</h3>
          <h3>Click on a date to view bookings, or add a new slot</h3>
          <div className="calendar">
          
                < Calendar chooseDate={this.updateSelectedDate}/>
            </div>
              <div className="bookingsContainer">
                <div className="bookingList">
                  {!this.state.isDateSelected && <p>Please Select a Date</p>}
                  {this.state.isDateSelected && <button className="btn btn-danger" onClick={this.openModal}>Add Slot</button>}
                  {this.state.isDateSelected && < BookingList date={this.state.selectedDate} bookings={this.state.bookings}/>}
                    
                </div>
                <div id="newSlot">
                    {this.state.modalDisplay && < Modal date={this.state.selectedDate} toggleModal={this.openModal} />}
                </div>
            </div>
        </div>
      )
  }
}