import produce from 'immer'
import * as types from './types'

const INITIAL_STATE = {
  foo: '',
}

function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.QUALSON:
        draft.foo = 'bar'
        break
      default:
        break
    }
  })
}

export default reducer
