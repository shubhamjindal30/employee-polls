import { UserActionType, SET_USERS, UsersObj } from './types';

interface UserState {
  users: UsersObj
}

const initialState: UserState = {
  users: {}
};

const reducer = (state = initialState, action: UserActionType): UserState => {
  switch (action.type) {
    case SET_USERS:
      const { payload } = action;
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};

export default reducer;
