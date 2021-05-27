import React, { Component } from 'react'

export default class Cell extends Component {

  constructor() {
    super()
    this.state = {color: this.prop}
  }

  render() {
    return <div className="cell" style={{backgroundColor: this.state.color}}></div>
  }
}