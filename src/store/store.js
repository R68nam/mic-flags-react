import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import rootReducer from '../reducers/'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas/'
import RehydrationServices from '../services/rehydrationServices'
import ReduxPersist from '../config/reduxPersist'

let middleware = []
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)


// a function which can create our store and auto-persist the data
export default () => {
  // which enhancers we add are dynamic
  const enhancers = []

  // next bring in the middleware
  enhancers.push(applyMiddleware(...middleware))

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  // create the store!
  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  sagaMiddleware.run(sagas)

  return store
}
