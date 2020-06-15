import React, { Component } from 'react'
import { Dropdown } from './Dropdown';
import { Submit } from './Submit';



export interface BookSlotModalState {

  numberOfSessions: string
  athleteName: string
  athletePhone: any
  athleteId: any
  slotId: string
 
}

export interface BookSlotModalProps {
  startTime: string
  endTime: string
  toggleModal(): void
  date: Date
  id: string
}

export default class BookSlotModal extends Component<BookSlotModalProps, BookSlotModalState>{
  constructor(props: any) {
    super(props);
    this.state = {
      numberOfSessions: '6',
      athleteName: localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName'),
      athletePhone: localStorage.getItem('phone'),
      athleteId: localStorage.getItem('id'),
      slotId: ''
    };
  }

  updateSessions = (newSessions: string) => {
    this.setState({ numberOfSessions: newSessions })

  } 

  bookSession = async (e: any) => {
    e.preventDefault(); 
    console.log(this.props.id)
   
    const slotId = this.props.id

    console.log(slotId)
    

    await fetch(`http://localhost:3000/slot/${slotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <div>
        
        <h5>{this.props.date.toDateString()}</h5>
        <h5>{this.props.startTime} - {this.props.endTime}</h5>
        <Dropdown fieldName="numberOfSessions" label="How many sessions?" updateParent={this.updateSessions} options={['6', '8', '10']} />
        <Submit buttonName="Book Now!" sendResults={this.bookSession}/>

      </div>
    )
  }
}
