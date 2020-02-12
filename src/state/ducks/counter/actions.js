import * as types from './types'

export const increment = () => ({
  type: types.INCREMENT,
})
export const decrement = () => ({
  type: types.DECREMENT,
})

export const incrementAsync = () => ({
  type: types.INCREMENT_ASYNC_REQUEST,
})
export const decrementAsync = () => ({
  type: types.DECREMENT_ASYNC_REQUEST,
})
