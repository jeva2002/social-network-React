import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { CurrentUserData } from '../../types';

interface InitialState {
  currentUser: CurrentUserData | undefined;
}

const initialState: InitialState = {
  currentUser: undefined,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<CurrentUserData | undefined>
    ) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = undefined;
    },
  },
});

export const getCurrentUser = (state: { currentUser: InitialState }) =>
  state.currentUser.currentUser;

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
