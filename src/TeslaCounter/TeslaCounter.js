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
        <button disabled={props.currentValue >= props.config.max} onClick={() => props.increase(props.config.type)}></button>
        <button disabled={props.currentValue <= props.config.min} onClick={() => props.decrease(props.config.type)}></button>
      </div>
    </div>
  </div>
)

TeslaCounter.prototype = {
  config: PropTypes.object,
  increase: PropTypes.func,
  decrease: PropTypes.func
}

export default TeslaCounter

