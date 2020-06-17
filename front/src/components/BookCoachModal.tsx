import React, { Component } from 'react'
import Calendar from './Calendar';
import BookableSlotList from './BookableSlotList'
export interface BookCoachModalState {

  bookings: Array<object>
  isDateSelected: boolean
  selectedDate: Date
  modalDisplay: boolean
}

export interface BookCoachModalProps {

  toggleModal(): void
  coachId: string
}

export default class BookCoachModal extends Component<BookCoachModalProps, BookCoachModalState>{
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      bookings: [],
      isDateSelected: false,
      modalDisplay: false
     
    };
  }


  updateSelectedDate = async (dateClicked: Date) => {
    this.setState({ selectedDate: dateClicked })
    this.setState({ isDateSelected: true })
    this.setState({modalDisplay: true})
    const correctDateFormat = dateClicked.toISOString().split('T')[0]

    const request = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          
      }
    }

    let slots = await fetch(`http://localhost:3000/slot/${correctDateFormat}?id=${this.props.coachId}`, request)
    if (slots.status === 403) {
      console.log(await slots.json())

    }
    let response = await slots.json()
    this.setState({ bookings: response.data.slots })
  

  }

  toggleModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    
  }
  

  render() {
    return (
      <div className="modal" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">To book a slot, just click on a day below</h5>
                <button type="button" className="close" onClick={this.props.toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form">
              <Calendar chooseDate={this.updateSelectedDate} />
        {this.state.isDateSelected && this.state.modalDisplay && < BookableSlotList date={this.state.selectedDate} bookings={this.state.bookings} toggleModal={this.toggleModal}/>}
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

