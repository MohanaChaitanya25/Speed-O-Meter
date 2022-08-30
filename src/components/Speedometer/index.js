/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {mph: 0}

  accelerate = () => {
    const {mph} = this.state
    if (mph + 10 > 200) {
      this.setState(prevState => ({mph: prevState.mph}))
    } else {
      this.setState(prevState => ({mph: prevState.mph + 10}))
    }
  }

  applyBreaks = () => {
    const {mph} = this.state
    if (mph - 10 < 0) {
      this.setState(prevState => ({mph: prevState.mph}))
    } else {
      this.setState(prevState => ({mph: prevState.mph - 10}))
    }
  }

  render() {
    const {mph} = this.state
    return (
      <div className="speedometer-bg-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="speed-msg">Speed is {mph}mph</h1>
        <p className="min-max-limit">Min limit is 0mph, Max limit is 200mph</p>
        <div className="buttons-container">
          <button onClick={this.accelerate} className="button accelerate-btn">
            Accelerate
          </button>

          <button onClick={this.applyBreaks} className="button apply-breaks">
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
