import * as React from "react"
import Calendar from './Calendar'

export class CoachAvailibility extends React.Component {
    
  constructor(props: any) {
      super(props)
      this.state = {
      
      } 
  }

  render() {
      return(
        <div className="root">
          < Calendar />
              
          </div>
      )
  }
}