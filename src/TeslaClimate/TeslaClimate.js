import React from 'react'
import PropTypes from 'prop-types'
import './TeslaClimate.scss'

const TeslaClimate = (props) => (
  <div 
    className={`tesla_climate ${props.isClimateOn ? 'tesla_climate_active': ''} ${props.isAccOn ? 'tesla_climate_accActive': ''}`}
    onClick={() => {props.toggleClimate()}}
  >
    <div className='tesla_climate_title'>
      {props.isAccOn ? 'AC ' : 'HEAT '}
      {props.isClimateOn ? 'ON' : 'OFF'}
    </div>
    <div className='tesla_climate_icon'></div>
  </div>
)

TeslaClimate.propTypes = {
  isAccOn: PropTypes.bool,
  isClimateOn: PropTypes.bool,
  toggleClimate: PropTypes.func
}

export default TeslaClimate