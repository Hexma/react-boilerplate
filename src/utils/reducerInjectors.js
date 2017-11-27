import createReducer from '../reducer';

export function injectReducerFactory(store) {
  return function injectReducer(key, reducer) {

    store.injectedReducers[key] = reducer;

    store.replaceReducer(createReducer(store.injectedReducers));

  };
}

export default function getInjectors(store) {

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
