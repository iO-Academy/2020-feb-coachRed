import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      display: 'none'
    };
  }
  render() {
    return (
      <div style={this.state}>
        Hello World
        
      </div>
    )
  }
}
