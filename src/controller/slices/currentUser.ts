import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { ICurrentUser } from '../../model/types';

const initialState: ICurrentUser = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<{
        id: string;
      } | null>
    ) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
