import React from 'react'
import './TeslaContainer.scss'
import TeslaNotice from '../TeslaNotice/TeslaNotice'
import TeslaCar from '../TeslaCar/TeslaCar'
import TeslaRange from '../TeslaRange/TeslaRange'
import TeslaCounter from '../TeslaCounter/TeslaCounter'

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
      controller: {
        speed: 45,
        temperature: 20,
        accOn: true,
        underTwentyDegree: false,
        wheelSize: 19
      },
      conterConfig: {
        speed: {
          title: 'Speed',
          unit: 'MPH',
          min: 45,
          max: 70,
        },
        temperature: {
          title: 'Outside Temperature',
          unit: '°',
          min: -10,
          max: 40
        }
      }
    }
  }

	render () {
    const {carRange, controller, conterConfig} = this.state
		return (
			<div className='tesla_container'>
				<h1>Range Per Charge</h1>
        <TeslaCar wheelSize={controller.wheelSize} teslaSpeed={controller.speed}/>
        <TeslaRange carRange={carRange}/>
        <div className='tesla_controller clearfix'>
          <TeslaCounter config={conterConfig.speed} currentValue={controller.speed}/>
          <TeslaCounter config={conterConfig.temperature} currentValue={controller.temperature}/>
        </div>
        <TeslaNotice />
			</div>
		)
	}
}

export default TeslaContainer