// import { createStore } from 'redux';
// ///aqui
// ////
// ////
// ////
// const INITAL_STATE = {
//   store: {
//     visit: {},
//   },
// };
//
// const data = (state = INITAL_STATE, action) => {
//   switch (action.type) {
//     case 'ADD_VISIT':
//       return { ...state, store: { visit: action.visitData } };
//     default:
//       return state;
//   }
// };
// const store = createStore(data);
//
// export default store;

import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

import visitReducer from 'src/reducers/visit/index';

export function makeStore() {
  return configureStore({
    reducer: { visit: visitReducer },
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
