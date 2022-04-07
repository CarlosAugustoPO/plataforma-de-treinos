import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'src/store/index';

type AlertOpts = {
  content?: {
    message: string;
    severity: string;
    duration: number;
    show: boolean;
  };
};

const initialState: AlertOpts = {
  content: undefined,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    putAlert: (state, action: PayloadAction<AlertOpts>) => {
      state.content = action.payload.content;
    },
  },
});

export const { putAlert } = alertSlice.actions;

export const selectAlert = (state: AppState) => state.alert;
export default alertSlice.reducer;
