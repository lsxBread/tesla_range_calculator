import React from 'react'
import PropTypes from 'prop-types'
import './TeslaCar.scss'

const TeslaCar = (props) => (
  <div className='tesla_car'>
    <div className={`tesla_wheel tesla_wheel_front tesla_wheel_size_${props.wheelSize}_speed_${props.teslaSpeed}`}>
    </div>
    <div className={`tesla_wheel tesla_wheel_rear tesla_wheel_size_${props.wheelSize}_speed_${props.teslaSpeed}`}>
    </div>
  </div>
)

TeslaCar.propTypes = { 
  wheelSize: PropTypes.number,
  teslaSpeed: PropTypes.number
}

export default TeslaCar