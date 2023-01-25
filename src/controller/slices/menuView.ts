import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialValues = {
  currentView: 'chatHistory',
};

const menuViewSlice = createSlice({
  name: 'menuView',
  initialState: initialValues,
  reducers: {
    setMenuView: (state, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setMenuView } = menuViewSlice.actions;

export default menuViewSlice.reducer;
