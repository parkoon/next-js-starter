import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

// import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import rootSaga from '@/sagas'
import reducer from './modules'

function configureStore(preloadedState, { isServer, req }) {
  const sagaMiddleware = createSagaMiddleware()

  const development = process.env.NODE_ENV === 'development'
  const middlewares = [sagaMiddleware, development && logger]

  const enhancer = development
    ? compose(
        applyMiddleware(...middlewares),
        !isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    : compose(applyMiddleware(...middlewares))

  // Redux persist
  // let store
  // if (isServer) {
  //   store = createStore(reducer, preloadedState, enhancer)
  // } else {
  //   const persistConfig = {
  //     key: 'root',
  //     storage,
  //   }
  //   const persistedReducer = persistReducer(persistConfig, reducer)

  //   store = createStore(persistedReducer, preloadedState, enhancer)
  //   store.__PERSISTOR = persistStore(store)
  // }

  const store = createStore(reducer, preloadedState, enhancer)

  // Run Saga
  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
