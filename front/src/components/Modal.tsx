import React, { Component } from 'react'
import { TextInput } from './TextInput'
import { Dropdown } from './Dropdown'
import { Submit } from './Submit';

export interface ModalState {
 
}

export interface ModalProps {
  date : any
}

export default class Modal extends Component<ModalProps, ModalState>{
  constructor(props: any) {
    super(props);
    this.state = {
      startTime: '',
      endTime: ''
    };
  }

  updateStartTime = (slotStartTime: string) => {
    this.setState({startTime: slotStartTime })
  }

  updateEndTime = (slotEndTime: string) => {
    this.setState({endTime: slotEndTime })
  }

  repeat = () => {

  }

  ageGroup = () => {

  }

  hourlyRate = () => {

  }

  addSlot = () => {

  }


  render() {
    return (
      <div>
        <h3>New Time slot for {this.props.date.toLocaleDateString()}</h3>
        <TextInput label='Start Time' fieldName='startTime' fieldData='00:00' inputType='time' isRequired={true} updateParent={this.updateStartTime} />
        <TextInput label='End Time' fieldName='endTime' fieldData='00:00' inputType='time' isRequired={true} updateParent={this.updateEndTime} />
        <Dropdown label='Repeat?' fieldName='repeat' updateParent={this.repeat} options={['Once', 'Weekly', 'Fortnightly', 'Monthly']} />
        <Dropdown label='Age Group?' fieldName='age' updateParent={this.ageGroup} options={['Under 18s', 'Adults']} />
        <TextInput label='Hourly Rate (£)' fieldName="hourlyRate" fieldData='£' inputType='string' isRequired={true} updateParent={this.hourlyRate} />
        <Submit sendResults={this.addSlot} buttonName='Add Slot' />

        
        
      </div>
    )
  }
}
