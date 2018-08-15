import React from 'react'
import PropTypes from 'prop-types'
import './TeslaCounter.scss'

const TeslaCounter = (props) => (
  <div className='tesla_counter'>
    <div className='tesla_counter_title'>{props.config.title}</div>
    <div className='tesla_counter_wrapper'>
      <div className='tesla_counter_value'>
        {props.currentValue}
        <span>{props.config.unit}</span>
      </div>
      <div className='tesla_counter_arrow'>
        <button disabled={props.currentValue >= props.config.max}></button>
        <button disabled={props.currentValue <= props.config.min}></button>
      </div>
    </div>
  </div>
)

TeslaCounter.prototype = {
  config: PropTypes.object
}

export default TeslaCounter

