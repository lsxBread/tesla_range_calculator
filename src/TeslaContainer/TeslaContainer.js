import React from 'react'
import './TeslaContainer.scss'
import TeslaNotice from '../TeslaNotice/TeslaNotice'
import TeslaCar from '../TeslaCar/TeslaCar'
import TeslaRange from '../TeslaRange/TeslaRange'
import TeslaCounter from '../TeslaCounter/TeslaCounter'
import TeslaClimate from '../TeslaClimate/TeslaClimate'
import TeslaWheels from '../TeslaWheels/TeslaWheels'
import batterData from '../Mockup/batter-data.js'

class TeslaContainer extends React.Component {
  constructor(props) {
    super(props)

    this.toggleClimate = this.toggleClimate.bind(this)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.switchSize = this.switchSize.bind(this)
    this.carRangeUpdate = this.carRangeUpdate.bind(this)
    this.calculateCarRange = this.calculateCarRange.bind(this)

    this.state = {
      carRange: [],
      controller: {
        speed: 55,
        temperature: 20,
        isClimateOn: true,
        wheelSize: 19
      },
      config: {
        speed: {
          type: 'speed',
          title: 'Speed',
          unit: 'MPH',
          min: 45,
          max: 70,
          step: 5
        },
        temperature: {
          type: 'temperature',
          title: 'Outside Temperature',
          unit: '°',
          min: -10,
          max: 40,
          step: 10
        },
        climate: {
          limit: 20
        },
        wheels: {
          title: 'Wheels'
        }
      }
    }
  }

  calculateCarRange = (models, controller) => {
    return models.map((model) => {
      const {speed, temperature, isClimateOn, wheelSize} = controller
      const value = batterData[model.toUpperCase()][wheelSize][isClimateOn ? 'on' : 'off'].speed[speed][temperature]
      return {
        model,
        value,
      }
    })
  }

  carRangeUpdate = () => {
    const teslaModels = ['60', '60d', '75', '75d', '90d', 'p100d']
    this.setState({
      carRange: this.calculateCarRange(teslaModels, this.state.controller)
    })
  }

  increase = (type) => {
    const controller = {...this.state.controller}
    const step = this.state.config[type].step
    controller[type] = controller[type] + step
    this.setState({controller}, () => {this.carRangeUpdate()})
  }

  decrease = (type) => {
    const controller = {...this.state.controller}
    const step = this.state.config[type].step
    controller[type] = controller[type] - step
    this.setState({controller}, () => {this.carRangeUpdate()})
  }

  toggleClimate = () => {
    const controller = {...this.state.controller}
    controller.isClimateOn = !controller.isClimateOn
    this.setState({controller}, () => {this.carRangeUpdate()})
  }

  switchSize = (newSize) => {
    if (newSize === this.state.controller.wheelSize) {
      return
    } else {
      const controller = {...this.state.controller}
      controller.wheelSize = newSize
      this.setState({controller}, () => {this.carRangeUpdate()})
    }
  }

  componentDidMount = () => {
    this.carRangeUpdate()
  }

	render () {
    const {carRange, controller, config} = this.state
		return (
			<div className='tesla_container'>
				<h1>Range Per Charge</h1>
        <TeslaCar wheelSize={controller.wheelSize} teslaSpeed={controller.speed}/>
        <TeslaRange carRange={carRange}/>
        <div className='tesla_controller clearfix'>
          <TeslaCounter 
            config={config.speed} 
            currentValue={controller.speed} 
            increase={this.increase}
            decrease={this.decrease}
          />
          <div className='tesla_climate_wrapper clearfix'>
            <TeslaCounter 
              config={config.temperature} 
              currentValue={controller.temperature}
              increase={this.increase}
              decrease={this.decrease}
            />
            <TeslaClimate 
              isAccOn={controller.temperature >= config.climate.limit}
              isClimateOn={controller.isClimateOn}
              toggleClimate={this.toggleClimate}
            />
          </div>
          <TeslaWheels config={config.wheels} wheelSize={controller.wheelSize} switchSize={this.switchSize}/>
        </div>
        <TeslaNotice />
			</div>
		)
	}
}

export default TeslaContainer