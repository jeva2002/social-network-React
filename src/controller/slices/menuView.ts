import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialValues = {
  currentView: 'chatHistory',
  filter: ''
};

const menuViewSlice = createSlice({
  name: 'menuView',
  initialState: initialValues,
  reducers: {
    setMenuView: (state, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
  },
});

export const { setMenuView, setFilter } = menuViewSlice.actions;

export default menuViewSlice.reducer;
