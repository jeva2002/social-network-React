import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  userOptions: string;
  chatOptions: string;
}

const initialState: InitialState = {
  userOptions: 'menu',
  chatOptions: 'currentChat',
}

const globalViewSlice = createSlice({
  name: 'globalView',
  initialState: initialState,
  reducers: {
    setUserOptions: (state, action: PayloadAction<string>) => {
      state.userOptions = action.payload;
    },
    setChatOptions: (state, action: PayloadAction<string>) => {
      state.chatOptions = action.payload;
    }
  }
})

export const userOptions = (state: any) => state.globalView.userOptions;

export const { setChatOptions, setUserOptions } = globalViewSlice.actions;

export default globalViewSlice.reducer;