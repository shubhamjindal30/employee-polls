import { UserActionType, SET_USERS, User } from './types';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
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
