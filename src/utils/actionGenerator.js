/*
根据前缀和事件名列表生成的Action对象集合
*/
export function actionCreator({ prefix, actions, dispatch }) {
  return actions.reduce(function(result, action) {
    result[action] =
      dispatch ?
      (payload) => dispatch({ type: prefix + action, payload }) :
      (payload) => ({ type: prefix + action, payload })
    return result;
  }, {});
}

export default function actionGenerator({ prefix, actions, dispatch }) {
  return actions.reduce(function(result, action) {

    result['EVENTS'][action] = prefix + action

    result['ACTIONS'][action] = (payload) => ({ type: prefix + action, payload })

    return result;

  }, { 'EVENTS': {}, 'ACTIONS': {} });
}
