import { all, select, put, takeLatest } from 'redux-saga/effects';

import { setAuthUser } from './actions';
import { SIGN_IN, SignInAction, SIGN_OUT } from './types';
import { getUsersFromState } from '../users/selectors';
import { User } from '../users/types';

function* handleSignIn(action: SignInAction) {
  try {
    const usersObj: { [k: string]: User } = yield select(getUsersFromState);

    const user = usersObj[action.payload.username];
    if (user && user.password === action.payload.password) {
      yield put(setAuthUser(user));
    }
  } catch (error) {
    console.log(`Error in handleSignIn: ${error}`);
  }
}

function* handleSignOut() {
  try {
    yield put(setAuthUser(null));
  } catch (error) {
    console.log(`Error in handleSignOut: ${error}`);
  }
}

export function* watchAuthRequests() {
  yield all([takeLatest(SIGN_IN, handleSignIn), takeLatest(SIGN_OUT, handleSignOut)]);
}
