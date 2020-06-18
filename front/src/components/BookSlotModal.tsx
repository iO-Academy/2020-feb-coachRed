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

   let response =  await fetch(`http://localhost:3000/slot/${slotId}?coachId=${coachId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('coachRedToken')
        },
      body: JSON.stringify(requestBody)
    })
    
    if (response.status === 403) {
      alert('You need to log in!')
      window.location.href = "/athleteLogin"
     
    } else {
      alert('You booked the session!')
      window.location.reload()
    }
      
  }
   
  

  render() {
    return (
      <div className="modal" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.date.toDateString()}<br></br> {this.props.startTime} - {this.props.endTime}</h5>
                <button type="button" className="close" onClick={this.props.toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form">
                <Dropdown fieldName="numberOfSessions" label="How many sessions?" updateParent={this.updateSessions} options={['1', '6', '8', '10']} />
                <Submit buttonName="Book Now!" sendResults={this.bookSession}/>
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

         