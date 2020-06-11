import * as React from "react"
import Calendar from './Calendar'
import BookingList from './BookingList'
import Modal from './Modal'
import {CoachInterface }from '../interfaces/CoachInterface'

export interface CoachAvailibilityState {
  modalDisplay: boolean
  selectedDate: any
}

export interface CoachAvailibilityProps {
  coach: CoachInterface | null

}

export class CoachAvailibility extends React.Component<CoachAvailibilityProps, CoachAvailibilityState> {
    
  constructor(props: any) {
    super(props)

      this.state = {
        modalDisplay: false,
        selectedDate: ''
      } 
  }

  updateSelectedDate = (dateClicked: any) => {
    this.setState({ selectedDate: dateClicked })
  }

 
  openModal = () => {
    this.setState({modalDisplay:(this.state.modalDisplay === true) ? false : true})
  }



  render() {
      return(
        <div className="root">
          < Calendar chooseDate={this.updateSelectedDate}/>
          < BookingList />
          <button className="btn btn-danger" onClick={this.openModal}>Add Slot</button>
          {this.state.modalDisplay && < Modal date={this.state.selectedDate} />}
        </div>
      )
  }
}