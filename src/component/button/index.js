import React, { useEffect } from 'react'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { languages } from './languages'
import { useUndoableReducer, UNDO, REDO } from 'component/reducers'

// api layer
const getRandomHello = () => {
  const randomIndex = (Math.random() * languages.length) | 0
  return languages[randomIndex]
}

const initialState = { language: '', text: '' }
// this is a common pattern for Redux
const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return { ...state, ...initialState }
    case 'fetch_random_hello':
      const { language, text } = getRandomHello()
      return { ...state, language, text }
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
        Hello World
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
          {state.language}
          <br />
          {state.text}
        </h4>
      </div>
    </div>
  )
}

export default HelloButton
