import React, { Component } from 'react'
import propTypes from 'prop-types'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Headline extends Component {
  render() {

    return (
      <div className="headline" data-test="HeadlineComponent">
        <p data-test="header">Hello World</p>
        <h1 data-test="desc">Hello World</h1>
      </div>
    )
  }
}

Headline.defaultProps = {
  header: '',
  desc: ''
}

Headline.propTypes = {
  header: propTypes.string.isRequired,
  desc: propTypes.string.isRequired
}

export default Headline
