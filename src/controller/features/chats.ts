import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactData } from '../../types';

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
    modifyChat: (state, action) => {
      const { activeChatId, chat } = action.payload;
      const activeChat = state.activeChats.find(
        (item) => item?.id === activeChatId
      );
      if (activeChat) activeChat.chat = chat;
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

export const { setActiveChats, modifyChat, setContacts, setCurrentChat } =
  chatsSlice.actions;

export default chatsSlice.reducer;
