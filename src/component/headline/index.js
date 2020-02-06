import React, { useEffect } from 'react'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { exercises } from './languages'
import { useUndoableReducer, UNDO, REDO } from '../reducers'
// import { Lightbox } from "react-modal-image";

// import ModalImage from "react-modal-image";
// import ModalImage from "../../src";
// import logo from '../../images/burpee.jpg'


// api layer
const getRandomHello = () => {
  const randomIndex = (Math.random() * exercises.length) | 0
  return exercises[randomIndex]
}

const initialState = { WOD: '', exercise1: '', exercise2: '', exercise3: '', exercise4: '', exercise5: '', exercise6: '', exercise7: '', exercise8: '', exercise9: '', exercise10: '' }
// this is a common pattern for Redux
const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return { ...state, ...initialState }
    case 'fetch_random_hello':
      const { WOD, exercise1, exercise2, exercise3, exercise4,exercise5, exercise6, exercise7, exercise8, exercise9, exercise10 } = getRandomHello()
      return { ...state, WOD, exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10 }
    default:
      return state
  }
}

const HelloButton = () => {
  const { state, dispatch, canRedo, canUndo } = useUndoableReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    dispatch({ type: 'fetch_random_hello' })
  }, [dispatch])

  return (
    <div className="button-style" data-test="buttonComponent">
      <button
        onClick={() => {
          dispatch({ type: 'fetch_random_hello' })
        }}
        className="button border border-white rounded"
      >
      Generate WOD
      </button>
      <br />
      <button
        disabled={!canUndo}
        onClick={() => {
          dispatch({ type: UNDO })
        }}
        className="button border border-white rounded"
      >
        Previous
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reset' })
        }}
        className="button border border-white rounded"
      >
        Clear
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          dispatch({ type: REDO })
        }}
        className="button border border-white rounded"
      >
        Redo
      </button>

      <div className="WOD-output">
        <h2 className="WOD">
          {state.WOD}
        </h2>
          <br />
          <h4 className="WOD-exercise">
          {state.exercise1}

          <br />
          {state.exercise2}
          <br />
          {state.exercise3}
          <br />
          {state.exercise4}
          <br />
          {state.exercise5}
          <br />
          {state.exercise6}
          <br />
          {state.exercise7}
          <br />
          {state.exercise8}
          <br />
          {state.exercise9}
          <br />
          {state.exercise10}
        </h4>
      </div>
    </div>
  )
}

export default HelloButton

// import React, { Component } from 'react'
// import propTypes from 'prop-types'
// import './styles.scss'
// import 'bootstrap/dist/css/bootstrap.css'
//
// class Headline extends Component {
//   render() {
//
//     return (
//       <div className="headline" data-test="HeadlineComponent">
//         <p data-test="header">Hello World</p>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//         <h1 data-test="desc">Hello World</h1>
//
//       </div>
//     )
//   }
// }
//
// Headline.defaultProps = {
//   header: '',
//   desc: ''
// }
//
// Headline.propTypes = {
//   header: propTypes.string.isRequired,
//   desc: propTypes.string.isRequired
// }
//
// export default Headline
