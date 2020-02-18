import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: '#FFF'
    }
  }

  changeColor = () => {

    this.setState({
      color: getRandomColor(),
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child value={getRandomColor()} handleColorChange={this.changeColor}/>
        <Child value={getRandomColor()} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
