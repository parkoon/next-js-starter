import { all, fork } from 'redux-saga/effects'

import counter from './counter'
import user from './user'

export default function* rootSaga() {
  yield all([fork(counter), fork(user)])
}
