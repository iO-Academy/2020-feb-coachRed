import React, { Component } from 'react'
import { CoachInterface } from '../interfaces/CoachInterface'

import BookCoachModal from './BookCoachModal'

interface ViewCoachProps {

  
}
interface ViewCoachState {
  coach: CoachInterface
  selectedDate: Date
  modalDisplay: boolean
  coachId: string
 
}

export default class ViewCoach extends Component<ViewCoachProps, ViewCoachState> {
  constructor(props: ViewCoachProps) {
    super(props)

    this.state = {
      coach: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        town: '',
        postcode: '',
        qualifications: '',
        yearsCoaching: '',
        sport: '',
        expertise: '',
        password: '',
        email: '',
        phone: '',
        houseNumber: 0,
        houseName: '',
        county: '',
        location: '',
        dob: '',
      },
      selectedDate: new Date(),
      modalDisplay: false,
      coachId: ''
    }
  }


  componentDidMount = async () => {
    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const coachId = localStorage.getItem('coachId')

    let coach = await fetch(`http://localhost:3000/coach/?coachId=${coachId}`, request)

    let response = await coach.json()
    
    this.setState({
      coach: {
        firstName: response.data.coach.firstName,
        lastName: response.data.coach.lastName,
        address1: response.data.coach.address1,
        address2: response.data.coach.address2,
        town: response.data.coach.town,
        postcode: response.data.coach.postcode,
        qualifications: response.data.coach.qualifications,
        yearsCoaching: response.data.coach.yearsCoaching,
        sport: response.data.coach.sport,
        expertise: response.data.coach.expertise,
        password: '',
        email: '',
        phone: '',
        houseNumber: 0,
        houseName: '',
        county: '',
        location: '',
        dob: ''
      },
      coachId: response.data.coach._id
    })
    localStorage.setItem('coachId', response.data.coach._id)

  }


  openModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    
  }


  render() {
    return (
      <div className="viewCoachAll">
          <div className="viewCoach">
              <h1>{this.state.coach.firstName} {this.state.coach.lastName}</h1>
              <h6>Coaches {this.state.coach.sport}</h6>
              <div className='coachDetails'>
                  <h3>Address:</h3>
                  <h6>{this.state.coach.address1}</h6>
                  <h6>{this.state.coach.address2}</h6>
                  <h6>{this.state.coach.town}</h6>
                  <h6>{this.state.coach.postcode}</h6>
              </div>
              <div className='coachDetails'>   
                  <h3>Qualifications:</h3>
                  <h6>{this.state.coach.qualifications}</h6>
              </div>   
              <div className='coachDetails'>
                  <h3>Area of Expertise:</h3>
                  <h6>{this.state.coach.expertise}</h6>
              </div>
          </div>
          <button className="btn btn-danger" onClick={this.openModal}>Book a Session</button>
          {this.state.modalDisplay && < BookCoachModal coachId={this.state.coachId} toggleModal={this.openModal} />}
      </div>
    )
  }
}


