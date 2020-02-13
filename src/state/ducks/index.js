import { combineReducers } from 'redux'

import counterReducer from './counter/reducer'
import userReducer from './user/reducer'

const combinedReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

export default combinedReducer
