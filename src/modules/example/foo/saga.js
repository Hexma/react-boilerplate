import { call, put, select, takeLatest } from 'redux-saga/effects';
import Fetch from '../../../utils/request'
import { EVENTS, ACTIONS } from './';

export function* handleFetch() {
  const requestURL = '/home/ajax/count';

  try {
    const { data } = yield call(Fetch, requestURL)

    yield put(ACTIONS['set']({ count: data.count }))

  } catch (err) {}
}

export default function* home() {
  yield takeLatest(EVENTS['fetch'], handleFetch);
}
