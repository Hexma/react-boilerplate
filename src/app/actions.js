import {
  LOADING,
  LOAD_SUCCESS,
  LOAD_ERROR,
} from './constants';

export function loading() {
  return {
    type: LOADING,
  };
}

export function load_success(data) {
  return {
    type: LOAD_SUCCESS,
    data
  };
}

export function load_error(error) {
  return {
    type: LOAD_ERROR,
    error,
  };
}
