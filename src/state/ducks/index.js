import { combineReducers } from 'redux'

import counterReducer from './counter/reducer'

const combinedReducer = combineReducers({
  counter: counterReducer,
})

export default combinedReducer
