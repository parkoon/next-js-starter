import { fork, all, put, call, takeLatest, delay } from 'redux-saga/effects'
import * as types from '@state/ducks/user/types'
import { loginAPI, signupAPI } from '@/api/user'

import { Router } from '@server/routes'
import { setSession, delSession } from '@/helper/auth'

function* login(action) {
  try {
    const { data } = yield call(loginAPI, action.payload)
    const { token } = data

    setSession(token)
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: data,
    })

    Router.pushRoute('/')
  } catch (err) {
    yield put({
      type: types.LOGIN_FAILURE,
      error: err.response && err.response.data,
    })
  }
}

function* logout(action) {
  delSession()
  yield put({
    type: types.LOGOUT_SUCCESS,
  })
  Router.pushRoute('/auth/login')
}

function* signup(action) {
  try {
    const { data } = yield call(signupAPI, action.payload)
    Router.pushRoute('/auth/login')
  } catch (err) {
    yield put({
      type: types.SIGNUP_FAILURE,
      error: err.response && err.response.data,
    })
  }
}

function* watchLogin() {
  yield delay(2000)
  yield takeLatest(types.LOGIN_REQUEST, login)
}

function* watchLogout() {
  yield
  yield takeLatest(types.LOGOUT_REQUEST, logout)
}

function* watchSignup() {
  yield takeLatest(types.SIGNUP_REQUEST, signup)
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignup), fork(watchLogout)])
}
