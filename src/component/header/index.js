import React from 'react'
import './styles.scss'
import logo from '../../images/whoop.png'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <nav className="navbar">
    <img className="logo" src={logo} alt="Logo" />
    <div className="text">GO FIT</div>

    <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse" data-test="headerComponent">

          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/hello' className="nav-link">Exercises</Link>
            </li>
            <li className="nav-item">
              <Link to='/headline' className="nav-link">WOD</Link>
            </li>
          </ul>
      </nav>
      </nav>

  )
}

export default Header
