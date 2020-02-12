import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './ducks'

function configureStore(preloadedState) {
  const middlewares = []

  const store = createStore(
    reducer,
    preloadedState,
    compose(applyMiddleware(...middlewares))
  )

  return store
}

export default configureStore
