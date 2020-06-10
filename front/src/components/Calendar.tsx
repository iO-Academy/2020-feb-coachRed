import * as React from "react"

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {

  constructor(props: any) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day: any) {
    this.setState({ selectedDay: day });
  }

  render() {
    return(
      <div className='root'>
        < DayPicker onDayCLick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    )}
  
}