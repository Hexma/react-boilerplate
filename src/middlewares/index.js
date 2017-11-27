/* logger */
export const loggerMiddleware = store => next => action => {
  console.group(action.type)
  console.info('dispaching', action)
  let result = next(action)
  console.log('next State', store.getState())
  console.groupEnd(action.type)
}
