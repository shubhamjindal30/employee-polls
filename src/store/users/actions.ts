import { GET_USERS, SET_USERS, User, GetUsersAction, SetUsersAction } from './types';

export const getUsers = (): GetUsersAction => ({ type: GET_USERS });
export const setUsers = (users: User[]): SetUsersAction => ({
  type: SET_USERS,
  payload: users
});
