import { RootState } from "..";

export const getUsersFromState = (state: RootState) => state.user.users;