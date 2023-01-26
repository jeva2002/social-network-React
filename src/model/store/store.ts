import { configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  currentUserReducer,
  menuViewReducer,
} from '../../controller/slices';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    menuView: menuViewReducer,
    contacts: contactsReducer,
  },
});
