import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator';
// import { getRandomColor } from './randomColorGenerator.js' No longer needed, it is being passed as a prop

class Child extends Component {


  constructor(startCell){
    super();
    this.state = {
      startColor: startCell.value,
      colorChange: startCell.handleColorChange,
    }
  }

  render() {
    console.log(`Rendering..`, this.props)

    return (
      <div
        onClick={this.state.colorChange}
        className="child"
        style={{backgroundColor: this.state.startColor}}
      ></div>
    )
  }
}

export default Child
