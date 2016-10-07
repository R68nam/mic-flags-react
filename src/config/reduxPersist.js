import immutablePersistenceTransform from '../store/immutablePersistenceTransform'
import { persistentStoreBlacklist, persistentStoreWhitelist } from '../reducers/'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: persistentStoreBlacklist,
    whitelist: persistentStoreWhitelist,
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
