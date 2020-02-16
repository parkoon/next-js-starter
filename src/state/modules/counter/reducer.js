import produce from 'immer'
import * as types from './types'

const INITIAL_STATE = {
  count: 0,
}

function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.INCREMENT_ASYNC_SUCCESS:
      case types.INCREMENT: {
        draft.count += 1
        break
      }
      case types.DECREMENT_ASYNC_SUCCESS:
      case types.DECREMENT: {
        draft.count -= 1
        break
      }

      default:
        break
    }
  })
}

export default reducer
