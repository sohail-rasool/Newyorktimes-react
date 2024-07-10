import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='d-flex justify-content-center py-4 header-wrapper'>
      <Link to="/"><img className='logo-img' src={Logo} alt="Logo" /></Link>
    </header>
  )
}

export default Header