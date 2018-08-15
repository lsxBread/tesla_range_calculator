import React from 'react'
import PropTypes from 'prop-types'
import './TeslaWheels.scss'

const TeslaWheels = (props) => (
  <div className='tesla_wheel_options'>
    <div className='tesla_wheel_options_title'>{props.config.title}</div>
    <div className='tesla_wheel_options_container'>
      <div 
        className={`option tesla_wheel_option_19 ${props.wheelSize === 19 ? 'active' : ''}`}
        onClick={() => {props.switchSize(19)}}
      >
        19"
      </div>
      <div 
        className={`option tesla_wheel_option_21 ${props.wheelSize === 21 ? 'active' : ''}`}
        onClick={() => {props.switchSize(21)}}
      >
        21"
      </div>
    </div>
  </div>
)

TeslaWheels.propTypes = {
  config: PropTypes.object,
  wheelSize: PropTypes.number,
  switchSize: PropTypes.func
}

export default TeslaWheels

