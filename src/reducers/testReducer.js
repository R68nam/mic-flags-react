// import Types from '../actions/types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  text: 'Hello World'
})

// request temp
const update = (state, action) =>
  state.merge({
    text: action.text
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
