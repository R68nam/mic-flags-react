import { combineReducers } from 'redux'
import TestReducer from './testReducer'

const rootReducer = combineReducers({
  testReducer: TestReducer
})

export default rootReducer
