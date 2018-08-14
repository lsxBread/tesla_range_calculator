import React from 'react'
import './TeslaContainer.scss'
import TeslaNotice from '../TeslaNotice/TeslaNotice'
import TeslaCar from '../TeslaCar/TeslaCar'

class TeslaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carstats: [],
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
    const {config} = this.state
		return (
			<div className='tesla_container'>
				<h1>Range Per Charge</h1>
        <TeslaCar wheelSize={config.wheelSize} teslaSpeed={config.speed}/>
        <TeslaNotice />
			</div>
		)
	}
}

export default TeslaContainer