import * as types from './types'

const INITIAL_STATE = {
  count: 0,
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INCREMENT_ASYNC_SUCCESS:
    case types.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case types.DECREMENT_ASYNC_SUCCESS:
    case types.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }

    default:
      return state
  }
}

export default reducer
