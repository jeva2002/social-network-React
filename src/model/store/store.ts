import { configureStore } from '@reduxjs/toolkit';
import {
  chatsReducer,
  currentUserReducer,
  globalViewReducer,
} from '../../controller/features';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    chats: chatsReducer,
    globalView: globalViewReducer,
  },
});
