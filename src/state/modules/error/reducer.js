export const errorReducer = (state = {}, action) => {
  const { type, error } = action
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type)

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches
  return {
    [requestName]: requestState === 'FAILURE' ? error : '',
  }
}
