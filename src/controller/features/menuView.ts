import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialValues = {
  currentView: 'chatHistory',
  filter: '',
};

const menuViewSlice = createSlice({
  name: 'menuView',
  initialState: initialValues,
  reducers: {
    setMenuView: (state, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = '';
    },
  },
});

export const getMenuView = (state: any) => state.menuView.currentView;
export const getFilter = (state: any) => state.menuView.filter;

export const { setMenuView, setFilter, clearFilter } = menuViewSlice.actions;

export default menuViewSlice.reducer;
