import { combineReducers } from 'redux';

import { appReducer, routeReducer } from '../app/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    app: appReducer,
    ...injectedReducers,
  });
}
