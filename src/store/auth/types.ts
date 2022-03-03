import { User } from '../users/types';

export const SIGN_IN = 'SIGN_IN';
export const SET_AUTH_USER = 'SET_AUTH_USER';
export const SIGN_OUT = 'SIGN_OUT';

export interface SignInPayload {
  username: string;
  password: string;
}

export interface SignInAction {
  type: typeof SIGN_IN;
  payload: SignInPayload;
}

export interface SetAuthUserAction {
  type: typeof SET_AUTH_USER;
  payload: User | null;
}

export interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type AuthActionType = SignInAction | SetAuthUserAction | SignOutAction;
