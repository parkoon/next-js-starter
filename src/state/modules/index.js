import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import userReducer from './user/reducer'
import { loadingReducer } from './loading/reducer'
import { errorReducer } from './error/reducer'

const combinedReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loading: loadingReducer,
  error: errorReducer,
})

export default combinedReducer
