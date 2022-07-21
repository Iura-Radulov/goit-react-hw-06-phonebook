import { configureStore } from '@reduxjs/toolkit';
import { items, filter } from './contactReducers';
// import { contactReducer, filterReducer } from './contactSlice';

// using createReducer
const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

// using createSlice
// const store = configureStore({
//   reducer: {
//     contact: contactReducer,
//     filter: filterReducer,
//   },
// });

export default store;
