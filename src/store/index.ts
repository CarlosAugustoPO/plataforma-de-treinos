import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

import visitReducer from 'src/reducers/visit/index';
import alertReducer from 'src/reducers/alert/index';
import backButtonReducer from 'src/reducers/backButton/index';

export function makeStore() {
  return configureStore({
    reducer: {
      visit: visitReducer,
      alert: alertReducer,
      backButton: backButtonReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export default store;
