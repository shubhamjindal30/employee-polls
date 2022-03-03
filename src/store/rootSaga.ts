import { all, fork } from 'redux-saga/effects';

import { watchUserRequests } from './users/saga';

export function* watcherSaga() {
  yield all([fork(watchUserRequests)]);
}
