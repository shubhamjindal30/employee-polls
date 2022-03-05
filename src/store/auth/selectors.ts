import { RootState } from "..";

export const getAuthUserFromState = (state: RootState) => state.auth.authUser;
