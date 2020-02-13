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
      case types.LOGIN_REQUEST:
        draft.loading = true
        break
      case types.LOGIN_SUCCESS:
        draft.me = action.paylod
        draft.logged = true
        draft.loading = false
        draft.error = null
        break
      case types.LOGIN_FAILURE:
        draft.me = {}
        draft.loading = false
        draft.logged = false
        draft.error = action.payload

        break
      default:
        break
    }
  })
}

export default reducer
