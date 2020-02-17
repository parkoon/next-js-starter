import produce from 'immer'
import * as types from './types'

const INITIAL_STATE = {
  me: {},
  error: null,
  logged: false,
  loading: false,
}

function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT_REQUEST: {
        draft.loading = true
        break
      }

      case types.LOGOUT_SUCCESS: {
        draft.loading = false
        draft.logged = false
        draft.me = {}
        break
      }
      case types.LOGOUT_FAILURE: {
        draft.error = action.payload
        draft.loading = false
        break
      }

      case types.LOGIN_REQUEST:
        draft.loading = true
        break
      case types.LOGIN_SUCCESS: {
        draft.me = action.payload
        draft.logged = true
        draft.loading = false
        draft.error = null
        break
      }

      case types.LOGIN_FAILURE:
        draft.me = {}
        draft.loading = false
        draft.logged = false
        draft.error = action.payload
        break

      case types.SIGNUP_REQUEST:
        draft.loading = true
        break
      case types.SIGNUP_FAILURE:
        draft.loading = false
        break
      case types.SIGNUP_SUCCESS:
        draft.loading = false
        draft.me = action.payload
        break
      default:
        break
    }
  })
}

export default reducer
