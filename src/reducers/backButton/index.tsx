import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'src/store/index';

interface HeaderState {
  backButton: string;
  // outras propriedades do estado da header
}

const initialState: HeaderState = {
  backButton: '/',
  // outras propriedades do estado da header
};

export const backButtonSlice = createSlice({
  name: 'backButton',
  initialState,
  reducers: {
    setBackButton: (state, action: PayloadAction<string>) => {
      state.backButton = action.payload;
    },
  },
});

export const { setBackButton } = backButtonSlice.actions;

export const selectBackButton = (state: AppState) =>
  state.backButton;
export default backButtonSlice.reducer;
