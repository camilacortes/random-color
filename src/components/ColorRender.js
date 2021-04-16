import React, { Component } from 'react'
import axios from 'axios';
import ColorStyling from './ColorStyling'

export default class ColorRender extends Component {
  constructor(){
    super()
    this.state = {
      colors : []
    }
  }

  componentDidMount(){
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
    ).then(response => {
        const data = response.data
        this.setState({colors: data.colors})
      })
  }

 

  render() {
      
    return (
      <div>
      {this.state.colors.map(item =>{
      return <ColorStyling backgroundColor={item.hex}/>
      })}
      </div>
    )
  }
}
