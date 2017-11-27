import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { EVENTS, ACTIONS } from './';

export function* handleFetch() {
  const requestURL = '/home/ajax/count';

  try {

    const { data } = yield call(axios.get, requestURL)

    yield put(ACTIONS['set']({ count: data.data.count }))

  } catch (err) {}
}

export default function* home() {
  yield takeLatest(EVENTS['fetch'], handleFetch);
}
