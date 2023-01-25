import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer, menuViewReducer } from '../../controller/slices';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    menuView: menuViewReducer, 
  },
});
