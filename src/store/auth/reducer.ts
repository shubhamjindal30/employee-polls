import { User } from '../users/types';
import { AuthActionType, SET_AUTH_USER } from './types';

interface AuthState {
  authUser: User | null;
}

const initialState: AuthState = {
  authUser: null
};

const reducer = (state = initialState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case SET_AUTH_USER:
      const { payload } = action;
      return {
        ...state,
        authUser: payload
      };
    default:
      return state;
  }
};

export default reducer;
