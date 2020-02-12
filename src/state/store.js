import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import reducer from './ducks'

function configureStore(preloadedState, { isServer }) {
  const development = process.env.NODE_ENV === 'development'
  const middlewares = [development && logger]

  const enhancer = development
    ? compose(
        applyMiddleware(...middlewares),
        !isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    : compose(applyMiddleware(...middlewares))

  const store = createStore(reducer, preloadedState, enhancer)

  return store
}

export default configureStore
