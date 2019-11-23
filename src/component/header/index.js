import React from 'react'
import './styles.scss'
import * as Logo from 'images/green.png'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <nav className="navbar">
    <img className="logo" data-test="logoIMG" src={Logo} alt="Logo" />
    <div className="text">Where sustainability meets technology.</div>

    <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse" data-test="headerComponent">

          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/hello' className="nav-link">Hello</Link>
            </li>
            <li className="nav-item">
              <Link to='/headline' className="nav-link">Headline</Link>
            </li>
          </ul>
      </nav>
      </nav>

  )
}

export default Header
