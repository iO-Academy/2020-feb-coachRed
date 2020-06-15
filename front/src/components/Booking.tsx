import * as React from "react"
import BookSlotModal from './BookSlotModal'

export interface BookingProps {
  startTime: string,
  endTime: string
  date: Date
  id: string
}

export interface BookingState {
 
  modalDisplay: boolean
}

export default class Booking extends React.Component<BookingProps, BookingState> {

  constructor(props: BookingProps) {
    super(props)

    this.state = {
      
      modalDisplay: false,
      
    }
  }
  
  openModal = () => {
    this.setState({ modalDisplay: (this.state.modalDisplay === true) ? false : true })
    
  }

  render() {
    return(
      <div className='booking'>
        <span>
          {this.props.startTime} - {this.props.endTime}
        </span>
        <button className="btn btn-danger" onClick={this.openModal}>Book this time slot</button>
        {this.state.modalDisplay && < BookSlotModal date={this.props.date} startTime={this.props.startTime} endTime={this.props.endTime} id={this.props.id} toggleModal={this.openModal} />}
      </div>
    )}
  
} 