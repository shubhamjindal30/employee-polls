import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setUsers } from './actions';
import { _getUsers } from '../_DATA';
import { GET_USERS, User } from './types';

function* handleGetUsers() {
  try {
    const response: { [k: string]: User } = yield call(_getUsers);
    yield put(setUsers(response));
  } catch (error) {
    console.log(`Error in handleGetUsers: ${error}`);
  }
}

export function* watchUserRequests() {
  yield all([takeLatest(GET_USERS, handleGetUsers)]);
}
