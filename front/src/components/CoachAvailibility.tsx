import * as React from "react"
import Calendar from './Calendar'
import BookingList from './BookingList'
import Modal from './Modal'
import {CoachInterface }from '../interfaces/CoachInterface'

export interface CoachAvailibilityState {
  modalDisplay: boolean
  selectedDate: Date
  isDateSelected: boolean
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
        isDateSelected: false
      } 
  }

  updateSelectedDate = (dateClicked: Date) => {
    this.setState({ selectedDate: dateClicked })
    this.setState({isDateSelected: true})
  }

 
  openModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    console.log(this.state.selectedDate)
  }



  render() {
      return(
        <div className="coachAvailibility">
            <div className="calendar">
                < Calendar chooseDate={this.updateSelectedDate}/>
            </div>
            <div className="bookingList">
                {this.state.isDateSelected && < BookingList />}
                {this.state.isDateSelected && <button className="btn btn-danger" onClick={this.openModal}>Add Slot</button>}
            </div>
            <div className="newSlotModal">
                {this.state.modalDisplay && < Modal date={this.state.selectedDate} />}
            </div>
        </div>
      )
  }
}