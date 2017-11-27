import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { EVENTS as homeEvents, ACTIONS as homeActions } from './index';

export function* handleFetch() {
  const requestURL = '/home/ajax/count';

  try {

    const { data } = yield call(axios.get, requestURL)

    yield put(homeActions['set']({ count: data.data.count }))

  } catch (err) {}
}

export default function* home() {
  yield takeLatest(homeEvents['fetch'], handleFetch);
}
