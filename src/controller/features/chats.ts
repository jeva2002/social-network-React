import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat, ContactData } from '../../types';

interface InitialState {
  contacts: (ContactData | undefined)[];
  activeChats: (ContactData | undefined)[];
  currentChat: ContactData | undefined;
}

const initialState: InitialState = {
  contacts: [],
  activeChats: [],
  currentChat: undefined,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState: initialState,
  reducers: {
    setContacts: (
      state,
      action: PayloadAction<(ContactData | undefined)[]>
    ) => {
      state.contacts = action.payload;
    },
    setActiveChats: (
      state,
      action: PayloadAction<(ContactData | undefined)[]>
    ) => {
      state.activeChats = action.payload;
    },
    setCurrentChat: (state, action: PayloadAction<ContactData>) => {
      state.currentChat = action.payload;
    },
    updateChat: (state, action: PayloadAction<{ chat: any; id: any }>) => {
      const targetChat = state.activeChats.find(
        (e) => e?.chat.id === action.payload.id
      );
      const chatInContext =
        state.activeChats[state.activeChats.indexOf(targetChat)];
      if (chatInContext) chatInContext.chat = action.payload.chat;
    },
  },
});

export const getContacts = (state: {
  chats: { contacts: (ContactData | undefined)[] };
}) => state.chats.contacts;

export const getActiveChats = (state: {
  chats: { activeChats: (ContactData | undefined)[] };
}) => state.chats.activeChats;
export const getCurrentChat = (state: {
  chats: { currentChat: ContactData | undefined };
}) => state.chats.currentChat;

export const { setActiveChats, setContacts, setCurrentChat, updateChat } =
  chatsSlice.actions;

export default chatsSlice.reducer;
