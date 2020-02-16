import { combineReducers } from 'redux'

import { loadingReducer } from '@/helper/loadingReducer'
import { errorReducer } from '@/helper/errorReducer'
import counterReducer from './counter/reducer'
import userReducer from './user/reducer'

const combinedReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loading: loadingReducer,
  error: errorReducer,
})

export default combinedReducer
