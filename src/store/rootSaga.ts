import { all, fork } from 'redux-saga/effects';

import { watchUserRequests } from './users/saga';
import { watchAuthRequests } from './auth/saga';

export function* watcherSaga() {
  yield all([fork(watchUserRequests), fork(watchAuthRequests)]);
}
