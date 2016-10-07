import ReduxPersist from '../config/reduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

const updateReducers = (store) => {

  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store
      persistStore(store, config).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config)
    }
  }).catch(() => {
    persistStore(store, config)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
