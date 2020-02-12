import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from '@/sagas'
import reducer from './ducks'

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

  const store = createStore(reducer, preloadedState, enhancer)

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
