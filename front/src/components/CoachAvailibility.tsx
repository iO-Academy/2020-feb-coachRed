import * as React from "react"
import Calendar from './Calendar'
import BookingList from './BookingList'
import Modal from './Modal'
import {CoachInterface }from '../interfaces/CoachInterface'

export interface CoachAvailibilityState {
  modalDisplay: boolean
  selectedDate: Date
  isDateSelected: boolean
  bookings: Array<any>
}

export interface CoachAvailibilityProps {
  coach: CoachInterface | null

}

export class CoachAvailibility extends React.Component<CoachAvailibilityProps, CoachAvailibilityState> {
    
  constructor(props: CoachAvailibilityProps) {
    super(props)

      this.state = {
        modalDisplay: false,
        selectedDate: new Date(),
        isDateSelected: false,
        bookings: []
      } 
  }

  updateSelectedDate = async (dateClicked: Date) => {
    this.setState({ selectedDate: dateClicked })
    this.setState({isDateSelected: true})
    const correctDateFormat = dateClicked.toISOString().split('T')[0]
    const request = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(localStorage.getItem('coachRedToken'))
      }
    }

    let slots = await fetch(`http://localhost:3000/slot/${correctDateFormat}`, request)
    if (slots.status === 403) {
      window.location.href = 'coachLogin'
    }
    let response = await slots.json()
    localStorage.setItem('coachRedToken', response.data.token)

    this.setState({bookings: response.data.slots})
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
            <div className="calendar">
                < Calendar chooseDate={this.updateSelectedDate}/>
            </div>
              <div className="bookingsContainer">
                <div className="bookingList">
                    {!this.state.isDateSelected && <p>Please Select a Date</p>}
                    {this.state.isDateSelected && < BookingList bookings={this.state.bookings}/>}
                    {this.state.isDateSelected && <button className="btn btn-danger" onClick={this.openModal}>Add Slot</button>}
                </div>
                <div id="newSlot" className="newSlotModal">
                    {this.state.modalDisplay && < Modal date={this.state.selectedDate} toggleModal={this.openModal} />}
                </div>
            </div>
        </div>
      )
  }
}