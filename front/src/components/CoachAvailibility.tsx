import * as React from "react"
import Calendar from './Calendar'
import BookingList from './BookingList'
import Modal from './Modal'

export interface CoachAvailibilityState {
  modalDisplay : string
}

export class CoachAvailibility extends React.Component<{}, CoachAvailibilityState> {
    
  constructor(props: any) {
      super(props)
      this.state = {
        modalDisplay: 'none'
      } 
  }

 
  openModal = () => {
    this.setState({modalDisplay:(this.state.modalDisplay === 'block') ? 'none' : 'block'})
  }



  render() {
      return(
        <div className="root">
          < Calendar />
          < BookingList />
          <button className="btn btn-danger" onClick={this.openModal}>Add Slot</button>
          < Modal />
        </div>
      )
  }
}