import React, { Component } from 'react'
import Calendar from './Calendar';
import BookableSlotList from './BookableSlotList'
export interface BookCoachModalState {

  bookings: Array<object>
  isDateSelected: boolean
  selectedDate: Date
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
      isDateSelected: false
     
    };
  }


  updateSelectedDate = async (dateClicked: Date) => {
    this.setState({ selectedDate: dateClicked })
    this.setState({isDateSelected: true})
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


  render() {
    return (
      <div>
        <h3>To book a slot, just click on a day below</h3>
        <Calendar chooseDate={this.updateSelectedDate} />
        <h4>Available Slots</h4>
        {this.state.isDateSelected && < BookableSlotList date={this.state.selectedDate} bookings={this.state.bookings}/>}
      </div>
    )
  }
}
