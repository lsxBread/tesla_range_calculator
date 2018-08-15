import React from 'react'
import PropTypes from 'prop-types'
import './TeslaRange.scss'

const TeslaRange = (props) => {
  const rangeList = props.carRange.map((range) => (
    <li key={range.model}>
      <div className={`car_range_icon car_range_icon_model_${range.model}`}></div>
      <div className='car_range_value'>{range.value}</div>
    </li>
  ))

  return (
    <div className='tesla_car_range'>
      <ul>
        {rangeList}
      </ul>
    </div>
  )
}

TeslaRange.propTypes = {
  carRange: PropTypes.array
}

export default TeslaRange