import { User } from '../users/types';
import {
  SIGN_IN,
  SET_AUTH_USER,
  SIGN_OUT,
  SignInPayload,
  SignInAction,
  SetAuthUserAction,
  SignOutAction
} from './types';

export const signIn = (signInObj: SignInPayload): SignInAction => ({
  type: SIGN_IN,
  payload: signInObj
});

export const setAuthUser = (user: User | null): SetAuthUserAction => ({
  type: SET_AUTH_USER,
  payload: user
});

export const signOut = (): SignOutAction => ({
  type: SIGN_OUT
});
