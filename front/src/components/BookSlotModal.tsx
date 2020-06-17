import React, { Component } from 'react'
import { Dropdown } from './Dropdown';
import { Submit } from './Submit';



export interface BookSlotModalState {

  numberOfSessions: string | null
  athleteName: string | null
  athletePhone: string | null
  athleteId: string | null
  coachId: string | null
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
      numberOfSessions: '1',
      athleteName: '',
      athletePhone: '',
      athleteId: '',
      coachId: ''
    };
  }

  componentDidMount = () => {
    this.setState({ athleteName: localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName') })
    this.setState({ athletePhone: localStorage.getItem('phone') })
    this.setState({ athleteId: localStorage.getItem('id') })
    this.setState({ coachId: localStorage.getItem('coachId') })
  }

  updateSessions = (newSessions: string) => {
    this.setState({ numberOfSessions: newSessions })

  } 

  bookSession = async (e: any) => {
    e.preventDefault(); 
   
    const slotId = this.props.id
    const coachId = this.state.coachId
    console.log(localStorage.getItem("coachRedToken"))
    const requestBody = {
      initialDate: this.props.date,
      numSessions: this.state.numberOfSessions
    }

    await fetch(`http://localhost:3000/slot/${slotId}?coachId=${coachId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('coachRedToken')
        },
      body: JSON.stringify(requestBody)
    })

    this.props.toggleModal()
  }

  render() {
    return (
      <div>
        
        <h5>{this.props.date.toDateString()}</h5>
        <h5>{this.props.startTime} - {this.props.endTime}</h5>
        <Dropdown fieldName="numberOfSessions" label="How many sessions?" updateParent={this.updateSessions} options={['1','6', '8', '10']} />
        <Submit buttonName="Book Now!" sendResults={this.bookSession}/>

      </div>
    )
  }
}
