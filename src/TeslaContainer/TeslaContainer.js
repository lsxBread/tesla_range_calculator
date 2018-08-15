import React from 'react'
import './TeslaContainer.scss'
import TeslaNotice from '../TeslaNotice/TeslaNotice'
import TeslaCar from '../TeslaCar/TeslaCar'
import TeslaRange from '../TeslaRange/TeslaRange'
import TeslaCounter from '../TeslaCounter/TeslaCounter'
import TeslaClimate from '../TeslaClimate/TeslaClimate'

class TeslaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.toggleClimate = this.toggleClimate.bind(this)
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
        temperature: 10,
        isClimateOn: true,
        wheelSize: 19
      },
      config: {
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
        },
        climate: {
          limit: 20
        }
      }
    }
  }

  toggleClimate () {
    const controller = {...this.state.controller}
    controller.isClimateOn = !controller.isClimateOn
    this.setState({controller})
  }

	render () {
    const {carRange, controller, config} = this.state
		return (
			<div className='tesla_container'>
				<h1>Range Per Charge</h1>
        <TeslaCar wheelSize={controller.wheelSize} teslaSpeed={controller.speed}/>
        <TeslaRange carRange={carRange}/>
        <div className='tesla_controller clearfix'>
          <TeslaCounter config={config.speed} currentValue={controller.speed}/>
          <TeslaCounter config={config.temperature} currentValue={controller.temperature}/>
          <TeslaClimate 
            isAccOn={controller.temperature >= config.climate.limit}
            isClimateOn={controller.isClimateOn}
            toggleClimate={this.toggleClimate}
          />
        </div>
        <TeslaNotice />
			</div>
		)
	}
}

export default TeslaContainer