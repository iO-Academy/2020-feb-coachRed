import * as React from "react"

export interface BookingProps {
  startTime: string,
  endTime: string
}

export default class Booking extends React.Component <BookingProps, {}> {

  render() {
    return(
      <div className='booking'>
        <span>
          {this.props.startTime} - {this.props.endTime}
        </span>
        {/* <button className="btn btn-danger">Details</button> */}
      </div>
    )}
  
}