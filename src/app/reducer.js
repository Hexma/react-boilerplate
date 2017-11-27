import { LOCATION_CHANGE } from 'react-router-redux';

import {
  LOAD_SUCCESS,
  LOADING,
  LOAD_ERROR,
} from './constants';

export function appReducer(state = { loading: false, error: false }, action) {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true, error: false };
    case LOAD_SUCCESS:
      return {...state, loading: false, error: false };
    case LOAD_ERROR:
      return {...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export function routeReducer(state = { location: null }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {...state, location: action.payload };
    default:
      return state;
  }
}
