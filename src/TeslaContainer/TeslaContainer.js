import React from 'react'
import './TeslaContainer.scss'
import TeslaNotice from '../TeslaNotice/TeslaNotice'
import TeslaCar from '../TeslaCar/TeslaCar'
import TeslaRange from '../TeslaRange/TeslaRange'

class TeslaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carRange: [
        {model: '60', value: 273},
        {model: '60d', value: 273},
        {model: '75', value: 273},
        {model: '75d', value: 273},
        {model: '90d', value: 273},
        {model: 'p100d', value: 273},
      ],
      config: {
        speed: 55,
        temperature: 20,
        accOn: true,
        underTwentyDegree: false,
        wheelSize: 19
      }
    }
  }

	render () {
    const {carRange, config} = this.state
		return (
			<div className='tesla_container'>
				<h1>Range Per Charge</h1>
        <TeslaCar wheelSize={config.wheelSize} teslaSpeed={config.speed}/>
        <TeslaRange carRange={carRange}/>
        <TeslaNotice />
			</div>
		)
	}
}

export default TeslaContainer