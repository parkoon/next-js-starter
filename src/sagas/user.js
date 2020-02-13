import { fork, all, put, call, takeLatest, delay } from 'redux-saga/effects'
import * as types from '@state/ducks/user/types'
import { loginAPI } from '@/services/api/user'

function* login(action) {
  try {
    const { data } = yield call(loginAPI, action.payload)
    debugger
    const { token } = data
    localStorage.setItem('token', token)
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: data,
    })
  } catch (err) {
    yield put({
      type: types.LOGIN_FAILURE,
      error: err.response && err.response.data,
    })
  }
}

function* watchLogin() {
  yield delay(2000)
  yield takeLatest(types.LOGIN_REQUEST, login)
}

export default function* userSaga() {
  yield all([fork(watchLogin)])
}
