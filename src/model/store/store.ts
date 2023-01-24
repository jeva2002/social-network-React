import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from '../../controller/slices';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});
