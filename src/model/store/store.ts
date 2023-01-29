import { configureStore } from '@reduxjs/toolkit';
import {
  chatsReducer,
  currentUserReducer,
  globalViewReducer,
  menuViewReducer,
} from '../../controller/features';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    menuView: menuViewReducer,
    chats: chatsReducer,
    globalView: globalViewReducer,
  },
});
