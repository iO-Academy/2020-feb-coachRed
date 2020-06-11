import * as React from "react"

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export interface CalendarState {
  selectedDay: any,
}

export interface CalendarProps {
  chooseDate(date : any) : void
}

export default class Calendar extends React.Component <CalendarProps, CalendarState> {

  constructor(props: any) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
   
    this.state = {
      selectedDay: null
    };
  }

  handleDayClick(day: any) {
  
    this.setState({ selectedDay: day })
  
    this.props.chooseDate(day)
  }

  // updateCoachAvailibilityDate = (date : string) => {
  //     this.props.chooseDate(date)
  // }

  render() {
    return(
      <div className='root'>
        <DayPicker onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
        
      </div>
    )}
  
}