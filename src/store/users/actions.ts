import { GET_USERS, SET_USERS, UsersObj, GetUsersAction, SetUsersAction } from './types';

export const getUsers = (): GetUsersAction => ({ type: GET_USERS });
export const setUsers = (users: UsersObj): SetUsersAction => ({
  type: SET_USERS,
  payload: users
});
