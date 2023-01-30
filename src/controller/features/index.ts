import currentUserReducer from './currentUser';
import { setCurrentUser, clearCurrentUser } from './currentUser';
import chatsReducer from './chats';
import { setActiveChats, getActiveChats } from './chats';
import globalViewReducer from './globalView';
import {
  setChatOptions,
  setUserOptions,
  setActive,
  getChatOptions,
  getIsActive,
  getUserOptions,
} from './globalView';

export {
  currentUserReducer,
  setCurrentUser,
  clearCurrentUser,
  chatsReducer,
  setActiveChats,
  getActiveChats,
  globalViewReducer,
  setChatOptions,
  setUserOptions,
  setActive,
  getChatOptions,
  getIsActive,
  getUserOptions,
};
