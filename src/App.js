import React from 'react'
import Header from './component/header'
import HelloButton from './component/button'
// import Headline from 'component/headline'
import './app.scss'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' />
        <Route exact path='/hello' component={HelloButton} />
      </div>
    </Router>
  )
}

export default App
