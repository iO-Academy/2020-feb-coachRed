import * as React from "react"

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export interface CalendarState {
  selectedDay: Date,
}

export interface CalendarProps {
  chooseDate(date : Date) : void
}

export default class Calendar extends React.Component <CalendarProps, CalendarState> {

  constructor(props: CalendarProps) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date()
    };
  }

  handleDayClick(day: Date) {
    this.setState({ selectedDay: day })
  
    this.props.chooseDate(day)
  }

  render() {
    return(
      <div id='dayPicker'>
        <DayPicker onDayClick={this.handleDayClick} />
      </div>
    )}
  
}