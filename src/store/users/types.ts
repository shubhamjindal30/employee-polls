export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';

export interface User {
  id: string;
  password: string;
  name: string;
  avatarUrl: string;
  answers: {
    [k: string]: string;
  };
  questions: string[];
}

export interface GetUsersAction {
  type: typeof GET_USERS;
}

export interface SetUsersAction {
  type: typeof SET_USERS;
  payload: User[];
}

export type UserActionType = GetUsersAction | SetUsersAction;
