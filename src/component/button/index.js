import React, { useEffect } from 'react'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { exercises } from './languages'
import { useUndoableReducer, UNDO, REDO } from '../reducers'

// api layer
const getRandomHello = () => {
  const randomIndex = (Math.random() * exercises.length) | 0
  return exercises[randomIndex]
}

const initialState = { exercise: '', duration: '' }
// this is a common pattern for Redux
const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return { ...state, ...initialState }
    case 'fetch_random_hello':
      const { exercise, duration } = getRandomHello()
      return { ...state, exercise, duration }
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
      Random Exercise
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

      <div className="button-output">
        <h4 className="output">
          {state.exercise}
          <br />
          {state.duration}
        </h4>
      </div>
    </div>
  )
}

export default HelloButton
