import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactData } from '../../model/types';

interface InitialState {
  currentChat: ContactData | undefined;
}

const initialState: InitialState = {
  currentChat: undefined,
};

const currentChatSlice = createSlice({
  name: 'currentChat',
  initialState: initialState,
  reducers: {
    setCurrentChat: (state, action: PayloadAction<ContactData>) => {
      state.currentChat = action.payload;
    },
  },
});

export const { setCurrentChat } = currentChatSlice.actions;

export default currentChatSlice.reducer;
