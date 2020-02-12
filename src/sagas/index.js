import { all, fork } from 'redux-saga/effects'

import counter from './counter.js'

export default function* rootSaga() {
  yield all([fork(counter)])
}
