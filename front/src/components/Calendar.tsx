import * as React from "react"

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export class Calendar extends React.Component {

  constructor(props: any) {
      super(props)
      
      this.state = {
          
      }
  }

  render() {
    return(
      <div className='root'>
        < DayPicker />
      </div>
    )}
  
}