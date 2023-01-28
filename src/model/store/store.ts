import { configureStore } from '@reduxjs/toolkit';
import {
  activeChatsReducer,
  contactsReducer,
  currentChatReducer,
  currentUserReducer,
  globalViewReducer,
  menuViewReducer,
} from '../../controller/slices';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    menuView: menuViewReducer,
    contacts: contactsReducer,
    activeChats: activeChatsReducer,
    globalView: globalViewReducer,
    currentChat: currentChatReducer,
  },
});
