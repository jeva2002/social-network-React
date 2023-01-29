import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  userOptions: string;
  chatOptions: string;
  isActive: boolean;
}

const initialState: InitialState = {
  userOptions: 'menu',
  chatOptions: 'currentChat',
  isActive: true,
};

const globalViewSlice = createSlice({
  name: 'globalView',
  initialState: initialState,
  reducers: {
    setUserOptions: (state, action: PayloadAction<string>) => {
      state.userOptions = action.payload;
    },
    setChatOptions: (state, action: PayloadAction<string>) => {
      state.chatOptions = action.payload;
    },
    setActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const getUserOptions = (state: { globalView: InitialState }) =>
  state.globalView.userOptions;
export const getChatOptions = (state: { globalView: InitialState }) =>
  state.globalView.chatOptions;
export const getIsActive = (state: { globalView: InitialState }) =>
  state.globalView.isActive;

export const { setChatOptions, setUserOptions, setActive } =
  globalViewSlice.actions;

export default globalViewSlice.reducer;
