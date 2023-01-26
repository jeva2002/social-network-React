import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactData } from '../../model/types';

interface InitialState {
  activeChats: (ContactData | undefined)[];
}

const initialState: InitialState = {
  activeChats: [],
};

const activeChatsSlice = createSlice({
  name: 'activeChats',
  initialState: initialState,
  reducers: {
    setActiveChats: (
      state,
      action: PayloadAction<(ContactData | undefined)[]>
    ) => {
      state.activeChats = action.payload;
    },
    modifyChat: (state, action) => {
      const { activeChatId, chat } = action.payload
      const activeChat = state.activeChats.find(item => item?.id === activeChatId);
      if(activeChat) activeChat.chat = chat;
    }
  },
});

export const { setActiveChats, modifyChat } = activeChatsSlice.actions;

export default activeChatsSlice.reducer;
