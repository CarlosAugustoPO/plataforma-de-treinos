import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'src/store/index';
import type VisitData from 'src/types/VisitData';

const initialState: VisitData = {
  data: undefined,
  ok: undefined,
  error: undefined,
};

export const visitSlice = createSlice({
  name: 'visit',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<VisitData>) => {
      state.data = action.payload.data;
      state.ok = action.payload.ok;
      state.error = action.payload.error;
    },
  },
});

export const { add } = visitSlice.actions;

export const selectVisit = (state: AppState) => state.visit;
export default visitSlice.reducer;
