import React from 'react'
import './Header.scss'
import logoURL from '../assets/logo/logo.svg'

const Header = () => (
  <div className='header'>
    <img src={logoURL} alt='teslaLogo'/>
  </div>
)

export default Header