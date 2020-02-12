import {
  fork,
  all,
  takeLatest,
  takeEvery,
  delay,
  put,
} from 'redux-saga/effects'
import * as types from '@state/ducks/counter/types'

function* increment(action) {
  yield delay(500)
  yield put({
    type: types.INCREMENT_ASYNC_SUCCESS,
  })
}

function* decrement(action) {
  yield delay(500)
  yield put({
    type: types.DECREMENT_ASYNC_SUCCESS,
  })
}

function* watchCounting() {
  yield takeEvery(types.INCREMENT_ASYNC_REQUEST, increment)
  yield takeLatest(types.DECREMENT_ASYNC_REQUEST, decrement)
}

export default function* counterSaga() {
  yield all([fork(watchCounting)])
}
