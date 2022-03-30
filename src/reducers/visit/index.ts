import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'src/store/index';
import type VisitData from 'src/types/VisitData';

const initialState: VisitData = {
  data: undefined,
};

export const visitSlice = createSlice({
  name: 'visit',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<VisitData>) => {
      state.data = action.payload.data;
    },
  },
});

export const { add } = visitSlice.actions;

export const selectVisit = (state: AppState) => state.visit;
export default visitSlice.reducer;
